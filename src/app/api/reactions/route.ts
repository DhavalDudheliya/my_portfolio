import { Redis } from "@upstash/redis";
import { createHash } from "crypto";
import { type NextRequest, NextResponse } from "next/server";

import { REACTION_IDS, type ReactionType } from "@/lib/reactions-data";

const redis = Redis.fromEnv();

function getFingerprint(req: NextRequest): string {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ua = req.headers.get("user-agent") ?? "unknown";
  return createHash("sha256").update(`${ip}:${ua}`).digest("hex").slice(0, 16);
}

function isValidReaction(r: string): r is ReactionType {
  return REACTION_IDS.includes(r as ReactionType);
}

// GET /api/reactions?slug=<slug>
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "slug required" }, { status: 400 });
  }

  const fp = getFingerprint(req);

  try {
    const [counts, userReactions] = await Promise.all([
      redis.hgetall<Record<ReactionType, number>>(`reactions:${slug}:counts`),
      redis.smembers(`reactions:${slug}:users:${fp}`),
    ]);

    return NextResponse.json({
      counts: counts ?? {},
      userReactions: userReactions ?? [],
    });
  } catch (error) {
    console.error("Error fetching reactions:", error);
    return NextResponse.json({ counts: {}, userReactions: [] });
  }
}

// POST /api/reactions  { slug, reaction }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, reaction } = body;

    if (!slug || !reaction || !isValidReaction(reaction)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const fp = getFingerprint(req);
    const userKey = `reactions:${slug}:users:${fp}`;
    const countsKey = `reactions:${slug}:counts`;

    // Check if user already reacted with this emoji
    const hasReacted = await redis.sismember(userKey, reaction);

    if (hasReacted) {
      // Remove the reaction
      await redis.srem(userKey, reaction);
      await redis.hincrby(countsKey, reaction, -1);
    } else {
      // Add the reaction
      await redis.sadd(userKey, reaction);
      await redis.hincrby(countsKey, reaction, 1);
    }

    // Return updated state
    const [counts, userReactions] = await Promise.all([
      redis.hgetall<Record<ReactionType, number>>(countsKey),
      redis.smembers(userKey),
    ]);

    return NextResponse.json({
      counts: counts ?? {},
      userReactions: userReactions ?? [],
    });
  } catch (error) {
    console.error("Error toggling reaction:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

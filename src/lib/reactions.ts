"use client";

import { useCallback, useEffect, useState } from "react";

import { type ReactionCounts, type ReactionType } from "./reactions-data";

export {
  REACTION_IDS,
  REACTION_TYPES,
  type ReactionConfig,
  type ReactionCounts,
  type ReactionType,
} from "./reactions-data";

export const useReactions = (slug: string) => {
  const [counts, setCounts] = useState<ReactionCounts>({});
  const [userReactions, setUserReactions] = useState<ReactionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch counts + user state from API on mount
  useEffect(() => {
    const fetchReactions = async () => {
      try {
        const res = await fetch(
          `/api/reactions?slug=${encodeURIComponent(slug)}`,
        );
        if (res.ok) {
          const data = await res.json();
          setCounts(data.counts ?? {});
          setUserReactions(data.userReactions ?? []);
        }
      } catch {
        // Silently fail — counts will just show 0
      } finally {
        setIsLoading(false);
      }
    };

    fetchReactions();
  }, [slug]);

  const toggleReaction = useCallback(
    async (reactionId: ReactionType) => {
      const wasActive = userReactions.includes(reactionId);
      const previousUserReactions = userReactions;
      const previousCounts = counts;

      // Optimistic update
      if (wasActive) {
        setUserReactions((prev) => prev.filter((r) => r !== reactionId));
        setCounts((prev) => ({
          ...prev,
          [reactionId]: Math.max((prev[reactionId] ?? 0) - 1, 0),
        }));
      } else {
        setUserReactions((prev) => [...prev, reactionId]);
        setCounts((prev) => ({
          ...prev,
          [reactionId]: (prev[reactionId] ?? 0) + 1,
        }));
      }

      // Sync with server
      try {
        const res = await fetch("/api/reactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, reaction: reactionId }),
        });

        if (!res.ok) {
          throw new Error("Failed to sync reaction");
        }

        const data = await res.json();
        setCounts(data.counts ?? {});
        setUserReactions(data.userReactions ?? []);
      } catch {
        setCounts(previousCounts);
        setUserReactions(previousUserReactions);
      }
    },
    [counts, slug, userReactions],
  );

  return { counts, userReactions, toggleReaction, isLoading };
};

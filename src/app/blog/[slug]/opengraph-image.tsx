import { ImageResponse } from "next/og";

import { seoConfig } from "@/config/seo.config";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const coverImage = post?.coverImage
    ? `${seoConfig.baseUrl}${post.coverImage}`
    : `${seoConfig.baseUrl}${seoConfig.ogImages.blog}`;

  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#020617",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: 48,
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(148, 163, 184, 0.28)",
          borderRadius: 32,
          boxShadow: "0 32px 90px rgba(0, 0, 0, 0.45)",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={post?.title || seoConfig.pages.blog.title}
          src={coverImage}
          style={{
            height: "100%",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>
    </div>,
    size,
  );
}

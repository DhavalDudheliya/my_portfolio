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

  const title = post?.title || seoConfig.pages.blog.title;
  const description = post?.description || seoConfig.pages.blog.description;
  const tags = post?.tags.slice(0, 4) || [];

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#0a0f1f",
        color: "#f8fafc",
        display: "flex",
        fontFamily: "Arial",
        height: "100%",
        padding: 56,
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background:
            "radial-gradient(circle at 18% 20%, #38bdf8 0, transparent 30%), radial-gradient(circle at 84% 18%, #34d399 0, transparent 26%), radial-gradient(circle at 50% 100%, #f59e0b 0, transparent 24%)",
          display: "flex",
          filter: "blur(12px)",
          inset: 0,
          opacity: 0.36,
          position: "absolute",
        }}
      />
      <div
        style={{
          border: "1px solid rgba(148, 163, 184, 0.28)",
          borderRadius: 28,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: 48,
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: 14 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(15, 23, 42, 0.72)",
                border: "1px solid rgba(148, 163, 184, 0.32)",
                borderRadius: 999,
                color: "#bae6fd",
                fontSize: 24,
                padding: "10px 18px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#ffffff",
              display: "flex",
              fontSize: 66,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 940,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#cbd5e1",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            {description}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            color: "#f8fafc",
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            justifyContent: "space-between",
          }}
        >
          <span>{seoConfig.siteName}</span>
          <span style={{ color: "#94a3b8" }}>dhavaldudheliya.com</span>
        </div>
      </div>
    </div>,
    size,
  );
}

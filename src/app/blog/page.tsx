import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";

import { BlogCard } from "@/components/blog";
import { FadeInView } from "@/components/core/FadeInView";
import PageHeader from "@/components/core/PageHeader";
import { generatePageMetadata } from "@/config/seo.config";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = generatePageMetadata("blog");

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-20 md:px-0">
      <FadeInView>
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </FadeInView>
      <PageHeader
        title="All Blogs"
        description="Sharing my thoughts and tutorials on web development and software engineering"
      />

      {/* Blog Posts List */}
      {posts.length > 0 ? (
        <div className="space-y-0">
          {posts.map((post, index) => (
            <FadeInView key={post.slug} delay={index * 0.1}>
              <BlogCard post={post} />
            </FadeInView>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">
            No blog posts yet. Check back soon!
          </p>
        </div>
      )}
    </section>
  );
}

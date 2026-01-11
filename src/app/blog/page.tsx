import type { Metadata } from "next";

import { BlogCard } from "@/components/blog";
import { FadeInView } from "@/components/core/FadeInView";
import PageHeader from "@/components/core/PageHeader";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Dhaval's Portfolio",
  description:
    "Thoughts, tutorials, and insights about web development, React, and software engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-20 md:px-0">
      <PageHeader
        title="All Blogs"
        description="Sharing my thoughts on web development, React patterns, and software engineering best practices."
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

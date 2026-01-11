import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { BlogCard } from "@/components/blog";
import { FadeInView } from "@/components/core/FadeInView";
import PageHeader from "@/components/core/PageHeader";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";

export default function FeaturedBlogs() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3); // Show latest 3 posts

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section id="blogs" className="mx-auto space-y-8 px-4 py-20 md:px-0">
      <PageHeader
        title="Latest Blog Posts"
        description="Thoughts, tutorials, and insights about web development."
      />

      <div className="space-y-0">
        {featuredPosts.map((post, index) => (
          <FadeInView key={post.slug} delay={index * 0.1}>
            <BlogCard post={post} />
          </FadeInView>
        ))}
      </div>

      {posts.length > 3 && (
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            size="lg"
            className="group text-base"
            render={<Link href="/blog" />}
          >
            View All Posts
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
    </section>
  );
}

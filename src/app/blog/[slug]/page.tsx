import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogHeader, TableOfContents } from "@/components/blog";
import { MDXContent } from "@/components/blog/MDXContent";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  // Find previous and next posts for navigation
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "https://dhavaldudheliya.site";

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={`${BASE_URL}/blog/${slug}`}
        datePublished={post.date}
        authorName="Dhaval Dudheliya"
        authorUrl={BASE_URL}
      />
      <main className="container mx-auto px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px]"> */}
          {/* Main Content */}
          <article className="min-w-0">
            <BlogHeader post={post} />

            {/* MDX Content - pass raw content, RSC MDXRemote handles compilation */}
            <MDXContent source={post.content} />

            {/* Post Navigation */}
            {(prevPost || nextPost) && (
              <nav className="border-border mt-12 border-t pt-8">
                <div className="grid grid-cols-2 gap-4">
                  {prevPost && (
                    <a
                      href={`/blog/${prevPost.slug}`}
                      className="group border-border hover:border-primary rounded-lg border p-4 transition-colors"
                    >
                      <span className="text-muted-foreground text-xs">
                        ← Previous
                      </span>
                      <p className="group-hover:text-primary mt-1 font-medium">
                        {prevPost.title}
                      </p>
                    </a>
                  )}
                  {nextPost && (
                    <a
                      href={`/blog/${nextPost.slug}`}
                      className="group border-border hover:border-primary ml-auto rounded-lg border p-4 text-right transition-colors"
                    >
                      <span className="text-muted-foreground text-xs">
                        Next →
                      </span>
                      <p className="group-hover:text-primary mt-1 font-medium">
                        {nextPost.title}
                      </p>
                    </a>
                  )}
                </div>
              </nav>
            )}
          </article>
        </div>
        {/* Table of Contents Sidebar */}
        {/* <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents content={post.content} />
              </div>
            </aside> */}
      </main>
    </>
  );
}

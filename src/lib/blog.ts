import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

// Blog post metadata type
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  readingTime: string;
  coverImage?: string;
}

// Full blog post with content
export interface BlogPostWithContent extends BlogPost {
  content: string;
}

// Directory where blog posts are stored
const BLOGS_DIRECTORY = path.join(process.cwd(), "src/content/blogs");

/**
 * Get all blog post slugs (for static generation)
 */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIRECTORY)) {
    return [];
  }

  const files = fs.readdirSync(BLOGS_DIRECTORY);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get a single blog post by slug (without content for listing)
 */
export function getPostBySlug(slug: string): BlogPostWithContent | null {
  try {
    const fullPath = path.join(BLOGS_DIRECTORY, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Calculate reading time
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      tags: data.tags || [],
      published: data.published !== false, // Default to true
      coverImage: data.coverImage,
      readingTime: stats.text,
      content,
    };
  } catch {
    return null;
  }
}

/**
 * Get all blog posts metadata (for listing page)
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;

      // Return post without content for listing
      const { content: _, ...metadata } = post;
      return metadata;
    })
    .filter((post): post is BlogPost => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Get all unique tags from published posts
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
  );
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

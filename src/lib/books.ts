import fs from "fs";
import matter from "gray-matter";
import path from "path";

// Book metadata type
export interface Book {
  slug: string;
  title: string;
  coverImage: string;
  published: boolean;
}

// Full book with content
export interface BookWithContent extends Book {
  content: string;
}

// Directory where books are stored
const BOOKS_DIRECTORY = path.join(process.cwd(), "src/content/books");

/**
 * Get all book slugs (for static generation)
 */
export function getBookSlugs(): string[] {
  if (!fs.existsSync(BOOKS_DIRECTORY)) {
    return [];
  }

  const files = fs.readdirSync(BOOKS_DIRECTORY);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get a single book by slug
 */
export function getBookBySlug(slug: string): BookWithContent | null {
  try {
    const fullPath = path.join(BOOKS_DIRECTORY, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      coverImage: data.coverImage || "",
      published: data.published !== false,
      content,
    };
  } catch {
    return null;
  }
}

/**
 * Get all books metadata (for listing page)
 */
export function getAllBooks(): Book[] {
  const slugs = getBookSlugs();
  const books = slugs
    .map((slug) => {
      const book = getBookBySlug(slug);
      if (!book) return null;

      // Return book without content for listing
      const { content: _, ...metadata } = book;
      return metadata;
    })
    .filter((book): book is Book => book !== null && book.published);

  return books;
}

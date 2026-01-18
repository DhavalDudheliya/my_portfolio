import fs from "fs";
import matter from "gray-matter";
import path from "path";

// Directory where project content is stored
const PROJECTS_CONTENT_DIRECTORY = path.join(
  process.cwd(),
  "src/content/projects",
);

/**
 * Get project MDX content by slug
 * Returns the MDX content for a project or null if not found
 */
export function getProjectContent(slug: string): string | null {
  try {
    const fullPath = path.join(PROJECTS_CONTENT_DIRECTORY, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content } = matter(fileContents);

    return content;
  } catch {
    return null;
  }
}

/**
 * Get all project content slugs (for static generation)
 */
export function getProjectContentSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_CONTENT_DIRECTORY)) {
    return [];
  }

  const files = fs.readdirSync(PROJECTS_CONTENT_DIRECTORY);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

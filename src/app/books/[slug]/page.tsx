import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";

import { MDXContent } from "@/components/blog/MDXContent";
import Container from "@/components/core/Container";
import { FadeInView } from "@/components/core/FadeInView";
import { getAllBooks, getBookBySlug, getBookSlugs } from "@/lib/books";

interface BookPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all books
export async function generateStaticParams() {
  const slugs = getBookSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each book
export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: `${book.title} | Books`,
    openGraph: {
      title: book.title,
      type: "article",
      images: book.coverImage ? [book.coverImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: book.title,
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book || !book.published) {
    notFound();
  }

  // Find previous and next books for navigation
  const allBooks = getAllBooks();
  const currentIndex = allBooks.findIndex((b) => b.slug === slug);
  const prevBook =
    currentIndex < allBooks.length - 1 ? allBooks[currentIndex + 1] : null;
  const nextBook = currentIndex > 0 ? allBooks[currentIndex - 1] : null;

  return (
    <Container className="min-h-screen py-12">
      <article className="mx-auto max-w-3xl">
        {/* Back to Books */}
        <FadeInView>
          <Link
            href="/books"
            className="text-muted-foreground hover:text-primary mb-8 inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Books
          </Link>
        </FadeInView>

        {/* Book Title */}
        <FadeInView>
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {book.title}
          </h1>
        </FadeInView>

        {/* Book Cover */}
        {book.coverImage && (
          <FadeInView>
            <div className="border-border relative mx-auto mb-12 aspect-2/3 w-full max-w-xs overflow-hidden rounded-lg border shadow-lg">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeInView>
        )}

        {/* MDX Content */}
        <FadeInView>
          <MDXContent source={book.content} />
        </FadeInView>

        {/* Book Navigation */}
        {(prevBook || nextBook) && (
          <FadeInView>
            <nav className="border-border mt-12 border-t pt-8">
              <div className="grid grid-cols-2 gap-4">
                {prevBook && (
                  <a
                    href={`/books/${prevBook.slug}`}
                    className="group border-border hover:border-primary rounded-lg border p-4 transition-colors"
                  >
                    <span className="text-muted-foreground text-xs">
                      ← Previous
                    </span>
                    <p className="group-hover:text-primary mt-1 font-medium">
                      {prevBook.title}
                    </p>
                  </a>
                )}
                {nextBook && (
                  <a
                    href={`/books/${nextBook.slug}`}
                    className="group border-border hover:border-primary ml-auto rounded-lg border p-4 text-right transition-colors"
                  >
                    <span className="text-muted-foreground text-xs">
                      Next →
                    </span>
                    <p className="group-hover:text-primary mt-1 font-medium">
                      {nextBook.title}
                    </p>
                  </a>
                )}
              </div>
            </nav>
          </FadeInView>
        )}
      </article>
    </Container>
  );
}

import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";

import { BookCard } from "@/components/books";
import { FadeInView } from "@/components/core/FadeInView";
import PageHeader from "@/components/core/PageHeader";
import { generatePageMetadata } from "@/config/seo.config";
import { getAllBooks } from "@/lib/books";

export const metadata: Metadata = generatePageMetadata("books");

export default function BooksPage() {
  const books = getAllBooks();

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
        title="Books"
        description="A collection of books I've read along with my thoughts and key takeaways"
      />

      {/* Books Grid */}
      {books.length > 0 ? (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {books.map((book, index) => (
            <FadeInView key={book.slug} delay={index * 0.1}>
              <BookCard book={book} />
            </FadeInView>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">
            No books yet. Check back soon!
          </p>
        </div>
      )}
    </section>
  );
}

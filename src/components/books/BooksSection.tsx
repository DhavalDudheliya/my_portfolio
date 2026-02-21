import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";

import { BookCard } from "@/components/books";
import { FadeInView } from "@/components/core/FadeInView";
import PageHeader from "@/components/core/PageHeader";
import { Button } from "@/components/ui/button";
import { getAllBooks } from "@/lib/books";

export default function BooksSection() {
  const books = getAllBooks();

  return (
    <section id="books" className="mx-auto space-y-8 px-2 py-20 md:px-4">
      <PageHeader
        title="Books"
        description="A collection of books I've read along with my thoughts and takeaways."
      />

      {books.length > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books.slice(0, 3).map((book, index) => (
              <FadeInView key={book.slug} delay={index * 0.1}>
                <BookCard book={book} />
              </FadeInView>
            ))}
          </div>

          {books.length > 3 && (
            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                size="lg"
                className="group text-base"
                render={<Link href="/books" />}
              >
                View All Books
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="group text-base"
            render={<Link href="/books" />}
          >
            Browse Books
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
    </section>
  );
}

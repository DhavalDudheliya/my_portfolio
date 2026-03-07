"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";

import type { Book } from "@/lib/books";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.slug}`} className="group block h-full">
      <article className="flex h-full flex-col items-center">
        {/* Book wrapper with 3D perspective */}
        <div className="relative w-full max-w-[200px] perspective-[600px]">
          {/* Book body */}
          <div className="relative transition-transform duration-500 ease-out transform-3d group-hover:transform-[rotateY(-8deg)]">
            {/* Currently Reading Badge */}
            {book.currentlyReading && (
              <div className="absolute -top-2 -right-2 z-30 flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg shadow-emerald-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Reading
              </div>
            )}

            {/* Front Cover */}
            <div className="relative aspect-2/3 w-full overflow-hidden rounded-sm rounded-r-md">
              {/* Spine highlight — thin bright strip on left */}
              <div className="absolute inset-y-0 left-0 z-20 w-[6px] bg-linear-to-r from-black/40 via-white/15 to-transparent" />

              {book.coverImage ? (
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-neutral-800 via-neutral-700 to-neutral-900 p-5">
                  <span className="text-5xl">📖</span>
                  <span className="text-center text-sm leading-snug font-semibold text-neutral-200">
                    {book.title}
                  </span>
                </div>
              )}

              {/* Glossy reflection overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-br from-white/12 via-transparent to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Subtle inner shadow for depth */}
              <div className="pointer-events-none absolute inset-0 z-10 rounded-sm rounded-r-md shadow-[inset_3px_0_8px_rgba(0,0,0,0.3),inset_-1px_0_3px_rgba(0,0,0,0.15)]" />
            </div>

            {/* Right-side page edges */}
            {/* <div
              className="absolute top-[3px] right-[-5px] bottom-[3px] z-[-1] w-[3px] rounded-r-[2px]"
              style={{
                background:
                  "linear-gradient(to right, #d4d4d8, #e4e4e7 40%, #d4d4d8 60%, #c4c4c8)",
                boxShadow: "1px 0 2px rgba(0,0,0,0.2)",
              }}
            /> */}

            {/* Bottom page edges */}
            {/* <div
              className="absolute right-[2px] bottom-[-4px] left-[8px] z-[-1] h-[2px] rounded-b-[2px]"
              style={{
                background:
                  "linear-gradient(to bottom, #d4d4d8, #e4e4e7 40%, #d4d4d8 60%, #c4c4c8)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            /> */}
          </div>

          {/* Book shadow on surface */}
          <div className="mx-auto mt-1 h-[6px] w-[85%] rounded-full bg-black/20 blur-xs transition-all duration-500 group-hover:w-[90%] group-hover:bg-black/30 group-hover:blur-[6px] dark:bg-black/40 dark:group-hover:bg-black/50" />
        </div>

        {/* Title */}
        <h3 className="group-hover:text-primary mt-4 text-center text-sm leading-tight font-medium transition-colors duration-300 md:text-base">
          {book.title}
        </h3>
      </article>
    </Link>
  );
}

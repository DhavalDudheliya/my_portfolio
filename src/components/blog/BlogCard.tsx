import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";

import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="flex flex-col gap-4 border-b py-6 transition-colors md:flex-row md:gap-8">
        {/* Image Section */}
        <div className="border-border relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-xl border md:aspect-square md:h-64 md:w-80 lg:h-64 lg:w-90">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="bg-muted flex h-full w-full items-center justify-center">
              <span className="text-muted-foreground/30 text-4xl">📝</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-4">
            {/* Tags */}
            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-sm px-2 py-0.5 text-xs font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col">
              {/* Title */}
              <h3 className="group-hover:text-primary mb-2 text-xl leading-tight font-semibold tracking-tight transition-colors md:text-2xl">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm md:text-base">
                {post.description}
              </p>
            </div>
          </div>

          {/* Footer: Date & Read More */}
          <div className="text-muted-foreground flex items-center justify-between text-sm">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-foreground group-hover:text-primary flex items-center gap-1 font-medium transition-colors">
              Read more
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

interface BlogHeaderProps {
  post: BlogPost;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <header className="border-border mb-8 border-b pb-8">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        className="text-muted-foreground mb-6 -ml-2"
        render={<Link href="/blog" />}
      >
        <ArrowLeft className="mr-1 size-4" />
        Back to Blog
      </Button>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="bg-muted relative mb-6 aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {post.title}
      </h1>

      {/* Description */}
      <p className="text-muted-foreground mt-4 text-lg">{post.description}</p>

      {/* Metadata */}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Calendar className="size-4" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Clock className="size-4" />
          <span>{post.readingTime}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-border/70 bg-muted/45 text-muted-foreground rounded-full px-2.5 py-1 text-[11px] leading-none font-medium shadow-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </header>
  );
}

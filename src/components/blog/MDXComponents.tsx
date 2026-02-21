import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";
import { Quote } from "@/components/ui/Quote";

// MDX components type definition
type MDXComponents = {
  [key: string]:
    | ComponentType<{ children?: ReactNode }>
    | ComponentType<ImageProps>;
};

// Custom heading with anchor link
function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Tag = `h${level}` as const;

  function Heading({
    children,
    id,
    className,
    ...props
  }: ComponentPropsWithoutRef<typeof Tag>) {
    return (
      <Tag
        id={id}
        className={cn(
          "group scroll-mt-24",
          level === 1 && "mt-0 mb-6 text-3xl font-bold tracking-tight",
          level === 2 &&
            "border-border mt-10 mb-4 border-b pb-2 text-2xl font-semibold tracking-tight",
          level === 3 && "mt-8 mb-3 text-xl font-semibold",
          level === 4 && "mt-6 mb-2 text-lg font-medium",
          className,
        )}
        {...props}
      >
        {children}
        {id && (
          <a
            href={`#${id}`}
            className="text-muted-foreground ml-2 opacity-0 transition-opacity group-hover:opacity-100"
            aria-label={`Link to ${children}`}
          >
            #
          </a>
        )}
      </Tag>
    );
  }

  Heading.displayName = `Heading${level}`;
  return Heading;
}

// Typed component props for HTML elements
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type OrderedListProps = ComponentPropsWithoutRef<"ol">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type HRProps = ComponentPropsWithoutRef<"hr">;
type TableProps = ComponentPropsWithoutRef<"table">;
type THeadProps = ComponentPropsWithoutRef<"thead">;
type TBodyProps = ComponentPropsWithoutRef<"tbody">;
type TRProps = ComponentPropsWithoutRef<"tr">;
type THProps = ComponentPropsWithoutRef<"th">;
type TDProps = ComponentPropsWithoutRef<"td">;
type CodeProps = ComponentPropsWithoutRef<"code"> & { children?: ReactNode };
type StrongProps = ComponentPropsWithoutRef<"strong">;
type EmProps = ComponentPropsWithoutRef<"em">;
type ImgProps = ComponentPropsWithoutRef<"img">;

// MDX Components mapping
export const BlogMDXComponents: MDXComponents = {
  // Headings with anchor links
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),

  // Paragraphs
  p: ({ className, ...props }: ParagraphProps) => (
    <p className={cn("leading-7 not-first:mt-4", className)} {...props} />
  ),

  // Links
  a: ({ href, className, children, ...props }: AnchorProps) => {
    const isExternal = href?.startsWith("http");
    const Component = isExternal ? "a" : Link;

    return (
      <Component
        href={href || "#"}
        className={cn(
          "text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors",
          className,
        )}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </Component>
    );
  },

  // Lists
  ul: ({ className, ...props }: ListProps) => (
    <ul
      className={cn("my-4 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: OrderedListProps) => (
    <ol
      className={cn("my-4 ml-6 list-decimal [&>li]:mt-2", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: ListItemProps) => (
    <li className={cn("leading-7", className)} {...props} />
  ),

  // Blockquote
  blockquote: ({ className, ...props }: BlockquoteProps) => (
    <blockquote
      className={cn(
        "border-primary text-muted-foreground mt-6 border-l-4 pl-6 italic",
        className,
      )}
      {...props}
    />
  ),

  // Horizontal rule
  hr: ({ className, ...props }: HRProps) => (
    <hr className={cn("border-border my-8", className)} {...props} />
  ),

  // Table
  table: ({ className, ...props }: TableProps) => (
    <div className="my-6 w-full overflow-x-auto">
      <table
        className={cn("w-full border-collapse text-sm", className)}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: THeadProps) => (
    <thead className={cn("bg-muted/50", className)} {...props} />
  ),
  tbody: ({ className, ...props }: TBodyProps) => (
    <tbody className={cn("[&>tr:last-child]:border-0", className)} {...props} />
  ),
  tr: ({ className, ...props }: TRProps) => (
    <tr
      className={cn("border-border border-b transition-colors", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: THProps) => (
    <th
      className={cn(
        "text-foreground h-12 px-4 text-left font-semibold [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: TDProps) => (
    <td
      className={cn(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),

  // Code - inline and block
  code: ({ className, children, ...props }: CodeProps) => {
    // Check if it's inline code (not inside a pre tag)
    const isInline = !className?.includes("language-");

    if (isInline) {
      return (
        <code
          className={cn(
            "bg-muted relative rounded px-[0.4rem] py-[0.2rem] font-mono text-sm",
            className,
          )}
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },

  // Pre block for code
  pre: CodeBlock,

  // Images
  img: ({ src, alt, className, ...props }: ImgProps) => (
    <span className="my-6 block overflow-hidden rounded-lg">
      <Image
        src={typeof src === "string" ? src : ""}
        alt={alt || "Blog image"}
        width={800}
        height={450}
        className={cn("rounded-lg", className)}
        {...(props as Omit<ImageProps, "src" | "alt" | "width" | "height">)}
      />
    </span>
  ),

  // Strong and emphasis
  strong: ({ className, ...props }: StrongProps) => (
    <strong className={cn("font-semibold", className)} {...props} />
  ),
  em: ({ className, ...props }: EmProps) => (
    <em className={cn("italic", className)} {...props} />
  ),

  // Custom components
  Callout,
  Quote,
  Image: ({ alt, ...restProps }: ImageProps) => (
    <span className="my-6 block overflow-hidden rounded-lg">
      <Image
        width={800}
        height={450}
        className="rounded-lg"
        alt={alt || "Blog image"}
        {...restProps}
      />
    </span>
  ),
};

import { Quote as QuoteIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface QuoteProps {
  children?: ReactNode;
  author?: string;
  className?: string;
}

export function Quote({ children, author, className }: QuoteProps) {
  return (
    <div
      className={cn(
        "border-primary/20 relative my-8 rounded-xl border-2 p-6",
        className,
      )}
    >
      <div className="bg-background text-primary absolute -top-4 -left-4 rounded-full p-3">
        <QuoteIcon className="size-8 rotate-180 fill-current opacity-80" />
      </div>

      <blockquote className="text-foreground/90 relative z-10 border-none pl-0 text-lg leading-relaxed font-medium italic">
        {children}
      </blockquote>

      {author && (
        <footer className="text-muted-foreground mt-0 mr-6 flex items-center justify-end gap-2 text-sm font-semibold">
          <span className="bg-border h-px w-8" />
          {author}
        </footer>
      )}

      <div className="bg-background text-primary absolute -right-4 -bottom-4 rounded-full p-3">
        <QuoteIcon className="size-8 fill-current opacity-80" />
      </div>
    </div>
  );
}

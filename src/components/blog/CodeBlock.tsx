import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

// Code block component with copy button functionality
export function CodeBlock({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      className={cn(
        "border-border my-6 overflow-x-auto rounded-lg border bg-[#0d1117] p-4 text-sm",
        "[&>code]:bg-transparent [&>code]:p-0",
        // rehype-pretty-code classes
        "[&_code]:grid [&_code]:max-h-[500px] [&_code]:overflow-auto",
        "**:data-line:-mx-4 **:data-line:px-4",
        "**:data-highlighted-line:bg-white/10",
        "**:data-highlighted-chars:rounded **:data-highlighted-chars:bg-white/10 **:data-highlighted-chars:px-1",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );
}

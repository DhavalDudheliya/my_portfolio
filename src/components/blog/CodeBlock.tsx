"use client";

import { Check, Copy } from "lucide-react";
import { type ComponentPropsWithoutRef, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// Code block component with copy button functionality
export function CodeBlock({
  className,
  children,
  "data-language": language,
  ...props
}: ComponentPropsWithoutRef<"pre"> & { "data-language"?: string }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = preRef.current?.textContent;
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group/code relative my-6">
      {/* Language badge */}
      {language && (
        <div className="absolute -top-0.5 left-4 z-10">
          <span className="inline-block rounded-b-md bg-zinc-700 px-3 py-1 text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">
            {language}
          </span>
        </div>
      )}

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-md bg-white/10 text-white/60 opacity-0 backdrop-blur-sm transition-all group-hover/code:opacity-100 hover:bg-white/20 hover:text-white"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="size-4 text-green-400" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>

      <pre
        ref={preRef}
        data-language={language}
        className={cn(
          "rounded-xl border border-zinc-700/50 p-4 pt-10 text-sm",
          // Dark theme background
          "bg-[#282c34] text-[#abb2bf]",
          // Code styling - no overflow auto on inner code
          "[&>code]:block [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit",
          // Line styling
          "**:data-line:block",
          // Highlighted lines
          "**:data-highlighted-line:border-l-primary **:data-highlighted-line:-mx-4 **:data-highlighted-line:border-l-2 **:data-highlighted-line:bg-white/5 **:data-highlighted-line:px-4",
          // Highlighted characters
          "**:data-highlighted-chars:rounded **:data-highlighted-chars:bg-white/10 **:data-highlighted-chars:px-1",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}

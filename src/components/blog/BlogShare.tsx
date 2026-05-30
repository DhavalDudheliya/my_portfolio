"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { cn } from "@/lib/utils";

interface BlogShareProps {
  title: string;
  url: string;
  orientation?: "horizontal" | "vertical";
}

const shareLinks = [
  {
    label: "Share on Twitter",
    icon: FaTwitter,
    className: "bg-black text-white hover:bg-black/85",
    href: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    label: "Share on LinkedIn",
    icon: FaLinkedinIn,
    className: "bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90",
    href: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    label: "Share on Facebook",
    icon: FaFacebookF,
    className: "bg-[#1877F2] text-white hover:bg-[#1877F2]/90",
    href: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    label: "Share on WhatsApp",
    icon: FaWhatsapp,
    className: "bg-[#25D366] text-white hover:bg-[#25D366]/90",
    href: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
];

export function BlogShare({
  title,
  url,
  orientation = "horizontal",
}: BlogShareProps) {
  const [copied, setCopied] = useState(false);
  const isVertical = orientation === "vertical";

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div
      className={cn(
        "border-border/80 bg-background/90 flex w-fit items-center gap-2 rounded-xl border p-2 shadow-sm backdrop-blur",
        isVertical ? "flex-col" : "flex-row px-4",
      )}
    >
      <span
        className={cn(
          "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase",
          isVertical ? "px-1" : "mr-1",
        )}
      >
        Share
      </span>

      {shareLinks.map(({ label, icon: Icon, className, href }) => (
        <a
          key={label}
          href={href(url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "flex size-9 items-center justify-center rounded-lg text-sm transition-colors",
            className,
          )}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}

      <button
        type="button"
        onClick={copyLink}
        className={cn(
          "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground flex h-9 items-center justify-center gap-2 rounded-lg px-3 text-xs font-medium transition-colors",
          isVertical && "w-9 px-0",
        )}
        aria-label="Copy article link"
      >
        {copied ? (
          <Check className="size-4" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
        {!isVertical && <span>{copied ? "Copied" : "Copy link"}</span>}
      </button>
    </div>
  );
}

import Link from "next/link";
import React from "react";

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="group relative inline-flex items-center gap-2 rounded-full border border-dashed border-neutral-200 bg-white/50 px-4 py-1.5 text-sm font-medium text-neutral-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-white/80 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:shadow-white/5"
    >
      <div className="flex size-4 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {children}
      </div>
      <span>{name}</span>
    </Link>
  );
}

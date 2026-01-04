"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import Link from "next/link";
import React from "react";

interface SocialLinkProps {
  name: string;
  username: string;
  href: string;
  icon: React.ReactNode;
}

export default function SocialLink({
  name,
  username,
  href,
  icon,
}: SocialLinkProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link
      href={href}
      target="_blank"
      onMouseMove={handleMouseMove}
      className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-neutral-300 bg-white p-4 shadow-sm transition-all duration-300 hover:border-neutral-400 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(100, 100, 100, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-neutral-200 dark:bg-white/10 dark:text-neutral-200 dark:group-hover:bg-white/20">
        <div className="size-5">{icon}</div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-neutral-800 dark:text-neutral-200">
          {name}
        </p>
        <p className="text-xs text-neutral-500 group-hover:text-neutral-600 dark:text-neutral-400 dark:group-hover:text-neutral-300">
          {username}
        </p>
      </div>
    </Link>
  );
}

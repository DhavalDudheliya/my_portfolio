"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInView({
  children,
  className = "",
  delay = 0,
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

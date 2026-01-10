"use client";

import { motion } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  endContent?: React.ReactNode;
  className?: string;
}

const PageHeader = ({
  title,
  description,
  endContent,
  className,
}: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-8", className)}
    >
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        {endContent && (
          <div className="text-muted-foreground text-xs md:text-sm">
            {endContent}
          </div>
        )}
      </div>
      {description && (
        <p className="text-muted-foreground text-sm md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default PageHeader;

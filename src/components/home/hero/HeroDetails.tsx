"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface HeroDetailsProps {
  name: string | React.ReactNode;
  title: string | React.ReactNode;
}

const HeroDetails = ({ name, title }: HeroDetailsProps) => {
  return (
    <div className="flex flex-col gap-2 text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className={cn("text-3xl font-bold", "md:text-5xl lg:text-6xl")}
      >
        {name}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        className={cn(
          "from-foreground to-foreground/50 bg-linear-to-b bg-clip-text text-xl font-bold text-transparent",
          "md:text-2xl lg:text-3xl",
        )}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default HeroDetails;

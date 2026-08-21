"use client";

import { motion } from "motion/react";

import ShimmerText from "@/components/ui/shimmer-text";
import { cn } from "@/lib/utils";

interface HeroDetailsProps {
  name: string | React.ReactNode;
  title: string | React.ReactNode;
}

const renderAnimatedName = (name: HeroDetailsProps["name"]) => {
  if (typeof name !== "string") {
    return name;
  }

  const animatedLetterIndex = name.indexOf("iya");

  if (animatedLetterIndex === -1) {
    return name;
  }

  return (
    <>
      {name.slice(0, animatedLetterIndex)}
      <span
        className="inline-block align-baseline"
        style={{ perspective: 800 }}
      >
        <motion.span
          aria-hidden="true"
          animate={{ rotateX: [0, 540, 540, 0] }}
          className="inline-block origin-center"
          style={{ transformStyle: "preserve-3d" }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3,
            times: [0, 0.2, 0.8, 1],
            delay: 2,
          }}
        >
          {name[animatedLetterIndex]}
        </motion.span>
      </span>
      {name.slice(animatedLetterIndex + 1)}
    </>
  );
};

const HeroDetails = ({ name, title }: HeroDetailsProps) => {
  return (
    <div className="flex flex-col gap-2 text-center md:text-left">
      <motion.h1
        aria-label={typeof name === "string" ? name : undefined}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className={cn("text-3xl font-bold", "md:text-5xl lg:text-6xl")}
      >
        {renderAnimatedName(name)}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className={cn("text-xl font-bold", "md:text-2xl lg:text-3xl")}
      >
        <ShimmerText duration={2} delay={2} className="text-foreground/70">
          {title}
        </ShimmerText>
      </motion.h1>
    </div>
  );
};

export default HeroDetails;

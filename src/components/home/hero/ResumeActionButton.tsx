"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";

import CV from "@/components/svgs/CV";
import { Button } from "@/components/ui/button";

export default function ResumeActionButton() {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <Button
        variant="default"
        size="lg"
        className="group/resume border-primary/30 shadow-primary/10 relative w-full overflow-hidden shadow-lg"
        render={<Link href="/resume" />}
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 blur-sm"
          variants={{
            rest: {
              x: "-120%",
              transition: { duration: 0.25, ease: "easeOut" },
            },
            hover: {
              x: "420%",
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        />
        <span className="relative flex items-center justify-center gap-2">
          <motion.span
            variants={{
              rest: {
                y: 0,
                rotate: 0,
                transition: { duration: 0.2, ease: "easeOut" },
              },
              hover: {
                y: [-1, -4, -1],
                rotate: [0, -10, 4, 0],
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
          >
            <CV className="size-5" />
          </motion.span>
          <span>Resume / CV</span>
          <motion.span
            aria-hidden="true"
            className="bg-primary-foreground/70 h-px w-0"
            variants={{
              rest: {
                width: 0,
                transition: { duration: 0.2, ease: "easeOut" },
              },
              hover: {
                width: 22,
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
          />
        </span>
      </Button>
    </motion.div>
  );
}

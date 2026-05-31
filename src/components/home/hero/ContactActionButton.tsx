"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";

import SendIcon from "@/components/svgs/SendIcon";
import { Button } from "@/components/ui/button";

export default function ContactActionButton() {
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
        className="group/contact border-primary/30 shadow-primary/10 relative w-full overflow-hidden shadow-lg"
        render={<Link href="#contacts" />}
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
                x: 0,
                y: 0,
                rotate: 0,
                transition: { duration: 0.2, ease: "easeOut" },
              },
              hover: {
                x: [0, 5, 0],
                y: [0, -5, 0],
                rotate: [0, -10, 0],
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
          >
            <SendIcon className="size-5" />
          </motion.span>
          <span>Get in touch</span>
          <motion.span
            aria-hidden="true"
            className="bg-primary-foreground/70 size-1.5 rounded-full opacity-0"
            variants={{
              rest: {
                x: 0,
                opacity: 0,
                transition: { duration: 0.15, ease: "easeOut" },
              },
              hover: {
                x: [0, 8, 14],
                opacity: [0, 1, 0],
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
          />
        </span>
      </Button>
    </motion.div>
  );
}

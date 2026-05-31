"use client";

import { motion } from "motion/react";

export default function CV({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      fill="none"
    >
      <motion.path
        d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55Z"
        fill="currentColor"
        variants={{
          rest: {
            rotate: 0,
            transition: { duration: 0.2, ease: "easeOut" },
          },
          hover: {
            rotate: [-1, 2, -1],
            transition: { duration: 0.55, ease: "easeOut" },
          },
        }}
        style={{ originX: "50%", originY: "50%" }}
      />
      <motion.g
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="15"
        variants={{
          rest: {
            transition: { staggerChildren: 0.04 },
          },
          hover: {
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {["M96 60.5 180 75.5", "M90.5 92 174.5 107", "M85 123.5 127 131"].map(
          (path) => (
            <motion.path
              key={path}
              d={path}
              variants={{
                rest: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.2, ease: "easeOut" },
                },
                hover: {
                  pathLength: [0.25, 1],
                  opacity: [0.55, 1],
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
            />
          ),
        )}
      </motion.g>
    </motion.svg>
  );
}

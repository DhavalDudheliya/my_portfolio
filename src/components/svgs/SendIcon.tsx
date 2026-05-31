"use client";

import { motion } from "motion/react";

export default function SendIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      fill="none"
    >
      <motion.path
        d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"
        fill="currentColor"
        variants={{
          rest: {
            x: 0,
            y: 0,
            rotate: 0,
            transition: { duration: 0.2, ease: "easeOut" },
          },
          hover: {
            x: [0, 4, 0],
            y: [0, -4, 0],
            rotate: [0, -4, 0],
            transition: { duration: 0.55, ease: "easeOut" },
          },
        }}
        style={{ originX: "50%", originY: "50%" }}
      />
      <motion.path
        d="M64 156 104 139"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="12"
        variants={{
          rest: {
            pathLength: 0,
            opacity: 0,
            transition: { duration: 0.15, ease: "easeOut" },
          },
          hover: {
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
            transition: { duration: 0.55, ease: "easeOut" },
          },
        }}
      />
      <motion.path
        d="M42 177 78 161"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="10"
        variants={{
          rest: {
            pathLength: 0,
            opacity: 0,
            transition: { duration: 0.15, ease: "easeOut" },
          },
          hover: {
            pathLength: [0, 1, 0],
            opacity: [0, 0.55, 0],
            transition: { duration: 0.55, delay: 0.06, ease: "easeOut" },
          },
        }}
      />
    </motion.svg>
  );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface HeroImageProps {
  avatar: string;
  name: string;
}

const HeroImage = ({ avatar, name }: HeroImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative size-35 shrink-0 overflow-hidden rounded-lg shadow-xl ring-4 ring-neutral-100 dark:ring-neutral-800"
    >
      <Image
        className="size-full origin-[54%_28%] scale-135 object-cover"
        src={avatar}
        alt={name}
        height={320}
        width={320}
        priority
      />
    </motion.div>
  );
};

export default HeroImage;

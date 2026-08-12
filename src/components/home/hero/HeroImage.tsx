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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      className="relative size-35 shrink-0 overflow-hidden rounded-lg ring-4 ring-neutral-100 dark:ring-neutral-800"
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

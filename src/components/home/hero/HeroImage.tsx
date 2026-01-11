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
      className="relative shrink-0"
    >
      <Image
        className="rounded-lg ring-4 ring-neutral-100 dark:ring-neutral-800"
        src={avatar}
        alt={name}
        height={140}
        width={140}
        priority
      />
    </motion.div>
  );
};

export default HeroImage;

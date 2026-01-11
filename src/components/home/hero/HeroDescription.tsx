"use client";

import { motion } from "motion/react";

interface HeroDescriptionProps {
  description: string | React.ReactNode;
}

const HeroDescription = ({ description }: HeroDescriptionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.4 }}
      className="mt-6 text-center text-sm leading-8 text-neutral-500 md:text-left md:text-lg"
    >
      {description}
    </motion.div>
  );
};

export default HeroDescription;

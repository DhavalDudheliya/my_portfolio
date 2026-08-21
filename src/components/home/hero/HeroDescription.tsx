"use client";

import { motion } from "motion/react";

interface HeroDescriptionProps {
  description: string | React.ReactNode;
}

const HeroDescription = ({ description }: HeroDescriptionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      className="mt-6 text-center text-sm leading-8 text-neutral-500 md:text-left md:text-lg"
    >
      {description}
    </motion.div>
  );
};

export default HeroDescription;

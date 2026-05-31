"use client";

import { motion } from "motion/react";

import ContactActionButton from "./ContactActionButton";
import ResumeActionButton from "./ResumeActionButton";

const HeroActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.5 }}
      className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
    >
      <ResumeActionButton />
      <ContactActionButton />
    </motion.div>
  );
};

export default HeroActions;

"use client";

import { motion } from "motion/react";

import SocialLink from "@/components/core/SocialLink";
import { socialLinks } from "@/config/Hero";

const HeroSocials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.6 }}
      className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
    >
      {socialLinks.map((link) => (
        <SocialLink key={link.name} {...link} />
      ))}
    </motion.div>
  );
};

export default HeroSocials;

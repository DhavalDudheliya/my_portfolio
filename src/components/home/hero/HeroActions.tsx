"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";

import CV from "@/components/svgs/CV";
import SendIcon from "@/components/svgs/SendIcon";
import { Button } from "@/components/ui/button";

const HeroActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.5 }}
      className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
    >
      <Button variant={"default"} size={"lg"} className="group w-full">
        <Link
          href="/resume"
          className="flex w-full items-center justify-center gap-2"
        >
          <CV className="size-5 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-12" />{" "}
          Resume / CV
        </Link>
      </Button>
      <Button variant="default" size={"lg"} className="group w-full">
        <Link
          href="#contacts"
          className="flex w-full items-center justify-center gap-2"
        >
          <SendIcon className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
          Get in touch
        </Link>
      </Button>
    </motion.div>
  );
};

export default HeroActions;

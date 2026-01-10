"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { heroConfig, socialLinks } from "@/config/Hero";
import { cn } from "@/lib/utils";

import Container from "../core/Container";
import SocialLink from "../core/SocialLink";
import CV from "../svgs/CV";
import SendIcon from "../svgs/SendIcon";
import { Button } from "../ui/button";

const Hero = () => {
  const { name, title, avatar, description } = heroConfig;

  return (
    <Container className="mx-auto">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
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

        <div className="flex flex-col gap-2 text-center md:text-left">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 md:justify-start"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Available for projects
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn("text-3xl font-bold", "md:text-5xl lg:text-6xl")}
          >
            {name}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={cn(
              "from-foreground to-foreground/50 bg-linear-to-b bg-clip-text text-xl font-bold text-transparent",
              "md:text-2xl lg:text-3xl",
            )}
          >
            {title}
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 text-center text-sm leading-9 text-neutral-500 md:text-left md:text-lg"
      >
        {description}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
      >
        <Button variant={"default"} size={"lg"} className="w-full">
          <Link
            href="/resume"
            className="flex w-full items-center justify-center gap-2"
          >
            <CV className="size-5" /> Resume / CV
          </Link>
        </Button>
        <Button variant="default" size={"lg"} className="w-full">
          <Link
            href="#contacts"
            className="flex w-full items-center justify-center gap-2"
          >
            <SendIcon className="size-5" /> Get in touch
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
      >
        {socialLinks.map((link) => (
          <SocialLink key={link.name} {...link} />
        ))}
      </motion.div>
    </Container>
  );
};

export default Hero;

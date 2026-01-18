"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState } from "react";

import { navItems } from "@/config/Navbar";

import { CommandMenu } from "./CommandMenu";
import Container from "./Container";
import { ThemeToggleButton } from "./ThemeSwitch";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container className="sticky top-0 z-20 py-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between px-2 md:px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-baseline gap-4"
        >
          <Link href="/">
            <Image
              className="h-10 w-10 rounded-full border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
              src={"/assets/me.jpg"}
              alt="me"
              width={100}
              height={100}
            />
          </Link>
        </motion.div>
        <div className="flex items-center justify-center gap-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            >
              <Link
                className="group relative text-xs md:text-base"
                href={item.href}
              >
                {item.label}
                <span className="bg-primary absolute -bottom-0.5 left-1/2 h-0.5 w-0 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => setOpen(true)}
              className="group hidden items-center justify-between rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-sm text-zinc-500 transition-all hover:border-zinc-300 md:flex md:w-40 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span className="hidden md:inline-block">Search...</span>
              </div>
              <kbd className="hidden h-5 items-center gap-1 rounded border bg-zinc-100 px-1.5 font-mono text-[10px] font-medium text-zinc-500 opacity-100 select-none md:flex dark:bg-zinc-900">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
            <ThemeToggleButton />
            <CommandMenu open={open} onOpenChange={setOpen} />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Navbar;

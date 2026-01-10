"use client";

import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { contactConfig } from "@/config/Contact";

import Mail from "../svgs/Mail";
import Phone from "../svgs/Phone";
import { toastManager } from "../ui/toast";

// Copy button component
function CopyButton({ text, icon }: { text: string; icon: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toastManager.add({
        type: "success",
        title: "Copied to clipboard!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toastManager.add({
        type: "error",
        title: "Failed to copy",
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-muted-foreground hover:text-foreground group flex items-center gap-2 text-sm transition-colors"
    >
      <span className="[&_svg]:size-4">{icon}</span>
      <span className="underline-offset-4 group-hover:underline">{text}</span>
      <span className="text-muted-foreground/60 ml-1">
        {copied ? (
          <Check className="size-3.5 text-green-500" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </span>
    </button>
  );
}

export default function ContactMethods() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3"
    >
      {/* Email Me */}
      <div>
        <h3 className="mb-2 text-lg font-semibold">Email me</h3>
        <CopyButton text={contactConfig.email} icon={<Mail />} />
      </div>

      {/* Call Me */}
      <div className="pl-0 md:pl-12">
        <h3 className="mb-2 text-lg font-semibold">Call me</h3>
        <CopyButton text={contactConfig.phone} icon={<Phone />} />
      </div>

      {/* DM Me */}
      <div>
        <h3 className="mb-2 text-lg font-semibold">DM me</h3>
        <div className="flex gap-3">
          {contactConfig.dmLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 transition-colors hover:underline"
              title={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

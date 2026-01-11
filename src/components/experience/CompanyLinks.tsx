"use client";

import { Github, Globe, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { Experience } from "@/config/Experiences";

interface CompanyLinksProps {
  links: Experience["links"];
}

export function CompanyLinks({ links }: CompanyLinksProps) {
  if (!links) return null;

  return (
    <div className="text-muted-foreground flex items-center gap-2">
      {[
        {
          key: "website",
          url: links.website,
          icon: Globe,
          label: "Website",
          tooltip: "Visit Website",
        },
        {
          key: "linkedin",
          url: links.linkedin,
          icon: Linkedin,
          label: "LinkedIn",
          tooltip: "Connect on LinkedIn",
        },
        {
          key: "x",
          url: links.x,
          icon: FaXTwitter,
          label: "X",
          tooltip: "Follow on X",
        },
        {
          key: "github",
          url: links.github,
          icon: Github,
          label: "GitHub",
          tooltip: "View GitHub",
        },
      ].map((link) => {
        if (!link.url) return null;
        const Icon = link.icon;
        return (
          <Tooltip key={link.key}>
            <TooltipTrigger asChild>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                <Icon className="size-3.5" />
                <span className="sr-only">{link.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>{link.tooltip}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}

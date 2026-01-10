import { Github, Globe, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { Experience } from "@/config/Experiences";
import { cn } from "@/lib/utils";

import { ExperiencePositionItem } from "./ExperiencePositionItem";

export function ExperienceItem({ experience }: { experience: Experience }) {
  const hasLinks =
    experience.links && Object.values(experience.links).some(Boolean);

  return (
    <div className="space-y-6 py-4">
      <div
        className={cn("flex gap-3", hasLinks ? "items-start" : "items-center")}
      >
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center select-none",
            hasLinks && "mt-0.5",
          )}
        >
          {experience.companyLogo ? (
            experience.links?.website ? (
              <Link
                href={experience.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={experience.companyLogo}
                  alt={experience.companyName}
                  width={40}
                  height={40}
                  quality={100}
                  className="rounded-full transition-opacity hover:opacity-80"
                  unoptimized
                  aria-hidden
                />
              </Link>
            ) : (
              <Image
                src={experience.companyLogo}
                alt={experience.companyName}
                width={40}
                height={40}
                quality={100}
                className="rounded-full"
                unoptimized
                aria-hidden
              />
            )
          ) : (
            <span className="flex size-10 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-4">
            {experience.links?.website ? (
              <Link
                href={experience.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:underline"
              >
                <h3 className="text-lg leading-snug font-medium">
                  {experience.companyName}
                </h3>
              </Link>
            ) : (
              <h3 className="text-lg leading-snug font-medium">
                {experience.companyName}
              </h3>
            )}

            {experience.isCurrentEmployer && (
              <span className="relative flex items-center justify-center">
                <span className="absolute inline-flex size-3 animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                <span className="sr-only">Current Employer</span>
              </span>
            )}
          </div>

          {experience.links && (
            <div className="text-muted-foreground flex items-center gap-2">
              {[
                {
                  key: "website",
                  url: experience.links.website,
                  icon: Globe,
                  label: "Website",
                  tooltip: "Visit Website",
                },
                {
                  key: "linkedin",
                  url: experience.links.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                  tooltip: "Connect on LinkedIn",
                },
                {
                  key: "x",
                  url: experience.links.x,
                  icon: FaXTwitter,
                  label: "X",
                  tooltip: "Follow on X",
                },
                {
                  key: "github",
                  url: experience.links.github,
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
          )}
        </div>
      </div>
      <div className="before:bg-border relative ml-3 space-y-4 before:absolute before:left-3 before:h-full before:w-px md:ml-13">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}

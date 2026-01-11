"use client";

import { Github, Globe } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
interface ProjectLinksProps {
  links: {
    live?: string;
    github?: string;
  };
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="flex gap-2">
      {links.github && (
        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <Button
                variant="ghost"
                size="icon"
                className="size-8"
                render={
                  <Link
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>View Code</TooltipContent>
        </Tooltip>
      )}
      {links.live && (
        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <Button
                variant="ghost"
                size="icon"
                className="size-8"
                render={
                  <Link
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Globe className="size-4" />
                <span className="sr-only">Live Demo</span>
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>View Live Site</TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}

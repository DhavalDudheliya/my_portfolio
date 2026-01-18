import { Github, Globe } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ProjectActionsProps {
  links?: {
    live?: string;
    github?: string;
  };
}

export function ProjectActions({ links }: ProjectActionsProps) {
  if (!links?.live && !links?.github) {
    return null;
  }

  return (
    <div className="flex gap-4 pt-4">
      {links?.live && (
        <Button
          size="lg"
          render={
            <Link href={links.live} target="_blank" rel="noopener noreferrer" />
          }
        >
          <Globe className="mr-2 size-5" />
          Visit Website
        </Button>
      )}
      {links?.github && (
        <Button
          size="lg"
          variant="outline"
          render={
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <Github className="mr-2 size-5" />
          View Source
        </Button>
      )}
    </div>
  );
}

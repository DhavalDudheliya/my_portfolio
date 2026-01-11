"use client";

import { getTechnologyIcon } from "@/config/Technologies";

interface TechStackProps {
  technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex items-center">
      {technologies.map((tech) => {
        const Icon = getTechnologyIcon(tech);
        return (
          <div
            key={tech}
            className="group/icon bg-secondary relative ml-[-8px] flex items-center justify-center rounded-full border p-1.5 shadow-sm transition-all duration-300 ease-in-out first:ml-0 hover:z-10 hover:pr-3"
          >
            <div className="size-5 shrink-0">
              {Icon ? (
                <Icon />
              ) : (
                <span className="text-[10px]">{tech.slice(0, 2)}</span>
              )}
            </div>
            <span className="text-secondary-foreground max-w-0 overflow-hidden text-[10px] font-medium whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover/icon:ml-2 group-hover/icon:max-w-[100px] group-hover/icon:opacity-100">
              {tech}
            </span>
          </div>
        );
      })}
    </div>
  );
}

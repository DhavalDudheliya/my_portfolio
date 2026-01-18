"use client";

import Image from "next/image";

import { SKILL_ICONS } from "@/config/SkillIcons";
import { cn } from "@/lib/utils";

interface TechStackProps {
  technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex items-center">
      {technologies.map((tech) => {
        const iconConfig = SKILL_ICONS[tech];

        return (
          <div
            key={tech}
            className="group/icon bg-secondary relative ml-[-8px] flex items-center justify-center rounded-full border p-1.5 shadow-sm transition-all duration-300 ease-in-out first:ml-0 hover:z-10 hover:pr-3"
          >
            <div className="relative flex size-5 shrink-0 items-center justify-center">
              {iconConfig ? (
                <>
                  {iconConfig.type === "svg" ? (
                    <>
                      <Image
                        src={iconConfig.src}
                        alt={tech}
                        width={20}
                        height={20}
                        className={cn(
                          "h-full w-full object-contain",
                          iconConfig.darkSrc && "dark:hidden",
                        )}
                      />
                      {iconConfig.darkSrc && (
                        <Image
                          src={iconConfig.darkSrc}
                          alt={tech}
                          width={20}
                          height={20}
                          className="hidden h-full w-full object-contain dark:block"
                        />
                      )}
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center [&>svg]:size-full">
                      {iconConfig.component}
                    </div>
                  )}
                </>
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

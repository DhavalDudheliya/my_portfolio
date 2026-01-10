"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { Technology } from "@/config/Skills";

interface SkillIconProps {
  tech: Technology;
}

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function SkillIcon({ tech }: SkillIconProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="group/skill flex flex-col items-center gap-2">
          <div className="relative flex size-14 items-center justify-center overflow-hidden rounded-xl border border-zinc-200/50 bg-gradient-to-br from-white to-zinc-50 p-3 shadow-sm transition-all duration-300 group-hover/skill:border-zinc-300 group-hover/skill:shadow-md dark:border-zinc-700/50 dark:from-zinc-800 dark:to-zinc-900 dark:group-hover/skill:border-zinc-600">
            {mounted && (
              <Image
                src={
                  resolvedTheme === "dark" ? tech.icon.dark : tech.icon.light
                }
                alt={tech.name}
                width={28}
                height={28}
                className="object-contain transition-transform duration-300"
              />
            )}
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>{tech.name}</TooltipContent>
    </Tooltip>
  );
}

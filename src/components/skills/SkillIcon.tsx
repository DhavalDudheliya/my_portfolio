"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
        <div className="group relative flex h-12 w-16 flex-col items-center justify-center overflow-hidden rounded-md bg-zinc-100/70 p-2 shadow transition-all hover:bg-zinc-200/70 dark:bg-zinc-800/70 dark:hover:bg-zinc-700/70">
          {mounted && (
            <Image
              src={resolvedTheme === "dark" ? tech.icon.dark : tech.icon.light}
              alt={tech.name}
              width={24}
              height={24}
              className="mx-auto object-contain"
            />
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>{tech.name}</TooltipContent>
    </Tooltip>
  );
}

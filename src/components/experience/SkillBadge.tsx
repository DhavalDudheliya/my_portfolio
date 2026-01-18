import Image from "next/image";

import { SKILL_ICONS } from "@/config/SkillIcons";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SkillBadge({ children, className }: SkillBadgeProps) {
  const iconConfig =
    typeof children === "string" ? SKILL_ICONS[children] : null;

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-md px-2.5 py-0.5 text-xs font-medium transition-all duration-300 ease-out",
        "bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-100",
        "border border-zinc-200 dark:border-zinc-700",
        "group cursor-default",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        {iconConfig ? (
          <span className="shrink-0 text-sm">
            {iconConfig.type === "svg" ? (
              <>
                <Image
                  src={iconConfig.src}
                  alt={children as string}
                  width={14}
                  height={14}
                  className={cn(
                    "h-3.5 w-3.5 object-contain",
                    iconConfig.darkSrc && "dark:hidden",
                  )}
                />
                {iconConfig.darkSrc && (
                  <Image
                    src={iconConfig.darkSrc}
                    alt={children as string}
                    width={14}
                    height={14}
                    className="hidden h-3.5 w-3.5 object-contain dark:block"
                  />
                )}
              </>
            ) : (
              iconConfig.component
            )}
          </span>
        ) : (
          <span className="size-1.5 rounded-full bg-zinc-400 transition-colors duration-300 dark:bg-zinc-500" />
        )}
        {children}
      </span>
    </span>
  );
}

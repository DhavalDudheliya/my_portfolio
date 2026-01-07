"use client";

import { useThemeToggle } from "@/hooks/use-theme-toggle";

import Moon from "../svgs/Moon";
import Sun from "../svgs/Sun";
import { Button } from "../ui/button";

export function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeToggle();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="transition-transform active:scale-95"
    >
      {isDark ? <Moon /> : <Sun />}
    </Button>
  );
}

'use client';

import { Button } from '../ui/button';
import Moon from '../svgs/Moon';
import Sun from '../svgs/Sun';
import { useThemeToggle } from '@/hooks/use-theme-toggle';

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
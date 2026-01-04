import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { useThemeSound } from "./use-theme-sound";

const STYLE_ID = "simple-theme-transition";

function injectStyles() {
  if (typeof window === "undefined") return;

  // if styles already injected, return
  if (document.getElementById(STYLE_ID)) return;

  // inject styles
  const style = document.createElement("style");
  style.id = STYLE_ID;

  // add styles
  // ::view-transition-group(root) - defines the transition group
  // ::view-transition-new(root) - defines the new view
  // ::view-transition-old(root) - defines the old view
  // animation-duration: 600ms - defines the duration of the animation
  // animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) - defines the timing function of the animation
  // animation: reveal 600ms - defines the animation
  // @keyframes reveal - defines the animation
  // clip-path: circle(0% at var(--x, 50%) var(--y, 50%)) - defines the animation
  // clip-path: circle(150% at var(--x, 50%) var(--y, 50%)) - defines the animation
  // z-index: -1 - defines the z-index of the old view
  // animation: none - defines the animation
  style.textContent = `
    ::view-transition-group(root) {
      animation-duration: 600ms;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }

    ::view-transition-new(root) {
      animation: reveal 600ms;
    }

    ::view-transition-old(root) {
      animation: none;
      z-index: -1;
    }

    @keyframes reveal {
      from {
        clip-path: circle(0% at var(--x, 50%) var(--y, 50%));
      }
      to {
        clip-path: circle(150% at var(--x, 50%) var(--y, 50%));
      }
    }
  `;

  document.head.appendChild(style);
}

export function useThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const { play } = useThemeSound();

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent) => {
      
      // inject styles for transition  
      injectStyles();

      // play sound
      play(isDark);

      // set transition position from click event
      if (event) {
        document.documentElement.style.setProperty("--x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--y", `${event.clientY}px`);
      }

      // switch theme
      const switchTheme = () => {
        setTheme(isDark ? "light" : "dark");
      };

      // if no view transition support, switch theme immediately
      if (!document.startViewTransition) {
        switchTheme();
        return;
      }

      // if view transition supported, use it
      document.startViewTransition(switchTheme);
    },
    [isDark, setTheme]
  );

  return { isDark, toggleTheme };
}

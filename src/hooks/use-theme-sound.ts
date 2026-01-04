"use client";

import { useEffect, useRef } from "react";

export function useThemeSound() {
  const lightSound = useRef<HTMLAudioElement | null>(null);
  const darkSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    lightSound.current = new Audio("/sounds/theme-switch.mp3");
    darkSound.current = new Audio("/sounds/theme-switch.mp3");

    lightSound.current.volume = 0.4;
    darkSound.current.volume = 0.4;

    // speed up the sound
    lightSound.current.playbackRate = 1.3;
    darkSound.current.playbackRate = 1.3;
  }, []);

  const play = (isDark: boolean) => {
    try {
      const sound = isDark ? lightSound.current : darkSound.current;
      if (!sound) return;

      sound.currentTime = 0;
      sound.play();
    } catch {
      // fail silently (browser restriction)
    }
  };

  return { play };
}

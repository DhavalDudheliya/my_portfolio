"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
}

function generateParticles() {
  return Array.from({
    length: Math.floor(Math.random() * 3) + 6,
  }).map((_, i) => ({
    id: Date.now() + i,
    x: (Math.random() - 0.5) * 60,
    y: -(Math.random() * 40 + 20),
    rotation: (Math.random() - 0.5) * 90,
    scale: Math.random() * 0.5 + 0.5,
    duration: 0.6 + Math.random() * 0.2,
  }));
}

export function ReactionParticles({ emoji }: { emoji: string }) {
  // Initialize particles once on mount. This is pure and avoids "setState in effect".
  const [particles] = useState<Particle[]>(() => generateParticles());

  return (
    <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
          animate={{
            opacity: 0,
            x: particle.x,
            y: particle.y,
            scale: particle.scale,
            rotate: particle.rotation,
          }}
          transition={{
            duration: particle.duration,
            ease: "easeOut",
          }}
          className="absolute text-xl"
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}

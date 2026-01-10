"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Calculate time difference from visitor's timezone to India (IST)
function getTimezoneOffset(): string {
  const now = new Date();
  const visitorOffset = now.getTimezoneOffset();
  const istOffset = -330;
  const diffMinutes = visitorOffset - istOffset;
  const diffHours = diffMinutes / 60;

  if (diffHours === 0) {
    return "Same timezone";
  }

  const absHours = Math.abs(diffHours);
  const hourLabel = absHours === 1 ? "hr" : "hrs";

  if (absHours % 1 !== 0) {
    const wholeHours = Math.floor(absHours);
    const minutes = Math.round((absHours % 1) * 60);
    const timeStr =
      wholeHours > 0 ? `${wholeHours}hr ${minutes}min` : `${minutes}min`;
    return diffHours > 0 ? `${timeStr} ahead` : `${timeStr} behind`;
  }

  return diffHours > 0
    ? `${absHours} ${hourLabel} ahead`
    : `${absHours} ${hourLabel} behind`;
}

export default function ContactHeader() {
  const [timezoneOffset, setTimezoneOffset] = useState<string>("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimezoneOffset(getTimezoneOffset());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">Contact Me</h2>
        {timezoneOffset && (
          <span className="text-muted-foreground text-xs md:text-sm">
            ( {timezoneOffset} )
          </span>
        )}
      </div>
      <p className="text-muted-foreground mt-2 text-sm md:text-lg">
        Get in touch with me. I will get back to you as soon as possible.
      </p>
    </motion.div>
  );
}

"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

import {
  REACTION_TYPES,
  type ReactionType,
  useReactions,
} from "@/lib/reactions";
import { cn } from "@/lib/utils";

interface BlogReactionsProps {
  slug: string;
}

import { ReactionParticles } from "./ReactionParticles";

export function BlogReactions({ slug }: BlogReactionsProps) {
  const { counts, userReactions, toggleReaction, isLoading } =
    useReactions(slug);
  const [justActivated, setJustActivated] = useState<ReactionType | null>(null);

  const handleClick = useCallback(
    (id: ReactionType) => {
      const wasActive = userReactions.includes(id);
      toggleReaction(id);
      if (!wasActive) {
        setJustActivated(id);
        setTimeout(() => setJustActivated(null), 600);
      }
    },
    [userReactions, toggleReaction],
  );

  return (
    <div className="border-border/40 mt-12 flex flex-col items-center gap-5 border-t pt-10">
      <p className="text-muted-foreground text-xs tracking-widest uppercase">
        Reactions
      </p>

      <div className="flex items-center gap-1">
        {REACTION_TYPES.map((reaction) => {
          const isActive = userReactions.includes(reaction.id);
          const count = counts[reaction.id] ?? 0;

          return (
            <motion.button
              key={reaction.id}
              onClick={() => handleClick(reaction.id)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              disabled={isLoading}
              className={cn(
                "relative flex flex-col items-center gap-1.5 rounded-lg px-3.5 py-2.5 transition-colors duration-200",
                isLoading && "cursor-wait opacity-50",
                isActive ? "bg-accent/60" : "hover:bg-accent/30",
              )}
              aria-label={`React with ${reaction.label}`}
              title={reaction.label}
            >
              {/* Particle Animation */}
              <AnimatePresence>
                {justActivated === reaction.id && (
                  <ReactionParticles emoji={reaction.emoji} />
                )}
              </AnimatePresence>

              <span className="text-xl select-none">{reaction.emoji}</span>

              {/* Count */}
              <motion.span
                initial={false}
                animate={{
                  opacity: count > 0 ? 1 : 0.4,
                  scale: count > 0 ? 1 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={cn(
                  "mt-1 text-[11px] font-medium tabular-nums",
                  !isActive && "text-muted-foreground",
                )}
                style={isActive ? { color: reaction.color } : {}}
              >
                {count}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

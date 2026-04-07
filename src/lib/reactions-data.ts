export type ReactionType =
  | "fire"
  | "insightful"
  | "rocket"
  | "love"
  | "clap"
  | "mindBlown";

export interface ReactionConfig {
  id: ReactionType;
  emoji: string;
  label: string;
  color: string;
}

export const REACTION_TYPES: ReactionConfig[] = [
  { id: "fire", emoji: "🔥", label: "Fire", color: "#FF6B35" },
  { id: "insightful", emoji: "💡", label: "Insightful", color: "#FFD700" },
  { id: "rocket", emoji: "🚀", label: "Rocket", color: "#7C3AED" },
  { id: "love", emoji: "❤️", label: "Love", color: "#EF4444" },
  { id: "clap", emoji: "👏", label: "Clap", color: "#10B981" },
  { id: "mindBlown", emoji: "🤯", label: "Mind-Blown", color: "#F59E0B" },
];

export const REACTION_IDS: ReactionType[] = REACTION_TYPES.map((r) => r.id);

export type ReactionCounts = Partial<Record<ReactionType, number>>;

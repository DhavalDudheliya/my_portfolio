import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDuration(start: string, end?: string): string {
  const parseDate = (dateStr: string) => {
    if (dateStr === "Present" || !dateStr) return new Date();
    const parts = dateStr.split(".");
    return parts.length === 2
      ? new Date(parseInt(parts[1]), parseInt(parts[0]) - 1)
      : new Date(parseInt(parts[0]), 0);
  };

  const startDate = parseDate(start);
  const endDate = parseDate(end || "Present");

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Add 1 month to include the starting month in the count
  months += 1;
  if (months >= 12) {
    years++;
    months -= 12;
  }

  const yearStr = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}

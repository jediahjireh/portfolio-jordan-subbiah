export const THEMES = [
  "purple",
  "blue",
  "red",
  "green",
  "orange",
  "teal",
  "pink",
  "monochrome",
] as const;

export type Theme = (typeof THEMES)[number];

export const THEME_COLORS: Record<Theme, string> = {
  purple: "#7127BA",
  blue: "#3b82f6",
  red: "#ef4444",
  green: "#22c55e",
  orange: "#f97316",
  teal: "#14b8a6",
  pink: "#ec4899",
  monochrome: "#a1a1aa",
};

export const DEFAULT_THEME: Theme = "blue";

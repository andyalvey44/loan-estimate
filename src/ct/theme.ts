// Palette for the full-screen slide deck. Deliberately independent of the app's
// shadcn theme tokens so each slide can flip between a light blue-tinted "paper"
// mode and a deep-navy "ink" mode, accented with a blue drawn from the
// Connecticut state seal (#074b9c / #29496f).
export const palette = {
  ink: "#0d1c2f", // deep navy
  inkPanel: "#16304c", // raised panel on ink
  paper: "#eef4fb", // light, faintly blue off-white
  paperPanel: "#d9e6f4", // raised panel on paper
  accent: "#0e5fa6", // seal blue — buttons, headings, labels
  accentSoft: "#8fc0ea", // light sky — accents on navy
  accentText: "#0a4578", // deep blue text
  danger: "#c2453b",
} as const;

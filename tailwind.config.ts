import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      textPrimary: "var(--color-text-primary)", // Primary text color
      textSecondary: "var(--color-text-secondary)", // Secondary text color
      backgroundPrimary: "var(--color-background-primary)", // Primary background color
      backgroundSecondary: "var(--color-background-secondary)", // secondary background color
      backgroundActive: "var(--color-background-active)", // active background color
      accent1: "var(--color-accent-1)", // Accent color 1
      accent2: "var(--color-accent-2)", // Accent color 2
      accent3: "var(--color-accent-3)", // Accent color 3
      accent4: "var(--color-accent-4)", // Accent color 3
      accent5: "var(--color-accent-5)", // Accent color 3
      black: "#000",
      white: "#fff",
    },
  },
  plugins: [],
};
export default config;

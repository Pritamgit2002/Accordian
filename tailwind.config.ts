import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
        "dm-sans": ["var(--font-dm-sans)"],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",

        hero: {
          background: "var(--hero-color-background)",
          foreground: "var(--hero-color-foreground)",
        },

        icon:{
          foreground: "var(--icon-color-foreground)",
        }
      },
    },
  },
  plugins: [],
};

export default config;

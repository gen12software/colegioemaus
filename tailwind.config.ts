import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001a35",
        secondary: "#002d5b",
        accent: "#c5a059",
        silver: "#f1f5f9",
        "nivel-jardin": "#d97706",
        "nivel-primaria": "#be123c",
        "nivel-secundaria": "#6d28d9",
        "nivel-tecnica": "#0891b2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;

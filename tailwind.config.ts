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
        primary: "var(--brand-primary)",
        secondary: "var(--brand-secondary)",
        accent: "var(--brand-accent)",
        silver: "var(--brand-silver)",
        "nivel-jardin": "var(--nivel-jardin)",
        "nivel-primaria": "var(--nivel-primaria)",
        "nivel-secundaria": "var(--nivel-secundaria)",
        "nivel-tecnica": "var(--nivel-tecnica)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;

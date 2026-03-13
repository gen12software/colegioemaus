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
        primary: "#03529E",
        secondary: "#4881B9",
        accent: "#E84446",
        "emaus-gray": "#989999",
        silver: "#f1f5f9",
        "nivel-jardin": "#E84446",
        "nivel-primaria": "#03529E",
        "nivel-secundaria": "#4881B9",
        "nivel-tecnica": "#989999",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

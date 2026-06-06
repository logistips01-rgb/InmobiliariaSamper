import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New brand colors
        "verde-vida": "#1C3A2B",
        "terracota": "#C4622D",
        "crema": "#F5F0E8",
        "salvia": "#A8C4A8",
        "tierra": "#3C2E1A",
        // Legacy aliases (keep so any remaining references don't break)
        "verde-aragon": "#1C3A2B",
        "ocre-calanda": "#C4622D",
        "crema-campo": "#F5F0E8",
        "tierra-oscura": "#3C2E1A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #1C3A2B 0%, #2d5e47 50%, #1C3A2B 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

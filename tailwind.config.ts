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
        brand: {
          navy: "#02040a",      // Extremely dark, almost black for high contrast
          darkNavy: "#09090b",  // Zinc 950
          gold: "#C5A059",      // Champagne gold, elegant and muted
          green: "#85c9af",     // Muted sage green, elegant and non-neon
          cream: "#F7F5F0",     // Warm editorial off-white
          sand: "#EBE7E0",      // Slightly darker cream for subtle borders/cards
          glassLight: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;

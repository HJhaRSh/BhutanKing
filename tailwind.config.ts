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
          // Background bases — rich, NOT pure black
          black:    "#08051A",   // Deep royal indigo — dark but colourful
          white:    "#FFF5E4",   // Warm Bhutanese saffron-parchment
          gray:     "#160D35",   // Deep violet-purple for card surfaces

          // CORE VIBRANT ACCENTS — all fully saturated
          saffron:     "#FF8C00",   // Blazing monastic robe orange
          dragonRed:   "#FF2D1A",   // Thunder Dragon red — full neon
          gold:        "#FFD000",   // Royal Bhutanese gold
          skyBlue:     "#00D4FF",   // Altitude sky — electric cyan
          orchid:      "#E040FB",   // Himalayan orchid — hot violet
          forestGreen: "#00E676",   // Himalayan pine — neon green
          royalViolet: "#7C4DFF",   // Bhutanese royal purple
          dralhaGreen: "#152A20",   // Deep rich forest green from the Dralha logo

          // Utility maps (keep names so NO existing classes break)
          primary:       "#08051A",
          secondary:     "#160D35",
          goldLight:     "#FFE566",
          muted:         "#A89BC2",
          dark:          "#040210",
          navy:          "#08051A",
          darkNavy:      "#030110",
          green:         "#00E676",
          cream:         "#FFF5E4",
          sand:          "#FFE8C8",
          glassLight:    "rgba(255,245,228,0.08)",

          // Remap existing vibrant keys to the new vivid palette
          vibrantBlue:   "#00D4FF",
          vibrantPink:   "#E040FB",
          vibrantGreen:  "#00E676",
          vibrantOrange: "#FF8C00",
          vibrantPurple: "#7C4DFF",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
        'vibrant-gradient':  "linear-gradient(135deg, #FF8C00 0%, #FF2D1A 30%, #E040FB 65%, #7C4DFF 100%)",
        'bhutan-gradient':   "linear-gradient(135deg, #08051A 0%, #160D35 40%, #1A0A2E 70%, #08051A 100%)",
        'hero-gradient':     "linear-gradient(135deg, #FF8C00 0%, #FF2D1A 40%, #E040FB 70%, #7C4DFF 100%)",
        'flag-gradient':     "linear-gradient(90deg, #FF8C00 0%, #FFD000 50%, #FF2D1A 100%)",
        'aurora-gradient':   "linear-gradient(135deg, #00D4FF 0%, #7C4DFF 50%, #E040FB 100%)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;

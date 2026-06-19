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
          black: "#050505",
          white: "#FDFDFD",
          gray: "#1A1A1A",
          vibrantBlue: "#00E5FF",
          vibrantPink: "#FF00AA",
          vibrantGreen: "#00FF88",
          vibrantOrange: "#FF5500",
          vibrantPurple: "#9D00FF",
          // Mapped old colors to prevent breakage
          primary: "#050505",      
          secondary: "#0A0A0A",    
          gold: "#00E5FF", // Map gold to vibrant blue for a quick color swap  
          goldLight: "#00FFFF",    
          muted: "#888888",        
          dark: "#000000",         
          navy: "#0A0A0A",         
          darkNavy: "#000000",     
          green: "#00FF88",        
          cream: "#FDFDFD",        
          sand: "#E0E0E0",         
          glassLight: "rgba(255, 255, 255, 0.05)", 
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
        'vibrant-gradient': "linear-gradient(to right, #00E5FF, #FF00AA)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;

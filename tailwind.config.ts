import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00f0ff",
          blue: "#0072ff",
          neon: "#00ff9d",
          dark: "#090d16",
          card: "#121826",
          border: "#1e293b",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 240, 255, 0.35)",
        "glow-lg": "0 0 35px rgba(0, 240, 255, 0.5)",
        "glow-emerald": "0 0 15px rgba(16, 185, 129, 0.4)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

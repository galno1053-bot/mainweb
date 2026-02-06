
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#B99CFF",
        baseBlue: "#0052FF",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
      },
      boxShadow: {
        glowPurple: "0 0 40px rgba(185, 156, 255, 0.45)",
        glowBlue: "0 0 36px rgba(0, 82, 255, 0.38)",
      },
    },
  },
  plugins: [],
};

export default config;

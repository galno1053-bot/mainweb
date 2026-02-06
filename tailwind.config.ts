import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPurple: "#B99CFF",
        baseBlue: "#0052FF",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          from: "#0a0f2c",
          to: "#1e0033",
          darker: "#05081a",
        },
        text: {
          base: "#ffffff",
          secondary: "#cccccc",
          dim: "#888888",
        },
        accent: {
          blue: "#00f0ff",
          pink: "#ff00cc",
          yellow: "#ffee00",
          green: "#00ff99",
          purple: "#b266ff",
        },
        border: {
          soft: "#4a4a6a",
          glow: "#00f0ff55",
        },
      },
    },
  },
  plugins: [],
};
export default config;

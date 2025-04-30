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
        },
        text: {
          base: "#ffffff",
          secondary: "#cccccc",
        },
        accent: {
          blue: "#00f0ff",
          pink: "#ff00cc",
          yellow: "#ffee00",
          green: "#00ff99",
        },
        border: {
          soft: "#4a4a6a",
        },
      },
    },
  },
  plugins: [],
};
export default config;

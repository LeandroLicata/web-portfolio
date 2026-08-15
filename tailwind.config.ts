import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /**
       * VT323 dibuja los glifos mucho más chicos que su caja em: medido contra
       * Arial al mismo font-size da 0.78 de altura de mayúscula y 0.77 de
       * altura de x. Es decir que un `text-sm` (14px) se lee como ~11px.
       * Esta escala compensa esa diferencia: sube fuerte los tamaños chicos,
       * que es donde vive el texto de lectura, y apenas los títulos, que ya
       * eran grandes de sobra.
       */
      fontSize: {
        xs: ["1rem", { lineHeight: "1.4rem" }],
        sm: ["1.125rem", { lineHeight: "1.6rem" }],
        base: ["1.25rem", { lineHeight: "1.8rem" }],
        lg: ["1.375rem", { lineHeight: "1.95rem" }],
        xl: ["1.5rem", { lineHeight: "2.1rem" }],
        "2xl": ["1.75rem", { lineHeight: "2.3rem" }],
        "3xl": ["2.125rem", { lineHeight: "2.6rem" }],
      },
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
      dropShadow: {
        glow: ["0 0 4px #00f0ff66", "0 0 12px #00f0ff33"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/[locale]/**/*.{js,ts,jsx,tsx}",
    "./app/[locale]/layout.ts",
    "./app/[locale]/page.ts",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1F2226",
        redColor: "#F41C54",
        offWhite: "#FFF9E8",
        blueColor: "#19C2DE",
        whiteColor: "#FEFDF9",
        redExtra: "#F22727",
        headed: "#282828",
      },
      fontFamily: {
        headerFont: "Young Serif, serif",
        descripFont: "Mali, cursive",
        basicFont: "Afacad Flux, sans-serif",
        heavyFont: "Alfa Slab One, serif",
        arBasic: "Almarai, sans-serif",
        arFreehand: "Marhey, sans-serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;

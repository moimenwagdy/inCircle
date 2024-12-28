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
        offWhite: "#fcffe6",
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
      backgroundImage: {
        light:
          "url(https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60.png?alt=media&token=53dab48f-dcc0-4a5a-bc3e-1a8ccbb22243)",
        dark: "url(https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60606060.png?alt=media&token=5c55e033-70f4-4ddd-b882-8a9da721f569)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
("FFF9E8");

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
      backgroundImage: {
        LightLogo:
          "url(https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/incircle3.png?alt=media&token=46528dbb-4af9-4891-b8a4-bdc89cae5d4d)",
        DarkLogo:
          "url(https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/incircle2.png?alt=media&token=2db277eb-a1aa-49e0-986e-05a4fa6409ea)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;

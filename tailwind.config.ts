import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/[locale]/**/*.{js,ts,jsx,tsx}", // Include dynamic folders
    "./app/[locale]/layout.ts",
    "./app/[locale]/page.ts",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        headerFont: "Young Serif, serif",
        descripFont: "Flamenco, system-ui",
        basicFont: "Bree Serif, serif",
        heavyFont: "Alfa Slab One, serif",
        arBasic: "Almarai, sans-serif",
        arFreehand: "Marhey, sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;

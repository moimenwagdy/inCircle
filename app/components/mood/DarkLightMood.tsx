"use client";
import { useTheme } from "next-themes";

const DarkLightMood = () => {
  const { theme, setTheme } = useTheme();
  const moodToggler = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="bg-transparent hidden sm:flex h-full w-8 text-white">
      <div className=" cursor-pointer flex gap-x-1" onClick={moodToggler}>
        <button
          disabled={theme === "light"}
          className={`tex-xs ${theme === "light" ? "font-bold" : ""}`}>
          Light
        </button>
        /
        <button
          disabled={theme === "dark"}
          className={`tex-xs ${theme === "dark" ? "font-bold" : ""}`}>
          Dark
        </button>
      </div>
    </div>
  );
};

export default DarkLightMood;

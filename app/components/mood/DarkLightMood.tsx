"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkLightMood: React.FC<{ fixedWidth?: boolean }> = ({ fixedWidth }) => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(false);
  const moodToggler = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      setIsDark(true);
    } else setIsDark(false);
  }, [theme]);

  return (
    <div
      className={`bg-transparent flex sm:flex h-full ${
        fixedWidth ? "w-8" : ""
      } text-white`}>
      <div className=" cursor-pointer flex gap-x-1" onClick={moodToggler}>
        <button
          disabled={theme === "light"}
          className={`tex-xs ${!isDark ? "scale-110 font-bold" : ""}
          ${!fixedWidth && !isDark ? "scale-125" : ""}
          `}>
          Light
        </button>
        /
        <button
          disabled={theme === "dark"}
          className={`tex-xs ${isDark ? "scale-110 font-bold" : ""}
            ${!fixedWidth && isDark ? "scale-125" : ""}
          `}>
          Dark
        </button>
      </div>
    </div>
  );
};
export default DarkLightMood;

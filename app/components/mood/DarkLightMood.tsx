"use client";
import { useTheme } from "next-themes";
const DarkLightMood = () => {
  const { theme, setTheme } = useTheme();
  const moodToggler = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="bg-transparent hidden sm:block">
      <button type="button" className="text-white" onClick={moodToggler}>
        moodToggle
      </button>
    </div>
  );
};

export default DarkLightMood;

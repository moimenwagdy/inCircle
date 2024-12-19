"use client";
import { useTheme } from "next-themes";
const DarkLightMood = () => {
  const { theme, setTheme } = useTheme();
  const moodToggler = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="bg-transparent">
      <button type="button" onClick={moodToggler}>
        moodToggle
      </button>
    </div>
  );
};

export default DarkLightMood;
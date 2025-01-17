"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoodButton from "./MoodButton";

const DarkLightMood = () => {
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
    <div className={`flex h-full min-w-8`}>
      <MoodButton
        isDark={isDark}
        moodValue="Dark"
        onClick={moodToggler}
        disabled={isDark}
      />
      <MoodButton
        isDark={isDark}
        moodValue="Light"
        onClick={moodToggler}
        disabled={!isDark}
      />
    </div>
  );
};
export default DarkLightMood;

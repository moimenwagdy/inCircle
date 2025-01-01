"use client";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import {  faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const DarkLightMood = () => {
  const { theme, setTheme } = useTheme();
  const moodToggler = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="bg-transparent hidden sm:flex h-full w-8">
      <div className=" cursor-pointer flex" onClick={moodToggler}>
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faSun} className=" text-yellow-400 text-2xl" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className=" text-blue-900  text-2xl" />
        )}
      </div>
    </div>
  );
};

export default DarkLightMood;

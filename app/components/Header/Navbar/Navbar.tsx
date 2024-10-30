import React from "react";
import LanguageSwitcher from "../../LangSwitcher/LangSwitcher";
import DarkLightMood from "../../mood/DarkLightMood";

const Navbar = () => {
  return (
    <nav className="h-24 bg-red-600/20">
      <div className="container mx-auto">
        <LanguageSwitcher />
        <DarkLightMood />
      </div>
    </nav>
  );
};

export default Navbar;

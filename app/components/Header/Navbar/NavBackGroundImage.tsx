import Image from "next/image";
import React from "react";
import navBG from "@/public/backgrounds/navBG.png";
const NavBackgroundImage = () => {
  return (
    <Image
      className="absolute min-w-[100.8%] -left-1  opacity-50"
      alt="bg"
      width={2000}
      height={2000}
      src={navBG}
      priority
    />
  );
};
export default NavBackgroundImage;

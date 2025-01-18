import Image from "next/image";
import React from "react";
import LandingBg from "@/public/backgrounds/LandingBg.webp";

const HomePageBackGround = () => {
  return (
    <>
      <Image
        priority
        width={1000}
        height={1000}
        alt="landingImg"
        className=" -z-50 fixed top-44 sm:top-28  scale-[1.6] sm:scale-125 opacity-30 left-1/2 -translate-x-[50%]"
        src={LandingBg}
      />
    </>
  );
};
export default HomePageBackGround;

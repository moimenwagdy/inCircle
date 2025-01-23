import Image from "next/image";
import React from "react";
import LandingBg from "@/public/backgrounds/LandingBg.webp";

const HomePageBackGround = () => {
  return (
    <>
      <Image
        priority
        width={2000}
        height={2000}
        alt="landingImg"
        className=" -z-50 fixed top-16  min-w-[160%] sm:min-w-[120%] md:min-w-[115%]  opacity-50  dark:opacity-30 left-1/2 -translate-x-[50%]"
        src={LandingBg}
      />
    </>
  );
};
export default HomePageBackGround;

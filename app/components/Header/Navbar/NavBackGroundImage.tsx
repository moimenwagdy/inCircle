import Image from "next/image";
import React from "react";
const NavBackgroundImage = () => {
  return (
    <Image
      className="absolute min-w-[100.8%] -left-1 opacity-40"
      alt="bg"
      width={2000}
      height={2000}
      src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2Fcroped.png?alt=media&token=e9e459d0-c400-44d2-8b29-0f7bea39aee4"
    />
  );
};
export default NavBackgroundImage;

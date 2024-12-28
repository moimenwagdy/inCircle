import Image from "next/image";
import React from "react";
const NavBackgroundImage = () => {
  return (
    <Image
      className="absolute min-w-[100.8%] -left-1 opacity-60"
      alt="bg"
      width={2000}
      height={2000}
      src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60606060.png?alt=media&token=5c55e033-70f4-4ddd-b882-8a9da721f569"
    />
  );
};
export default NavBackgroundImage;
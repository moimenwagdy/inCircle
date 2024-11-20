import Image from "next/image";
import React from "react";

const HomePageBackGround = () => {
  return (
    <Image
      priority
      width={2000}
      height={1}
      alt="noimage"
      className="mx-auto absolute top-10 left-[50%] -translate-x-[50%] opacity-30 scale-125 -z-10 "
      src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2Fcircular7.png?alt=media&token=a56e5b06-026a-40d8-9041-f2a11bbfa196"
    />
  );
};
export default HomePageBackGround;

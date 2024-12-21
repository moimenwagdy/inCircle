import Image from "next/image";
import React from "react";

const UserImage: React.FC<{
  src: string;
  alt: string;
  biggerImg?: boolean;
  userName: string;
  profilePageImage?: boolean;
}> = ({ src, alt, biggerImg, userName, profilePageImage }) => {
  const defaultImage = src.includes("defaultProfileImage");
  let userImgwidth = "max-w-8 max-h-8";

  if (biggerImg) {
    userImgwidth = "max-w-10 max-h-10";
  }
  if (profilePageImage) {
    userImgwidth = "max-w-40 max-h-40";
  }

  return (
    <>
      <Image
        src={src!}
        alt={alt}
        width={1600}
        height={1600}
        className={`  ${userImgwidth}  rounded-full bg-blueColor`}
      />
      {defaultImage && (
        <p
          className={`capitalize absolute px-1 rounded-full font-bold left-[50%]  -translate-x-[50%] font-descripFont text-white ${
            profilePageImage ? "text-5xl" : "text-md"
          } top-[50%] -translate-y-[50%]`}>
          {userName[0]}
        </p>
      )}
    </>
  );
};

export default UserImage;

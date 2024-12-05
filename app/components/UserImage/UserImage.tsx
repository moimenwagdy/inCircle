import Image from "next/image";
import React from "react";

const UserImage: React.FC<{
  src: string;
  alt: string;
  biggerImg?: boolean;
  userName: string;
}> = ({ src, alt, biggerImg, userName }) => {
  const defaultImage = src.includes("defaultProfileImage");

  return (
    <>
      <Image
        src={src!}
        alt={alt}
        width={60}
        height={60}
        className={`  ${biggerImg ? "w-10" : "w-8 "} rounded-full bg-blueColor`}
      />
      {defaultImage && (
        <p className="capitalize absolute px-1 rounded-full font-bold left-[50%]  -translate-x-[50%] font-basicFont text-white text-md top-[50%] -translate-y-[50%]">
          {userName[0]}
        </p>
      )}
    </>
  );
};

export default UserImage;

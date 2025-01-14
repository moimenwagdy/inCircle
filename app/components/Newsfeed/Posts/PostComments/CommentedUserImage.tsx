import { afacad } from "@/lib/fonts/basicFont";
import Image from "next/image";
import React from "react";

const CommentedUserImage: React.FC<{ imgUrl: string; userName: string }> = ({
  imgUrl,
  userName,
}) => {
  const defaultImage = imgUrl.includes("defaultProfileImage");

  return (
    <>
      <Image
        src={imgUrl!}
        alt="User profile image"
        width={60}
        height={60}
        className="w-8 h-8 rounded-full bg-blueColor"
      />
      {defaultImage && (
        <p
          className={`"capitalize absolute px-1 rounded-full font-bold left-[50%]  -translate-x-[50%] ${afacad.className} text-white text-md top-[50%] -translate-y-[50%]`}>
          {userName[0]}
        </p>
      )}
    </>
  );
};
export default CommentedUserImage;

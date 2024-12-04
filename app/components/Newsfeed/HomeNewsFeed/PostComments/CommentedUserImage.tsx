import Image from "next/image";
import React from "react";

const CommentedUserImage: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  return (
    <Image
      src={imgUrl!}
      alt="User profile image"
      width={40}
      height={40}
      className="w-8 rounded-full "
    />
  );
};
export default CommentedUserImage;

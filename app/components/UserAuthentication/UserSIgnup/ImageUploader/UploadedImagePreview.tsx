import React from "react";
import Image from "next/image";
const UploadedImagePreview: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Image
      src={url}
      alt="userImage"
      width={70}
      height={100}
      className="rounded-3xl"
    />
  );
};

export default UploadedImagePreview;

import React from "react";
import Image from "next/image";
const UploadedImagePreview: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Image
      loading="lazy"
      src={url}
      alt="userImage"
      width={500}
      height={500}
      className="max-w-full max-h-full rounded-full"
    />
  );
};

export default UploadedImagePreview;

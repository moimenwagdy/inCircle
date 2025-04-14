"use client";
import React, { useState } from "react";
import Image from "next/image";

const PostImageSlider: React.FC<{ imgURLs: string[] }> = ({ imgURLs }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const moreThanImage = imgURLs.length > 1;
  const hadleScrollToRigth = () => {
    setImageIndex((prv) => prv + 1);
  };

  const hadleScrollToleft = () => {
    setImageIndex((prv) => prv - 1);
  };
  const theEnd = imgURLs.length === imageIndex + 1;
  const theStart = imageIndex === 0;

  return (
    <section className="w-full relative max-h-[500px] overflow-hidden">
      {moreThanImage && (
        <button
          className="absolute text-xl right-5 bottom-5 bg-gray-800 text-white px-3 py-1 rounded shadow-md z-10"
          onClick={hadleScrollToRigth}
          disabled={theEnd}>
          👉
        </button>
      )}
      <div className="flex ">
        <div className="w-full flex-shrink-0 -z-10 bg-black/10 dark:bg-white/10">
          <div className="relative w-full h-[360px]">
            <Image
              src={imgURLs[imageIndex]}
              alt="PostImg"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {moreThanImage && (
        <button
          className="absolute text-xl left-5 bottom-5 bg-gray-800 text-white px-3 py-1 rounded shadow-md"
          disabled={theStart}
          onClick={hadleScrollToleft}>
          👈
        </button>
      )}
    </section>
  );
};

export default PostImageSlider;

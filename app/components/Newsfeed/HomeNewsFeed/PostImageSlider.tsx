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
  const theStart = imgURLs.length === 0;
  return (
    <section className="w-full relative">
      {moreThanImage && (
        <button
          className="absolute text-xl right-5 bottom-5"
          onClick={hadleScrollToRigth}
          disabled={theEnd}>
          👉
        </button>
      )}
      <ul className="w-full flex max-h-[500px] overflow-hidden">
        {imgURLs.map((img) => {
          return (
            <li
              key={img.slice(2, 6)}
              className="min-w-full max-h-full overflow-hidden">
              <Image
                priority
                className="min-w-full"
                src={imgURLs[imageIndex]}
                width={600}
                height={1}
                alt="PostImg"
              />
            </li>
          );
        })}
      </ul>
      {moreThanImage && (
        <button
          className="absolute text-xl left-5 bottom-5"
          disabled={theStart}
          onClick={hadleScrollToleft}>
          👈
        </button>
      )}
    </section>
  );
};

export default PostImageSlider;

"use client";
import { useAppSelector } from "@/store/reduxHooks";
import Image from "next/image";
import React from "react";

const PostImagesPreviewer = () => {
  const postImages = useAppSelector((state) => state.newPost.postImagesURLs);
  return (
    <>
      <ul className="flex gap-x-1 h-[40px] overflow-hidden w-fit mx-auto">
        {postImages?.map((image) => {
          return (
            <li className="max-h-full overflow-hidden" key={image[144]}>
              <Image
                src={image}
                className="w-10 max-h-full"
                alt="PostImage"
                width={300}
                height={1}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostImagesPreviewer;

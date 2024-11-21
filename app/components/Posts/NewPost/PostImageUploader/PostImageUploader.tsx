"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ondrop } from "./functions/ondrop";
import { useAppDispatch } from "@/store/reduxHooks";
import { postImageUpload } from "@/globalTypes/globalTypes";
import { newPostActions } from "@/store/slices/newPostSlice/slice";

const PostImageUploader = () => {
  const dispatch = useAppDispatch();
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: async (acceptedfiles) => {
      const data = await ondrop(acceptedfiles);
      const typedData: postImageUpload[] = [...data?.results];
      const urls: string[] = [];
      typedData.forEach((e) => {
        urls.push(e.url);
      });
      dispatch(newPostActions.setPostImagesURLs(urls));
    },
    accept: { "image/*": [] },
  });
  return (
    <>
      <div {...getRootProps()} className="hidden">
        <input className="" {...getInputProps()} />
      </div>
      <button
        type="button"
        className="px-4 bg-whiteColor  "
        onClick={open}>
        photo
      </button>
    </>
  );
};

export default PostImageUploader;

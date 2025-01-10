"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ondrop } from "./functions/ondrop";
import { useAppDispatch } from "@/store/reduxHooks";
import { postImageUpload } from "@/globalTypes/globalTypes";
import { newPostActions } from "@/store/slices/newPostSlice/slice";
import { useTranslations } from "next-intl";
const PostImageUploader = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: async (acceptedfiles) => {
      setLoading(true);
      const data = await ondrop(acceptedfiles);
      const typedData: postImageUpload[] = [...data?.results];
      const urls: string[] = [];
      typedData.forEach((e) => {
        urls.push(e.url);
      });
      dispatch(newPostActions.setPostImagesURLs(urls));
      setLoading(false);
      dispatch(newPostActions.disableErrorMsg());
    },
    accept: { "image/*": [] },
  });
  const tForm = useTranslations("newPostForm");

  return (
    <>
      <div {...getRootProps()} className="hidden">
        <input className="" {...getInputProps()} />
      </div>
      <button
        type="button"
        disabled={loading}
        className="px-4 bg-whiteColor disabled:bg-gray-500 "
        onClick={open}>
        {tForm("imagesButton")}
      </button>
      <p>{loading ? "uploading" : ""}</p>
    </>
  );
};
export default PostImageUploader;

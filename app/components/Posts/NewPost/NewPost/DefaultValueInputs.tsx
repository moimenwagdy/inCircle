"use clent";
import React from "react";
import { DefaultValueInput } from "./DefaultValueInput";
import { useAppSelector } from "@/store/reduxHooks";
import { useUserID } from "@/app/glopalCustomHooks/useUserID";

const DefaultValueInputs = () => {
  const urls = useAppSelector((state) => state.newPost.postImagesURLs);
  const feeling = useAppSelector((state) => state.newPost.feeling);

  const userID = useUserID();

  return (
    <>
      <DefaultValueInput
        name="imagesURLs"
        id="imagesURLs"
        defaultValue={urls!}
      />
      <DefaultValueInput name="userID" id="userID" defaultValue={userID} />
      <DefaultValueInput
        name="feeling"
        id="feeling"
        defaultValue={feeling ? `${feeling.feeling} ${feeling.shape}` : ""}
      />
    </>
  );
};

export default DefaultValueInputs;

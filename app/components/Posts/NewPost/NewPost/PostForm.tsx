"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { newPost } from "../functions/newPost";
import Button from "../../../Buttons/Button";
import { useAppSelector } from "@/store/reduxHooks";
import { useUserID } from "@/app/glopalCustomHooks/useUserID";
import PostTextContentInput from "./PostTextContentInput";
import { DefaultValueInput } from "./DefaultValueInput";
import PostAdditionOptions from "./PostAdditionOptions";

const PostForm = () => {
  const urls = useAppSelector((state) => state.newPost.postImagesURLs);
  const feeling = useAppSelector((state) => state.newPost.feeling);
  const [formState, formAction] = useFormState(newPost, null);
  const userID = useUserID();

  useEffect(() => {
    console.log(formState);
  }, [formState]);
  useEffect(() => {
    console.log(feeling);
  }, [feeling]);

  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center w-4/5 sm:w-3/5 md:w-2/5 mx-auto ">
      <label className=" hidden font-descripFont font-extrabold dark:text-white">
        new post
      </label>
      <PostTextContentInput />
      <div className=" w-full flex justify-between">
        <PostAdditionOptions />
        <div className=" w-12 me-16">
          <Button dir={-1} color="black" submittButton>
            Post
          </Button>
        </div>
      </div>
      <DefaultValueInput
        name="imagesURLs"
        id="imagesURLs"
        defaultValue={urls}
      />
      <DefaultValueInput name="userID" id="userID" defaultValue={userID} />
      <DefaultValueInput
        name="feeling"
        id="feeling"
        defaultValue={`${feeling.feeling}+${feeling.shape}`}
      />
    </form>
  );
};

export default PostForm;

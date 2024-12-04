"use client";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { newPost } from "../functions/newPost";
import PostTextContentInput from "./PostTextContentInput";
import DefaultValueInputs from "./DefaultValueInputs";
import PostOptionsAndSubmit from "./PostOptionsAndSubmit";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { newPostActions } from "@/store/slices/newPostSlice/slice";

const PostForm = () => {
  const [formState, formAction] = useFormState(newPost, null);
  const dispatch = useAppDispatch();
  const errorMSG = useAppSelector((state) => state.newPost.posetErrorMessage);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (formState?.success) {
      formRef.current?.reset();
      dispatch(newPostActions.setFeeling(null));
      dispatch(newPostActions.setPostImagesURLs(null));
    }
    if (!formState?.success) formState?.success;
    dispatch(newPostActions.enableErrorMsg());
  }, [dispatch, formState]);
  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col justify-center items-center w-full sm:w-[75%] lg:w-[85%] mx-auto">
      <label className=" hidden font-descripFont font-extrabold dark:text-white">
        new post
      </label>
      <PostTextContentInput />
      <PostOptionsAndSubmit />
      <div className="h-2">
        {errorMSG && !formState?.success && (
          <p className="text-redColor text-xs">{formState?.message}</p>
        )}
      </div>
      <DefaultValueInputs />
    </form>
  );
};

export default PostForm;

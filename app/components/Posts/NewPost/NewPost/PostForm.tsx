"use client";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { newPost } from "../functions/newPost";
import Button from "../../../Buttons/Button";
import PostTextContentInput from "./PostTextContentInput";
import PostAdditionOptions from "./PostAdditionOptions";
import DefaultValueInputs from "./DefaultValueInputs";
import PostOptionsAndSubmit from "./PostOptionsAndSubmit";

const PostForm = () => {
  const [formState, formAction] = useFormState(newPost, null);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    console.log(formState);
    formState?.success && formRef.current?.reset();
  }, [formState]);
  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col justify-center items-center w-4/5 sm:w-3/5 md:w-2/5 mx-auto font-descripFont">
      <label className=" hidden font-descripFont font-extrabold dark:text-white">
        new post
      </label>
      <PostTextContentInput />
      <PostOptionsAndSubmit />
      {!formState?.success && (
        <p className="text-redColor text-xs">{formState?.message}</p>
      )}
      <DefaultValueInputs />
    </form>
  );
};

export default PostForm;

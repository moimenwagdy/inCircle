"use client";
import React from "react";
import { useFormState } from "react-dom";
import { newPost } from "../functions/newPost";
import Button from "../../Buttons/Button";

const PostForm = () => {
  const [formState, formAction] = useFormState(newPost, null);
  console.log(formState?.content);
  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center w-3/4 mx-auto gap-y-2">
      <label className="font-descripFont font-extrabold dark:text-white">new post</label>
      <div className="w-full">
        <textarea
          id="new-post"
          name="newPost"
          rows={3}
          placeholder="What's on your mind?"
          className=" w-full resize-none p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blueColor focus:border-blueColor"
        />
      </div>
      <div className="mt-4 w-12">
        <Button dir={-1} color="blue" submittButton>
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;

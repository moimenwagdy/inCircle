import React, { forwardRef } from "react";

interface PostCommentFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCommentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PostCommentForm = forwardRef<
  HTMLFormElement,
  PostCommentFormProps
>(({ onSubmit, onCommentChange }, formRef) => {
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="w-full flex justify-around items-center mt-2">
      <input
        onChange={onCommentChange}
        type="text"
        id="comment"
        placeholder="Add your comment here"
        className="placeholder:text-xs w-3/4 py-2 px-2 focus:outline-[1px] focus:outline-redColor/10 ring-[1px] ring-blueColor/10"
      />
      <button type="submit" className="text-white bg-redColor h-fit px-2">
        Submit
      </button>
    </form>
  );
});

PostCommentForm.displayName = "PostCommentForm";

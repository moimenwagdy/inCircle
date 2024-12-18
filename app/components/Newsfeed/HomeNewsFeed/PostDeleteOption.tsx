"use client";
import React, { useState } from "react";
import { deletePost } from "./functions/DeletePost";

const PostDeleteOption: React.FC<{ postId: string }> = ({ postId }) => {
  const [openList, setOpenList] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [showConfirmDeleteQuestion, setShowConfirmDeleteQuestion] =
    useState<boolean>(false);

  const handleListState = () => {
    setOpenList((prv) => !prv);
  };
  const handleDeletePost = () => {
    setShowConfirmDeleteQuestion(true);
  };
  const cancelDelete = () => {
    setShowConfirmDeleteQuestion(false);
    setOpenList(false);
  };
  const submitDeletePost = async () => {
    setIsLoading(true);
    const result = await deletePost(postId);
    setIsLoading(false);
    setShowConfirmDeleteQuestion(false);
    setOpenList(false);
  };
  return (
    <>
      <button
        type="button"
        onClick={handleListState}
        className="text-lg -mt-7 text-blueColor cursor-pointer">
        *
      </button>
      {openList && (
        <ul className="absolute right-1/5 w-32 bg-offWhite">
          {!showConfirmDeleteQuestion && (
            <li className="cursor-pointer" onClick={handleDeletePost}>
              Delete Post
            </li>
          )}
          {showConfirmDeleteQuestion && !loading && (
            <li className="text-xs flex flex-col justify-start items-start me-2">
              <p> You won&#39;t be able to undo this action</p>
              <span className="flex justify-start items-center gap-x-1">
                <button
                  className="text-redColor"
                  type="button"
                  onClick={submitDeletePost}>
                  Ok
                </button>
                <button
                  className="text-blueColor"
                  onClick={cancelDelete}
                  type="button">
                  Back
                </button>
              </span>
            </li>
          )}
          {loading && (
            <li>
              <p className="text-xs"> deleting ...</p>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default PostDeleteOption;

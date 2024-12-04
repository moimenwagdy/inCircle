"use client";
import { useState } from "react";
import PostComment from "./PostComment";
import { PostCommentForm } from "./PostCommentForm";
import { useComments } from "./customHook/useComments";
const PostComments: React.FC<{ postId: string }> = ({ postId }) => {
  const {
    handleCommentChange,
    handleDeleteComment,
    isEmpty,
    submitComment,
    comments,
    formRef,
    loading,
  } = useComments(postId);
  return (
    <>
      <>
        {!isEmpty && (
          <ul className="space-y-1">
            {comments &&
              comments?.map((comment) => {
                return (
                  <li key={comment._id}>
                    <PostComment
                      comment={comment}
                      key={comment._id}
                      onClick={handleDeleteComment}
                    />
                  </li>
                );
              })}
          </ul>
        )}
        {isEmpty && !loading && (
          <p className="text-xs text-center">no comments yet!</p>
        )}
        {loading && (
          <div className="min-h-10 min-w-[90%] animate-pulse bg-black/5 mt-2"></div>
        )}
      </>
      <PostCommentForm
        onCommentChange={handleCommentChange}
        onSubmit={submitComment}
        ref={formRef}
      />
    </>
  );
};

export default PostComments;

"use client";
import PostComment from "./PostComment";
import { PostCommentForm } from "./PostCommentForm";
import { useComments } from "./customHook/useComments";
import { useSession } from "next-auth/react";
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

  const session = useSession();
  const isLoggedIn = session.status === "authenticated";
  return (
    <>
      <>
        {!isEmpty && (
          <ul className="space-y-1 mt-2">
            {comments?.map((comment) => {
              return (
                <li
               
                  key={comment._id}>
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
      {isLoggedIn ? (
        <PostCommentForm
          onCommentChange={handleCommentChange}
          onSubmit={submitComment}
          ref={formRef}
        />
      ) : (
        <p className=" text-sm text-center">Login to write comments</p>
      )}
    </>
  );
};

export default PostComments;

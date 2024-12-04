"use client";
import { comment } from "@/globalTypes/globalTypes";
import CommentHeader from "./CommentHeader";
import { useSession } from "next-auth/react";
import { useState } from "react";

const PostComment: React.FC<{
  comment: comment;
  onClick: (commentID: string) => void;
}> = ({ onClick, comment }) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const session = useSession();
  const allowDel = session.data?.user._id === comment.userID;

  const handleAllowDelete = () => {
    setShowDelete(true);
  };
  const disableAllowDelete = () => {
    setShowDelete(false);
  };
  return (
    <article className="bg-redColor/5 px-2 py-1 space-y-1">
      <div className="w-full">
        <CommentHeader userID={comment.userID} key={comment.userID} />
      </div>
      <div className="ps-9 text-sm">
        <p>{comment.comment}</p>
      </div>
      <div className="flex justify-between ms-9">
        <div className="flex gap-x-2">
          <div className="space-x-2">
            <button
              className="
              text-xs">
              like
            </button>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            {allowDel && (
              <button className="text-xs" onClick={handleAllowDelete}>
                {showDelete ? "delete ?" : "delete"}
              </button>
            )}
            {
              <>
                {showDelete && (
                  <div className="text-xs">
                    <button
                      className=""
                      onClick={() => onClick(comment._id)}>
                      yes
                    </button>{" "}
                    /{" "}
                    <button className="" onClick={disableAllowDelete}>
                      no
                    </button>
                  </div>
                )}
              </>
            }
          </div>
        </div>
        <p className="text-xs">
          {new Date(comment.createdAt).toLocaleString("en-US", {
            day: "2-digit",
            hour: "numeric",
            month: "short",
            minute: "2-digit",
          })}
        </p>
      </div>
    </article>
  );
};
export default PostComment;

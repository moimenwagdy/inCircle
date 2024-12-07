"use client";
import { comment } from "@/globalTypes/globalTypes";
import CommentHeader from "./CommentHeader";
import { useSession } from "next-auth/react";
import { useState } from "react";
import TimePrint from "@/app/components/TimePrint/TimePrint";

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
      <div className="mx-5 px-4 text-sm bg-white/[.10] py-1 rounded-md first-letter:capitalize">
        <p>{comment.comment}</p>
      </div>
      <div className="flex justify-between items-center ms-9">
        <div className="flex justify-start items-center gap-x-2">
          <div className="space-x-2 flex">
            <button
              className="
              text-xs hover:text-blueColor">
              Like
            </button>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            {allowDel && (
              <button
                className="text-xs hover:text-redColor"
                onClick={handleAllowDelete}>
                {showDelete ? "Delete ?" : "Delete"}
              </button>
            )}
            {
              <>
                {showDelete && (
                  <div className="text-xs">
                    <button className="" onClick={() => onClick(comment._id)}>
                      Yes
                    </button>{" "}
                    /{" "}
                    <button className="" onClick={disableAllowDelete}>
                      No
                    </button>
                  </div>
                )}
              </>
            }
          </div>
        </div>
        <TimePrint createdAt={comment.createdAt.toString()} />
      </div>
    </article>
  );
};
export default PostComment;
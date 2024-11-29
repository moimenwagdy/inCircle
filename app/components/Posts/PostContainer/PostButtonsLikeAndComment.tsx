"use client";
import { useSession } from "next-auth/react";
import { handleLikePost } from "./functions/likeOrDislikePost";
import { useEffect, useMemo, useState } from "react";
import { likeRsopnse } from "@/globalTypes/globalTypes";
import { getLikes } from "./functions/getLikes";
import { getLikesUserName } from "./functions/getLikesUsernames";

const PostButtonsLikeAndComment: React.FC<{ postId: string }> = ({
  postId,
}) => {
  const [likes, setLikes] = useState<string[]>([]);
  const [likeAdded, setLikeAdded] = useState<boolean>();
  const [userNames, setUserNames] = useState<string[]>([]);
  const session = useSession();
  const currentUserId = session.data?.user._id;

  const fetchLikes = async () => {
    try {
      const likesArray = await getLikes(postId);
      setLikes(likesArray);
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  const handleInteraction = async () => {
    const result: likeRsopnse = await handleLikePost(currentUserId!, postId);
    setLikeAdded(result?.added ?? !result?.removed);
  };

  useEffect(() => {
    fetchLikes();
  }, [likeAdded]);

  const currentUserLike = useMemo(
    () => likes.includes(currentUserId!),
    [likes, currentUserId]
  );

  useEffect(() => {
    const fetchUsernames = async () => {
      const usernames = await getLikesUserName(likes);
      setUserNames(usernames);
      console.log("Usernames:", usernames);
    };

    if (likes.length > 0) {
      fetchUsernames();
    }
  }, [likes]);
  const LikesIsNOtEmpty = userNames.length > 0;
  return (
    <aside className="flex flex-col justify-start w-full self-start items-start">
      <div
        className={`group relative flex w-fit self-end h-[12px] justify-end items-start  gap-x-[2px] ${
          LikesIsNOtEmpty ? "cursor-pointer" : ""
        }`}>
        <p className="text-xs">&#x1F5A4;</p>
        <span className="text-xs">{likes.length}</span>
        {LikesIsNOtEmpty && (
          <ul className="absolute top-6 bg-black/70 w-fit px-2 flex flex-col justify-start items-center text-white py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            {userNames.slice(0, 9).map((like) => (
              <li className="h-fit" key={like}>
                <p className="text-xs">{like}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={handleInteraction}
        className={`group ${
          likeAdded || currentUserLike
            ? "text-blueColor"
            : "text-black dark:text-white"
        }`}>
        Like
      </button>
      <button>Comment</button>
    </aside>
  );
};

export default PostButtonsLikeAndComment;

"use client";
import { useSession } from "next-auth/react";
import { useLikeFeature } from "./customHook/useLikeFeature";
import { useLocale, useTranslations } from "next-intl";

const PostLikeButton: React.FC<{ postId: string }> = ({ postId }) => {
  const {
    LikesIsNOtEmpty,
    likeAdded,
    likes,
    userNames,
    handleInteraction,
    currentUserLike,
  } = useLikeFeature(postId);
  const session = useSession();
  const isLoggedIn = session.status === "authenticated";
  const tPost = useTranslations("singlePost");
  const locale = useLocale();
  const isAr = locale === "ar";
  return (
    <aside className="flex flex-row-reverse justify-between w-full self-start items-center">
      <div
        className={`group relative flex w-fit  h-[12px] justify-end items-start  gap-x-[2px] ${
          LikesIsNOtEmpty ? "cursor-pointer" : ""
        }`}>
        <p className="text-xs">&#x1F5A4;</p>
        <span className="text-xs">{likes.length}</span>
        {LikesIsNOtEmpty && (
          <ul className="absolute top-6 bg-black/70 w-24 flex flex-col  justify-start items-center text-white py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            {userNames.slice(0, 9).map((like) => (
              <li className="h-fit" key={like}>
                <p className="text-xs ">{like}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        disabled={!isLoggedIn}
        onClick={handleInteraction}
        className={`group  disabled:hover:text-black/50 hover:text-blueColor ${
          likeAdded || currentUserLike
            ? "text-blueColor font-bold"
            : "text-black dark:text-white "
        }`}>
        <p className={`${isAr ? "text-xs" : ""}`}>
          {likeAdded || currentUserLike
            ? `${tPost("liked")}`
            : `${tPost("like")}`}
        </p>
      </button>
    </aside>
  );
};
export default PostLikeButton;

"use client";
import { useLikeFeature } from "./customHook/useLikeFeature";

const PostLikeButton: React.FC<{ postId: string }> = ({ postId }) => {
  const {
    LikesIsNOtEmpty,
    likeAdded,
    likes,
    userNames,
    handleInteraction,
    currentUserLike,
  } = useLikeFeature(postId);

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
        onClick={handleInteraction}
        className={`group ${
          likeAdded || currentUserLike
            ? "text-blueColor"
            : "text-black dark:text-white"
        }`}>
        Like
      </button>
    </aside>
  );
};
export default PostLikeButton;
const AramexClient = "L02F835";
("01010050118");
50269452376;
("01278359849");

import React from "react";

const LikesNamesList: React.FC<{
  LikesIsNOtEmpty: boolean;
  userNames: string[];
  likes: string[];
}> = ({ LikesIsNOtEmpty, likes, userNames }) => {
  return (
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
  );
};

export default LikesNamesList;

import { usersuggestion } from "@/globalTypes/globalTypes";
import React from "react";
import UserImage from "../../UserImage/UserImage";

const NewCoversationSuggetion: React.FC<{ user: usersuggestion }> = ({
  user,
}) => {
  return (
    <label
      className="checkbox-label cursor-pointer hover:outline hover:outline-2 font-[500] hover:outline-blueColor dark:hover:outline-2 dark:hover:outline dark:hover:outline-redColor bg-black/10 dark:bg-white/20 px-2 py-1 rounded flex w-full items-center font-descripFont text-xs shadow-md"
      htmlFor={user._id}>
      <input
        name="usersData"
        type="checkbox"
        id={user._id}
        value={user._id}
        className="cursor-pointer sr-only "
      />
      <div className="relative">
        <UserImage
          src={user?.profile?.avatar}
          alt={user.username}
          userName={user.username}
        />
      </div>
      <p className=" px-2 py-1 capitalize dark:text-white">{user.username}</p>
    </label>
  );
};
export default NewCoversationSuggetion;

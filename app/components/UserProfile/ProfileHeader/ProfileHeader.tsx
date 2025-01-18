import React from "react";
import UserImage from "../../UserImage/UserImage";
import UserBio from "./UserBio";

const ProfileHeader: React.FC<{
  imgURL: string;
  userName: string;
  bio: string;
  userID: string;
  addMargin?: boolean;
}> = ({ imgURL, bio, userName, userID, addMargin }) => {
  return (
    <header
      className={`flex flex-col justify-center items-center ${
        addMargin ? "mt-16" : ""
      }`}>
      <div className="relative w-fit rounded-full shadow-md shadow-black ">
        <UserImage
          profilePageImage
          src={imgURL}
          alt={userName}
          userName={userName}
        />
      </div>
      <div className="text-white bg-redColor px-14 pt-9 pb-2 -mt-9 rounded-3xl shadow-black/20 shadow-md">
        <p className="text-3xl font-descripFont font-bold capitalize">
          {userName}
        </p>
      </div>
      <UserBio bio={bio} userID={userID} key={bio} />
    </header>
  );
};

export default ProfileHeader;

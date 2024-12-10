import React from "react";
import UserImage from "../../UserImage/UserImage";
import UserBio from "./UserBio";

const ProfileHeader: React.FC<{
  imgURL: string;
  userName: string;
  bio: string;
  userID: string;
}> = ({ imgURL, bio, userName, userID }) => {
  return (
    <header className="flex flex-col justify-center items-center mt-10">
      <div className="relative w-fit after:w-[200%] after:h-20 after:bg-redColor after:absolute after:-z-10 after:top-full after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:shadow-xl rounded-full shadow-md shadow-black after:rounded-3xl">
        <UserImage
          profilePageImage
          src={imgURL}
          alt={userName}
          userName={userName}
        />
      </div>
      <div className="text-white ">
        <p className="text-3xl font-descripFont font-bold capitalize">
          {userName}
        </p>
      </div>
      <UserBio bio={bio} userID={userID} key={bio} />
    </header>
  );
};

export default ProfileHeader;

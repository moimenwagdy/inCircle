import React from "react";
import UserImage from "../../UserImage/UserImage";

const ProfileHeader: React.FC<{
  imgURL: string;
  userName: string;
  bio: string;
}> = ({ imgURL, bio, userName }) => {
  return (
    <header>
      <div>
        <UserImage src={imgURL} alt={userName} userName={userName} />
      </div>
      <div>
        <p>{userName}</p>
      </div>
      <div>
        <p>{bio}</p>
      </div>
    </header>
  );
};

export default ProfileHeader;

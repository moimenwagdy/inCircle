import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import getUserProfileData from "./functions/getUserProfileData";

const UserProfile: React.FC<{ userID: string }> = async ({ userID }) => {
  const response = await getUserProfileData(userID);
  return (
    <main className="">
      <ProfileHeader
        imgURL={response?.profile?.avatar || ""}
        bio={response?.profile?.bio}
        userName={response.username}
      />
    </main>
  );
};
export default UserProfile;
("4ECoUw");

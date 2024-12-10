import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { user } from "@/globalTypes/globalTypes";
import getUserProfileData from "./functions/getUserProfileData";

const UserProfile: React.FC<{ userID: string }> = async ({ userID }) => {
  const response: user = await getUserProfileData(userID);
  console.log(response)
  return (
    <main className="">
      <ProfileHeader
        imgURL={response?.profile?.avatar || ""}
        bio={response?.profile?.bio}
        userName={response.username}
        userID={userID}
      />
    </main>
  );
};
export default UserProfile;

"use client";
import React from "react";
import MessagesButton from "./Messages/MessagesButton";
import NotificationsContainer from "./Notifications/NotificationsContainer";
import { useSession } from "next-auth/react";

const ProfileAlerts = () => {
  const session = useSession();

  return (
    <>
      {session?.data && (
        <div className="flex justify-center items-center gap-x-2 h-fit px-20 py-1 fixed top-20 left-1/2 -translate-x-[50%] z-50">
          <NotificationsContainer userID={session?.data.user._id!} />
          <MessagesButton />
        </div>
      )}
    </>
  );
};

export default ProfileAlerts;

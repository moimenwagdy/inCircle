"use client";
import React, { useEffect, useState } from "react";
import MessagesButton from "./Messages/MessagesButton";
import NotificationsContainer from "./Notifications/NotificationsContainer";
import { useSession } from "next-auth/react";
const ProfileAlerts = () => {
  const [topValue, setTopValue] = useState("top-20");

  const session = useSession();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTopValue("top-5");
      } else {
        setTopValue("top-20");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {session?.data && (
        <div
          className={`flex justify-center items-center gap-x-2 h-fit px-20 py-1 fixed ${topValue} left-1/2 -translate-x-[50%] z-50`}>
          <NotificationsContainer userID={session?.data.user._id!} />
          <MessagesButton />
        </div>
      )}
    </>
  );
};
export default ProfileAlerts;

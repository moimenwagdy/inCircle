"use client";
import { notification } from "@/globalTypes/globalTypes";
import React from "react";
import TimePrint from "../../TimePrint/TimePrint";
import NotificationUserImage from "./NotificationUserImage";
import Link from "next/link";
import deleteNotification from "./functions/deleteNotification";
import { useAppDispatch } from "@/store/reduxHooks";
import { profileAlertsActions } from "@/store/slices/ProfileAlertsSlice/ProfileAlertsSlice";
import NotificationBG from "./NotificationBG";

const NotificationItem: React.FC<{ notification: notification }> = ({
  notification,
}) => {
  const dispatch = useAppDispatch();
  const handleOpenedNotif = async () => {
    const timeout = setTimeout(() => {
      dispatch(profileAlertsActions.closeNotifs());
    }, 300);
    await deleteNotification(notification._id);
    clearTimeout(timeout);
  };
  return (
    <Link
      href={`${notification.link}/about`}
      key={notification._id}
      onClick={handleOpenedNotif}
      className="bg-redColor   flex flex-col w-full rounded-md text-white hover:scale-[1.01] overflow-hidden">
      <div className="flex justify-start items-center gap-x-2 p-1 relative ">
        <div className="ps-2 pt-1">
          <NotificationBG />
        </div>
        <NotificationUserImage userId={notification.fromUserId} />
        <p className="font-descripFont text-sm font-bold z-50">
          {notification.content[0].toLocaleUpperCase()}
          {notification.content.slice(1)}
        </p>
      </div>
      <div className="self-end text-xs -mt-3 pe-2 z-50">
        <TimePrint createdAt={notification.createdAt.toString()} />
      </div>
    </Link>
  );
};

export default NotificationItem;

"use client";
import { notification } from "@/globalTypes/globalTypes";
import React, { ReactNode, useState } from "react";
import TimePrint from "../../TimePrint/TimePrint";
import NotificationUserImage from "./NotificationUserImage";
import { Link } from "@/navigation";
import { useAppDispatch } from "@/store/reduxHooks";
import { profileAlertsActions } from "@/store/slices/ProfileAlertsSlice/ProfileAlertsSlice";
import NotificationBG from "./NotificationBG";
import deleteNotification from "../functions/deleteNotifaications";
import StartNewConversation from "../../Messaging/StartNewConversation/StartNewConversation";
import TEST from "./TEST";
import { MessagingSliceActions } from "@/store/slices/MessagingSlice/MessagingSlice";
const NotificationItem: React.FC<{ notification: notification }> = ({
  notification,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isMessage = notification.type === "message";
  const handleOpenedNotif = async () => {
    if (isMessage) {
      setIsShow(true);
    }
    const timeout = setTimeout(() => {
      dispatch(profileAlertsActions.closeNotifs());
      dispatch(profileAlertsActions.closeMessages());
    }, 300);
    await deleteNotification(notification._id);
    clearTimeout(timeout);
  };
  const likeOrComment =
    notification.type === "like" || notification.type === "comment";
  return (
    <>
      <Link
        id="not mes"
        href={
          likeOrComment
            ? `${notification.link}/${likeOrComment ? "" : "about"}`
            : ""
        }
        key={notification._id}
        onClick={handleOpenedNotif}
        className="bg-redColor  ring-1 ring-redColor ring-offset-2 ring-offset-offWhite dark:ring-offset-black flex flex-col w-full rounded-md text-white hover:scale-[1.01] overflow-hidden shadow-lg dark:shadow-white/5 ">
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
      {isShow && <TEST ids={notification.link as string[]} />}
    </>
  );
};
export default NotificationItem;

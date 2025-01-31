"use client";
import { notification } from "@/globalTypes/globalTypes";
import React, { useState } from "react";
import TimePrint from "../../TimePrint/TimePrint";
import { useAppDispatch } from "@/store/reduxHooks";
import { profileAlertsActions } from "@/store/slices/ProfileAlertsSlice/ProfileAlertsSlice";
import NotificationBG from "../Notifications/NotificationBG";
import NotificationUserImage from "../Notifications/NotificationUserImage";
import StartNewConversation from "../../Messaging/StartNewConversation/StartNewConversation";
import { useSession } from "next-auth/react";
import deleteMessageNotification from "../functions/deleteMessageNotification";
const MesagesNotificationItem: React.FC<{ notification: notification }> = ({
  notification,
}) => {
  const [show, setSow] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const session = useSession();
  const handleOpenedNotif = async () => {
    setSow(true);
    const timeout = setTimeout(() => {
      dispatch(profileAlertsActions.closeNotifs());
      dispatch(profileAlertsActions.closeMessages());
    }, 1000);
    setTimeout(async () => {
      await deleteMessageNotification(
        notification._id,
        session.data?.user._id!
      );
    }, 1000);
    clearTimeout(timeout);
  };
  return (
    <>
      <button
        id="not mes"
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
      </button>
      {show && (
        <StartNewConversation participantsIDs={notification.link as string[]} />
      )}
    </>
  );
};
export default MesagesNotificationItem;

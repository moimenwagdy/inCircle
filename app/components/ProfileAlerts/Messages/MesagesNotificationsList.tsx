"use client";
import { notification } from "@/globalTypes/globalTypes";
import ClearNotifsButton from "../Notifications/ClearNotifsButton";
import MesagesNotificationItem from "./MesagesNotificationItem";
import MessagingModal from "../../Messaging/MessagingModal/MessagingModal";

const MesagesNotificationsList: React.FC<{
  notifications: notification[];
  ulID: string;
}> = ({ notifications, ulID }) => {
  const isEmpty = notifications.length === 0;
  return (
    <>
      {!isEmpty && (
        <ul
          id={ulID}
          className="flex flex-col justify-start items-start gap-y-1 w-fit bg-trnsparent rounded-md absolute min-w-96 left-[108%] sm:left-1/2 -translate-x-[50%]  ">
          <ClearNotifsButton userID={notifications[0].toUserId} />
          {notifications.length > 0 &&
            notifications?.map((notif) => {
              return (
                <li key={notif._id} className="w-full">
                  <MesagesNotificationItem notification={notif} />
                </li>
              );
            })}
        </ul>
      )}
      {notifications.length === 0 && (
        <div className="absolute min-w-96 left-[108%] bg-redColor rounded-md sm:left-1/2 -translate-x-[50%] mt-4 shadow-sm dark:shadow-white/5">
          <p className="py-1 px-3 text-white"> No New Messages !</p>
        </div>
      )}
      <MessagingModal />
    </>
  );
};
export default MesagesNotificationsList;

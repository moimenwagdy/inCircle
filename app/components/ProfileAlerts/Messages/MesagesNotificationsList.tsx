"use client";
import { notification } from "@/globalTypes/globalTypes";
import ClearNotifsButton from "../Notifications/ClearNotifsButton";
import MesagesNotificationItem from "./MesagesNotificationItem";
import MessagingModal from "../../Messaging/MessagingModal/MessagingModal";
import { useTranslations } from "next-intl";
import useLan from "@/lib/useLan";
import { motion } from "framer-motion";

const MesagesNotificationsList: React.FC<{
  notifications: notification[];
  ulID: string;
}> = ({ notifications, ulID }) => {
  const isEmpty = notifications.length === 0;
  const tAlerts = useTranslations("alerts");
  const isAr = useLan();
  return (
    <>
      {!isEmpty && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id={ulID}
          className="flex flex-col justify-start items-start gap-y-1 w-fit bg-trnsparent rounded-md absolute min-w-80 sm:min-w-96 left-0 sm:left-1/2 -translate-x-[50%]">
          <ClearNotifsButton userID={notifications[0].toUserId} />
          {notifications.length > 0 &&
            notifications?.map((notif) => {
              return (
                <li key={notif._id} className="w-full">
                  <MesagesNotificationItem notification={notif} />
                </li>
              );
            })}
        </motion.ul>
      )}
      {notifications.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute min-w-96 left-0 bg-redColor rounded-md sm:left-1/2 -translate-x-[50%] mt-4 shadow-sm dark:shadow-white/5">
          <p dir={`${isAr ? "rtl" : "ltr"}`} className="py-1 px-3 text-white">
            {tAlerts("noMessages")} !
          </p>
        </motion.div>
      )}
      <MessagingModal />
    </>
  );
};
export default MesagesNotificationsList;

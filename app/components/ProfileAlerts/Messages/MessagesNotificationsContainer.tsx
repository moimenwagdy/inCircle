import React from "react";
import MessagesButton from "./MessagesButton";
import NotificationsList from "../Notifications/NotificationsList";
import { useAppSelector } from "@/store/reduxHooks";
import { useMessagesNotifications } from "../functions/useMessagesNotifications";
import MesagesNotificationsList from "./MesagesNotificationsList";
import { AnimatePresence } from "framer-motion";

const MessagesNotificationsContainer: React.FC<{ userID: string }> = ({
  userID,
}) => {
  const { notifications, notificationCount } = useMessagesNotifications(userID);
  const showMessages = useAppSelector(
    (state) => state.ProfileAlertsSlice.showMsssages
  );
  return (
    <div className="relative">
      <MessagesButton notifLength={notificationCount} ulID="mes" />
      <AnimatePresence>
        {showMessages && (
          <MesagesNotificationsList notifications={notifications} ulID="mes" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MessagesNotificationsContainer;

import React from "react";
import MessagesButton from "./MessagesButton";
import NotificationsList from "../Notifications/NotificationsList";
import { useAppSelector } from "@/store/reduxHooks";
import { useMessagesNotifications } from "../functions/useMessagesNotifications";
import MesagesNotificationsList from "./MesagesNotificationsList";

const MessagesNotificationsContainer: React.FC<{ userID: string }> = ({
  userID,
}) => {
  const { notifications, notificationCount } = useMessagesNotifications(userID);
  const showMessages = useAppSelector(
    (state) => state.ProfileAlertsSlice.showMsssages
  );
  console.log(notifications);
  return (
    <div>
      <MessagesButton notifLength={notificationCount} ulID="mes" />
      {showMessages && (
        <MesagesNotificationsList notifications={notifications} ulID="mes" />
      )}
    </div>
  );
};

export default MessagesNotificationsContainer;

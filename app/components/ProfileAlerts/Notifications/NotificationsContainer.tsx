"use client";
import React from "react";
import NotificationsButton from "./NotificationsButton";
import { useNotifications } from "./functions/useNotifications";

const NotificationsContainer: React.FC<{ userID: string }> = ({ userID }) => {
  const { notifications, notificationCount } = useNotifications(userID);

  return <NotificationsButton notifLength={notificationCount} />;
};

export default NotificationsContainer;

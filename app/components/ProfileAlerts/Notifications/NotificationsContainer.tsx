"use client";
import React from "react";
import NotificationsButton from "./NotificationsButton";
import { useNotifications } from "../functions/useNotifications";
import NotificationsList from "./NotificationsList";
import { useAppSelector } from "@/store/reduxHooks";
import { AnimatePresence } from "framer-motion";

const NotificationsContainer: React.FC<{ userID: string }> = ({ userID }) => {
  const { notifications, notificationCount } = useNotifications(userID);
  const showNotifs = useAppSelector(
    (state) => state.ProfileAlertsSlice.showNotifs
  );
  return (
    <div className="relative">
      <NotificationsButton notifLength={notificationCount} ulID="not" />
      <AnimatePresence>
        {showNotifs && (
          <NotificationsList notifications={notifications} ulID="not" />
        )}
      </AnimatePresence>
    </div>
  );
};
export default NotificationsContainer;

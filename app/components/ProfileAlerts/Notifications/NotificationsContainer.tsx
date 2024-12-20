"use client";
import { getUserNotifications } from "./functions/getUserNotifications";
import { useQuery } from "@tanstack/react-query";
import NotificationsButton from "./NotificationsButton";
import React, { useEffect, useState } from "react";
import { sendBrowserNotification } from "@/lib/sendBrowserNotification";

const NotificationsContainer: React.FC<{ userID: string }> = ({ userID }) => {
  const [stateControl, setStateControl] = useState<boolean>(false);
  const { data, isSuccess, isFetching } = useQuery<[]>({
    queryKey: ["notification"],
    queryFn: async () => await getUserNotifications(userID),
    refetchInterval: 20000,
    refetchIntervalInBackground: true,
  });
  const [state, setState] = useState<number>(isSuccess ? data?.length! : 0);
  useEffect(() => {
    if (isSuccess) {
      const rr = setTimeout(() => {
        setStateControl(true);
        clearTimeout(rr);
      }, 300);
    }
  });
  useEffect(() => {
    if (!isFetching && isSuccess && stateControl) {
      setState((prv) => {
        if (prv === data.length) {
          return prv;
        } else {
          const diff = data.length - prv;
          sendBrowserNotification(
            "inCircle Notification",
            `you have ${diff} new notification`
          );
          return data.length;
        }
      });
    }
  }, [isSuccess, isFetching]);


  return <NotificationsButton notifLength={data?.length!} />;
};

export default NotificationsContainer;

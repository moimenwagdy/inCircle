import { useQuery } from "@tanstack/react-query";
// import { useState, useEffect } from "react";
// import { sendBrowserNotification } from "@/lib/sendBrowserNotification";
import { getUserNotifications } from "./getUserNotifications";

export const useNotifications = (userID: string) => {
  const {
    data,
    //  isSuccess
  } = useQuery<[]>({
    queryKey: ["notifications", userID],
    queryFn: async () => await getUserNotifications(userID),
    refetchInterval: 20000,
    refetchIntervalInBackground: true,
  });

  //   const [prevCount, setPrevCount] = useState<number>(0);

  //   useEffect(() => {
  //     if (isSuccess && data.length > prevCount) {
  //       const newNotifications = data.length - prevCount;
  //       sendBrowserNotification(
  //         "inCircle Notification",
  //         `You have ${newNotifications} new notifications`
  //       );
  //       setPrevCount(data.length);
  //     }
  //   }, [data, isSuccess]);

  return {
    notifications: data ?? [],
    notificationCount: data?.length ?? 0,
  };
};

import { useQuery } from "@tanstack/react-query";
import { getUserNotifications } from "./getUserNotifications";

export const useNotifications = (userID: string) => {
  const { data } = useQuery({
    queryKey: ["notifications", userID],
    queryFn: async () => await getUserNotifications(userID),
    refetchInterval: 20000,
    refetchIntervalInBackground: true,
  });
  return {
    notifications: data?.notifications || [],
    notificationCount: data?.notifications?.length || 0,
  };
};

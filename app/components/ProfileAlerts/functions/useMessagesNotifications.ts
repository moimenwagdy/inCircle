import { useQuery } from "@tanstack/react-query";
import { getUserNotifications } from "./getUserNotifications";
import { getUserMesagesNotifiations } from "./getUserMesagesNotifiations";

export const useMessagesNotifications = (userID: string) => {
  const { data } = useQuery({
    queryKey: ["messagesNotifications", userID],
    queryFn: async () => await getUserMesagesNotifiations(userID),
    refetchInterval: 20000,
    refetchIntervalInBackground: true,
  });
  return {
    notifications: data?.notifications || [],
    notificationCount: data?.notifications?.length || 0,
  };
};

import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

export const useUserID = () => {
  const session = useSession();
  const userID = session.data?.user._id || "";
  return userID;
};


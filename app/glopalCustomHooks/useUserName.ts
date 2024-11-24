"use client"
import { useSession } from "next-auth/react";

export const useUserName = () => {
  const session = useSession();
  const userName =
    session.data?.user?.username?.slice(
      0,
      session.data?.user?.username.indexOf(" ")
    ) || "";

  return userName;
};

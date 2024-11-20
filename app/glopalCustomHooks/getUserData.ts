import { getSession } from "next-auth/react";

export const getUserName = async () => {
  const session = await getSession();
  const userName =
    session?.user?.username?.slice(0, session.user?.username.indexOf(" ")) ||
    "";
  return userName;
};


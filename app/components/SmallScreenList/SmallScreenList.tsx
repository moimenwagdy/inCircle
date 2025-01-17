"use client";
import ListBg from "./ListBg";
import ListItem from "./ListItem";
import { Link } from "@/navigation";
import DarkLightMood from "../mood/DarkLightMood";
import { signOut, useSession } from "next-auth/react";
import LanguageSwitcher from "../LangSwitcher/LangSwitcher";
import ProfileHeader from "../UserProfile/ProfileHeader/ProfileHeader";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { NavListSliceActions } from "@/store/slices/NavListSlice/NavListSlice";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

const SmallScreenList = () => {
  const [loggedIn, setLoggedin] = useState<boolean>(true);
  const session = useSession();
  const listStatus = useAppSelector(
    (state) => state.NavListSlice.navListStatus
  );
  const dispatch = useAppDispatch();
  const handleListStatus = () => {
    dispatch(NavListSliceActions.closeList());
  };
  const handleLogout = () => {
    signOut();
  };
  useEffect(() => {
    if (!session.data) {
      setLoggedin(false);
    } else setLoggedin(true);
  }, [session.data]);
  const tSmallScreenList = useTranslations("smallScreenList");
  return (
    <AnimatePresence>
      {listStatus && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0  bg-blueColor dark:bg-black  w-full z-50 ">
          <ul className=" flex flex-col justify-center items-center gap-y-3 w-full mx-auto relative">
            <ListBg />
            <li className="w-full text-end px-10 pt-4 text-2xl font-sans dark:text-white">
              <button onClick={handleListStatus}>X</button>
            </li>
            {!loggedIn && (
              <Link onClick={handleListStatus} href="/auth">
                {tSmallScreenList("authRedirect")}
              </Link>
            )}
            {loggedIn && (
              <>
                <li className="my-4">
                  {session.data && (
                    <Link
                      onClick={handleListStatus}
                      href={`/user/${session.data.user._id}/posts`}>
                      <ProfileHeader
                        imgURL={session?.data?.user.profile.avatar}
                        userName={session?.data?.user.username}
                        bio={session.data?.user.profile.bio}
                        userID={session?.data?.user._id}
                      />
                    </Link>
                  )}
                </li>
                <ListItem>
                  <Link onClick={handleListStatus} href="/friends">
                    {tSmallScreenList("findFriends")}
                  </Link>
                </ListItem>
                <ListItem>
                  <Link onClick={handleListStatus} href="/convHistory">
                    {tSmallScreenList("conversationHistory")}
                  </Link>
                </ListItem>
                <ListItem>
                  <Link onClick={handleListStatus} href="/newChat">
                    {tSmallScreenList("startNewConversation")}
                  </Link>
                </ListItem>
              </>
            )}
            <li>
              <DarkLightMood />
            </li>
            <li className=" ms-32 h-16">
              <LanguageSwitcher />
            </li>
            {loggedIn && (
              <ListItem>
                <button onClick={handleLogout}>
                  {tSmallScreenList("logout")}
                </button>
              </ListItem>
            )}
          </ul>
        </motion.main>
      )}
    </AnimatePresence>
  );
};
export default SmallScreenList;

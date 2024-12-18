"use client";
import LanguageSwitcher from "../../LangSwitcher/LangSwitcher";
import DarkLightMood from "../../mood/DarkLightMood";
import LogoutButton from "../LogoutButton";
import { useSession } from "next-auth/react";
import UserImage from "../../UserImage/UserImage";
const Navbar = () => {
  const session = useSession();
  return (
    <nav className="z-10 h-12 w-full">
      <div className="  dark:text-white mx-auto sticky top-0 flex gap-x-2 max-h-full justify-between container">
        <div className="flex gap-x-2 w-fit">
          <LanguageSwitcher />
          <DarkLightMood />
        </div>
        {session.data && (
          <div className="flex justify-start items-center gap-x-2 pe-6">
            <div className="relative">
              <UserImage
                src={
                  session.data?.user.profile?.avatar! ||
                  session.data?.user.image!
                }
                alt={session.data.user.username}
                userName={session.data.user.username}
                biggerImg
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>{session.data?.user.username}</p>
              <p>{session.data?.user.email}</p>
              <div className="flex justify-start items-center gap-x-1">
                <p className="text-sm text-black dark:text-white">Followers</p>
                <p className="text-xs text-redColor">
                  {session.data?.user.followers.length}
                </p>
              </div>
            </div>
            <LogoutButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

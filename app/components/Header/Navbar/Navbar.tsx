"use client";
import LanguageSwitcher from "../../LangSwitcher/LangSwitcher";
import DarkLightMood from "../../mood/DarkLightMood";
import { useSession } from "next-auth/react";
import UserCard from "./UserCard";
import Logo from "./Logo";
import NavBackgroundImage from "./NavBackGroundImage";
const Navbar = () => {
  const session = useSession();
  return (
    <nav className="h-16 w-full flex justify-between items-center relative bg-blueColor mt-1 overflow-hidden">
      <NavBackgroundImage />
      <Logo />
      <div className="dark:text-white gap-x-2 flex w-fit h-full z-50 ">
        <div className="absolute min-h-full flex justify-center items-center left-40  z-50 gap-x-2 ">
          <DarkLightMood />
          <LanguageSwitcher />
        </div>
        {session.data && (
          <UserCard
            userID={session.data.user._id}
            avatar={
              session.data?.user.profile?.avatar! || session.data?.user.image!
            }
            email={session.data?.user.email}
            followers={session.data?.user.followers.length}
            username={session.data.user.username}
          />
        )}
      </div>
    </nav>
  );
};
export default Navbar;

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
    <nav className="z-10 h-16 w-full flex items-center bg-Test bg-blueColor relative mt-2  overflow-hidden">
      <NavBackgroundImage />
      <Logo />
      <div className="dark:text-white mx-auto sticky top-0 flex gap-x-2 h-20 justify-between items-center w-full">
        <div className="flex gap-x-10 w-fit">
          <LanguageSwitcher />
        </div>
        <DarkLightMood />
        {session.data && (
          <UserCard
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

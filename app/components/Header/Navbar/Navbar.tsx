"use client";
import LanguageSwitcher from "../../LangSwitcher/LangSwitcher";
import DarkLightMood from "../../mood/DarkLightMood";
import { useSession } from "next-auth/react";
import Image from "next/image";
import UserCard from "./UserCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const session = useSession();
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <nav className=" z-10 h-16 w-full flex items-center bg-black/10 dark:bg-white/20 mt-2">
      <Image
        className="hidden sm:block w-20 h-20 cursor-pointer mx-10 ring-8 rounded-full ring-offWhite dark:ring-black"
        alt="Logo"
        src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/finalLogoLarg.png?alt=media&token=5bdeac30-cffb-49dd-b563-efe419592ff7"
        width={1000}
        height={1000}
        onClick={handleNavigation}
      />
      <div className="dark:text-white mx-auto sticky top-0 flex gap-x-2 h-20 justify-between items-center w-full">
        <div className="flex gap-x-2 w-fit">
          <LanguageSwitcher />
          <DarkLightMood />
        </div>
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

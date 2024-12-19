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
    <nav className=" z-10 h-fit w-full flex items-start ">
      <Image
        className="hidden sm:block w-28 h-28 ms-4 mt-1 cursor-pointer"
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
        <div className="flex justify-center items-center gap-x-2 h-fit px-20 py-1 fixed top-14 left-1/2 -translate-x-[50%]">
          <button
            type="button"
            className="bg-blueColor flex text-start px-6 py-2 rounded-md shadow-md shadow-black/20 hover:scale-95 ">
            <FontAwesomeIcon icon={faBell} className="text-white text-xl " />
          </button>
          <button
            type="button"
            className="bg-blueColor  flex text-start px-6 py-2 rounded-md shadow-md shadow-black/20 hover:scale-95 ">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white text-xl "
            />
          </button>
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

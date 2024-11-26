"use client";
import React from "react";
import LanguageSwitcher from "../../LangSwitcher/LangSwitcher";
import DarkLightMood from "../../mood/DarkLightMood";
import Image from "next/image";
import LogoutButton from "../LogoutButton";
import { useSession } from "next-auth/react";

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
            <div>
              <Image
                src={
                  session.data?.user.profile?.avatar! ||
                  session.data?.user.image!
                }
                width={40}
                height={40}
                className="rounded-full w-10"
                alt="noImage"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>{session.data?.user.username}</p>
              <p>{session.data?.user.email}</p>
              <p>{session.data?.user.followers}</p>
            </div>
            <LogoutButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

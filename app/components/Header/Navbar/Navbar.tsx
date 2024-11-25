"use client"
import React from "react";
import LanguageSwitcher from "../../LangSwitcher/LangSwitcher";
import DarkLightMood from "../../mood/DarkLightMood";
import Image from "next/image";
import LogoutButton from "../LogoutButton";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <nav className="z-10">
      <div className="    dark:text-white mx-auto sticky top-0 flex gap-x-4">
        <LanguageSwitcher />
        <DarkLightMood />
        {session.data && (
          <div className="flex">
            <div>
              <Image
                src={
                  session.data?.user.profile?.avatar! ||
                  session.data?.user.image!
                }
                width={40}
                height={40}
                className="rounded-full"
                alt="noImage"
              />
            </div>
            <div className="flex gap-x-4">
              <p>{session.data?.user.username}</p>
              <p>{session.data?.user.email}</p>
              <p>{session.data?.user.followers}</p>
              <LogoutButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

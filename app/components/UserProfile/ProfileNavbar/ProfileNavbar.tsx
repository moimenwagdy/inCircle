"use client";
import React from "react";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

const ProfileNavbar: React.FC<{ userID: string }> = ({ userID }) => {
  const pathName = usePathname();
  return (
    <nav className="w-fit px-2 rounded mx-auto h-8 bg-black/10 dark:bg-white/10 mt-4 flex justify-center items-center gap-x-2">
      <NavItem
        active={pathName.includes("about")}
        href={`/user/${userID}/about`}
        children="About"
      />
      <NavItem
        active={pathName.includes("posts")}
        href={`/user/${userID}/posts`}
        children="Posts"
      />
      <NavItem
        active={pathName.includes("followers")}
        href={`/user/${userID}/followers`}
        children="Followers"
      />
      <NavItem
        active={pathName.includes("following")}
        href={`/user/${userID}/following`}
        children="Following"
      />
      <NavItem
        active={pathName.includes("Follow")}
        href="follow"
        children="Follow"
      />
    </nav>
  );
};

export default ProfileNavbar;

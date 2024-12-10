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
        href={`/user/${userID}/about`}>
        About
      </NavItem>
      <NavItem
        active={pathName.includes("posts")}
        href={`/user/${userID}/posts`}>
        Posts
      </NavItem>
      <NavItem
        active={pathName.includes("followers")}
        href={`/user/${userID}/followers`}>
        Followers
      </NavItem>
      <NavItem
        active={pathName.includes("following")}
        href={`/user/${userID}/following`}>
        Following
      </NavItem>
      <NavItem active={pathName.includes("Follow")} href="follow">
        Follow
      </NavItem>
    </nav>
  );
};

export default ProfileNavbar;

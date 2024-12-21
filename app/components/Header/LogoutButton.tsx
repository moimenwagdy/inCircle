"use client";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const LogoutButton = () => {
  const tButtons = useTranslations("buttons");
  const logOut = () => {
    signOut();
  };
  return (
    <Link className="text-xs dark:text-black" onClick={logOut} href="/">
      {tButtons("logout")}
    </Link>
  );
};

export default LogoutButton;

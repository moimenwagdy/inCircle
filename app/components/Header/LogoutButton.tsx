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
    <Link onClick={logOut} href="/">
      {tButtons("logout")}
    </Link>
  );
};

export default LogoutButton;

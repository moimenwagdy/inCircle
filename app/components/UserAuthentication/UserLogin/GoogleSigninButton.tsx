"use client";
import { signIn } from "next-auth/react";
import Button from "../../Buttons/Button";
import { useTranslations } from "next-intl";

const GoogleSigninButton = () => {
  const tAuth = useTranslations("auth");

  return (
    <div className="">
      <button
        className="px-10 py-2 bg-blueColor"
        onClick={() => {
          signIn("google");
        }}>
        {tAuth("googleSignIn")}
        <span className=" ms-2 space-x-[1px] rounded bg-white/50 px-1">
          <span className=" text-[#4285F4]">G</span>
          <span className=" text-[#DB4437]">o</span>
          <span className=" text-[#F4B400]">o</span>
          <span className=" text-[#4285F4]">g</span>
          <span className=" text-[#0F9D58]">l</span>
          <span className="text-[#DB4437]">e</span>
        </span>
      </button>
    </div>
  );
};

export default GoogleSigninButton;

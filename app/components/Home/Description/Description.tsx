"use client";
import React from "react";
import Button from "../../Buttons/Button";
import { useRouter } from "@/navigation";
import { useAppDispatch } from "@/store/reduxHooks";
import { authActions } from "@/store/slices/Slice";
import { useLocale, useTranslations } from "next-intl";

const Description = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const toSignup = () => {
    dispatch(authActions.setAuthMoodToSignUp());
    router.push("/auth");
  };
  const toSignin = () => {
    dispatch(authActions.setAuthMoodToSignIn());

    router.push("/auth");
  };
  const tHome = useTranslations("homePage");
  const tAuth = useTranslations("auth");
  const locale = useLocale();
  const ar = locale === "ar";
  return (
    <>
      <div className="w-4/5 md:w-2/4 mx-auto ">
        <p
          className={`${
            ar ? "font-arFreehand text-sm" : "font-basicFont text-xs font-thin"
          }  dark:text-white/80`}>
          {tHome("welcomeMessage")}
        </p>
      </div>
      <div className="flex w-full justify-center gap-x-3 mt-4">
        <div className="w-48 flex justify-end">
          <Button margin key="red" dir={1} color="red" onclick={toSignup}>
            {tAuth("formHeaderSignUP")}
          </Button>
        </div>
        <div onClick={toSignin} className="w-48 flex justify-start">
          <Button margin key="blue" dir={-1} color="blue">
            {tAuth("formHeaderSignIn")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Description;

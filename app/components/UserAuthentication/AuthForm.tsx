"use client";
import React from "react";
import Signup from "./UserSignup/Signup";
import LoginForm from "./UserLogin/LoginForm";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { authActions } from "@/store/slices/authSlice/Slice";
import Button from "../Buttons/Button";
import { useTranslations } from "next-intl";
import GoogleSigninButton from "./UserLogin/GoogleSigninButton";

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const authMood = useAppSelector((state) => state.authMood.authMoodIsSignUp);

  const handleAuthMood = () =>
    dispatch(
      authMood
        ? authActions.setAuthMoodToSignIn()
        : authActions.setAuthMoodToSignUp()
    );
  const tAuth = useTranslations("auth");

  return (
    <>
      {authMood ? <Signup /> : <LoginForm />}
      <div
        className={` w-full ${
          !authMood
            ? "flex flex-col justify-center items-center gap-y-2 my-4"
            : "flex flex-col justify-center items-center gap-y-2 my-4"
        }`}>
        <button
          className="px-10 py-2 bg-black dark:bg-offWhite text-white dark:text-black"
          onClick={handleAuthMood}>
          {authMood ? tAuth("haveAccount") : tAuth("createNewAccount")}
        </button>
        <GoogleSigninButton />
      </div>
    </>
  );
};

export default AuthForm;

"use client";
import React from "react";
import Signup from "./UserSignup/Signup";
import LoginForm from "./UserLogin/LoginForm";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { authActions } from "@/store/slices/authSlice/Slice";
import Button from "../Buttons/Button";

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const authMood = useAppSelector((state) => state.authMood.authMoodIsSignUp);

 
  const handleAuthMood = () =>
    dispatch(
      authMood
        ? authActions.setAuthMoodToSignIn()
        : authActions.setAuthMoodToSignUp()
    );


  return (
    <>
      {authMood ? <Signup /> : <LoginForm />}
      <div className="mt-24 md:mt-0 w-60 mx-auto my-1">
        <Button dir={-1} color="black" onclick={handleAuthMood}>
          {authMood ? "have an account ?" : "create new account"}
        </Button>
      </div>
    </>
  );
};

export default AuthForm;

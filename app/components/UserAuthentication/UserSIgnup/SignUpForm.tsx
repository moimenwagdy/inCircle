"use client";
import React, { useEffect, useRef, useState } from "react";
import SignupInput from "./SignupInput";
import { useFormState } from "react-dom";
import { signup } from "../functions/signUp";
import ImageUploader from "./ImageUploader/ImageUploader";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
const SignUpForm = () => {
  const [imgPath, setImagePath] = useState<string>("");
  const [formState, formAction] = useFormState(signup, null);
  const formRef = useRef<HTMLFormElement>(null);
  let usernameER;
  let emailER;
  let passwordER;
  let repeatedPasswordER;
  let ageER;
  const url = (url: string) => {
    setImagePath(url);
  };
  useEffect(() => {
    formState && formRef.current?.reset();
  }, [formState]);

  formState?.errors?.forEach((error) => {
    if (error.path[0] === "username") {
      usernameER = error.message;
    }
    if (error.path[0] === "password") {
      passwordER = error.message;
    }
    if (error.path[0] === "epeatedPassword") {
      repeatedPasswordER = error.message;
    }
    if (error.path[0] === "email") {
      emailER = error.message;
    }
    if (error.path[0] === "age") {
      ageER = error.message;
    }
  });
  const submitFormHandler = () => {
    formRef.current?.submit();
  };
  const locale = useLocale();
  const ar = locale === "ar";
  const t_inputs = useTranslations("auth");
  const t_PlaceHolders = useTranslations("authPlaceholders");
  const t_buttons = useTranslations("buttons");

  return (
    <main className="container mx-auto h-fit ps-4 pe-4 pt-4 sm:ps-0 sm:pe-0 flex flex-col justify-between gap-y-6">
      <form
        action={formAction}
        ref={formRef}
        className="flex flex-col gap-y-3 w-[400px] mx-auto">
        <label className="text-2xl text-center font-bold font-headerFont">
          {t_inputs("formHeader")}
        </label>
        <SignupInput
          name="username"
          type="text"
          id="username"
          placeholder={t_PlaceHolders("usernamePLaceholder")}
          text={t_inputs("usernameInput")}
          error={usernameER}
        />
        <SignupInput
          name="email"
          id="email"
          type="email"
          placeholder={t_PlaceHolders("emailPLaceholder")}
          text={t_inputs("emailInput")}
          error={emailER}
        />

        <SignupInput
          type="password"
          name="password"
          id="password"
          placeholder={t_PlaceHolders("passwordPLaceholder")}
          text={t_inputs("passwordInput")}
          error={passwordER}
        />
        <SignupInput
          type="password"
          name="repeatedPassword"
          id="passwordCheck"
          placeholder={t_PlaceHolders("passwordRepeatPLaceholder")}
          text={t_inputs("passwordRepeatInput")}
          error={repeatedPasswordER}
        />
        <SignupInput
          type="date"
          id="age"
          name="age"
          text={t_inputs("ageInput")}
          error={ageER}
          className="w-[248px] ps-0"
        />
        <SignupInput
          type="text"
          id="imgPath"
          name="imgPath"
          defaultValue={imgPath}
          className="hidden"
        />
      </form>
      <ImageUploader url={url} />
      <motion.button
        whileHover={{
          paddingLeft: ar ? "" : "40px",
          paddingRight: ar ? "40px" : "",
        }}
        transition={{ type: "spring", stiffness: 90 }}
        type="submit"
        className="ps-3 pe-10 py-2 bg-red-600 text-lg font-basicFont  self-center"
        onClick={submitFormHandler}>
        {t_buttons("submit")}
      </motion.button>
    </main>
  );
};
export default SignUpForm;

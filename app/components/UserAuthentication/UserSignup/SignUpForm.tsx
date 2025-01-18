"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { signup } from "../functions/signUp";
import { useLocale, useTranslations } from "next-intl";
import SubmitButton from "./SubmitButton";
import SingupInputs from "./SingupInputs";
import { redirect } from "next/navigation";
import ImageUploader from "./ImageUploader/ImageUploader";
const SignUpForm = () => {
  const [formState, formAction] = useFormState(signup, null);
  const [imgPath, setImagePath] = useState<string>("");

  const dontReset = formState?.message !== "User name or Email already exist";
  const formRef = useRef<HTMLFormElement>(null);
  formState?.data;
  useEffect(() => {
    if (formState && !formState.errors && !formState.success && dontReset) {
      formRef.current?.reset();
    }
  }, [formState, dontReset]);
  useEffect(() => {
    if (formState && formState.data && formState.success) {
      redirect(`/auth/validation/?userID=${formState?.data?.insertedId}`);
    }
  }, [formState]);
  const url = (url: string) => {
    setImagePath(url);
  };
  const t_inputs = useTranslations("auth");
  const locale = useLocale();
  const ar = locale === "ar";
  return (
    <form
      dir={ar ? "rtl" : "ltr"}
      action={formAction}
      ref={formRef}
      className="w-fit mx-auto py-7 bg-offWhite/5 px-40">
      <label className="text-6xl md:text-7xl text-center font-bold font-headerFont mb-10 text-redColor ">
        {t_inputs("formHeaderSignUP")}
      </label>
      <section className="flex flex-col md:flex-row md:gap-x-10">
        <div className="flex flex-col gap-y-3 py-7">
          <SingupInputs formState={formState} urlImagePath={imgPath} />
        </div>
        <ImageUploader url={url} />
      </section>
      <div className=" max-w-12  mt-4">
        <SubmitButton />
      </div>
      {!formState?.success && formState?.message && <p>{formState?.message}</p>}
    </form>
  );
};
export default SignUpForm;

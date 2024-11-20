"use client";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { signup } from "../functions/signUp";
import { useLocale, useTranslations } from "next-intl";
import SubmitButton from "./SubmitButton";
import SingupInputs from "./SingupInputs";
import { redirect } from "next/navigation";
const SignUpForm: React.FC<{ urlImagePath: string }> = ({ urlImagePath }) => {
  const [formState, formAction] = useFormState(signup, null);
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
  const t_inputs = useTranslations("auth");
  const locale = useLocale();
  const ar = locale === "ar";
  return (
    <form
      dir={ar ? "rtl" : "ltr"}
      action={formAction}
      ref={formRef}
      className="flex flex-col gap-y-3 py-7">
      <label className="text-6xl md:text-7xl text-center font-bold font-headerFont mb-10 text-redColor ">
        {t_inputs("formHeaderSignUP")}
      </label>
      <SingupInputs formState={formState} urlImagePath={urlImagePath} />
      <div className="w-12 mx-auto mt-36 md:mt-0">
        <SubmitButton />
      </div>
      {!formState?.success && formState?.message && <p>{formState?.message}</p>}
    </form>
  );
};
export default SignUpForm;

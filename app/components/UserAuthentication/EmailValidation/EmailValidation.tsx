"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { sendEmail } from "../functions/sendEmail";
import { useRouter, useSearchParams } from "next/navigation";
import UserValidatationCodeForm from "./UserValidatationCodeForm";
import { useTranslations } from "next-intl";

const EmailValidation = () => {
  const [validate, setValidate] = useState<boolean>(false);
  const [formState, formAction] = useFormState(sendEmail, null);
  const router = useRouter();
  const handleValidation = () => {
    setValidate(true);
  };
  const params = useSearchParams();
  const userID = params.get("userID") as string;
  const handleSkipValidation = () => {
    router.push("/auth/signin");
  };
  useEffect(() => {
    if (!formState?.success) setValidate(false);
  }, [formState?.success]);
  const tValidation = useTranslations("validation");
  const tButtons = useTranslations("buttons");
  return (
    <section className="flex flex-col justify-center gap-y-6 items-center mt-24">
      <p className="text-sm text-balance text-center w-3/4">
        {tValidation("validationDescription")}
      </p>
      <form action={formAction}>
        <button onClick={handleValidation} type="submit">
          {tButtons("validateEmail")}
        </button>
        <input
          type="text"
          name="userID"
          className="hidden"
          defaultValue={userID}
        />
      </form>
      {validate && (
        <p className="text-xs text-white/50">
          check your inbox,{" "}
          {!formState?.success ? "Sending email..." : formState?.data?.message}.
        </p>
      )}
      {validate && <UserValidatationCodeForm />}
      {!formState?.success && <p>{formState?.message}</p>}
      <button onClick={handleSkipValidation} className="text-xs  underline">
        {tButtons("skipStep")}
      </button>
    </section>
  );
};

export default EmailValidation;

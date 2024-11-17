"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { verfiySentCode } from "../functions/verfiySentCode";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const UserValidatationCodeForm = () => {
  const [formState, foreAction] = useFormState(verfiySentCode, null);
  const params = useSearchParams();
  const id = params.get("userID") as string;
  const router = useRouter();
  useEffect(() => {
    let timeOut: NodeJS.Timeout | undefined;
    if (formState?.success) {
      timeOut = setTimeout(() => {
        router.push("/auth/signin");
      }, 1500);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [formState?.success, router]);
  const tButtons = useTranslations("buttons");
  return (
    <>
      <form action={foreAction} className="flex  gap-x-4">
        <label>{tButtons("code")}</label>
        <input
          type="text"
          max={6}
          name="code"
          className="bg-gray-400 w-24 ps-5"
        />
        <input
          type="text"
          min={6}
          max={6}
          name="userID"
          defaultValue={id}
          className="bg-gray-400 w-24 ps-5 hidden"
        />
        <button type="submit">{tButtons("submit")}</button>
      </form>
      {formState?.success && (
        <p className="text-xs text-center">{formState?.message}</p>
      )}
    </>
  );
};

export default UserValidatationCodeForm;
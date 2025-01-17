"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { verfiySentCode } from "../functions/verfiySentCode";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useAppDispatch } from "@/store/reduxHooks";
import { authActions } from "@/store/slices/authSlice/Slice";
import { motion } from "framer-motion";

const UserValidatationCodeForm = () => {
  const [formState, foreAction] = useFormState(verfiySentCode, null);
  const params = useSearchParams();
  const id = params.get("userID") as string;
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    let timeOut: NodeJS.Timeout | undefined;
    if (formState?.success) {
      timeOut = setTimeout(() => {
        dispatch(authActions.setAuthMoodToSignIn());
        router.push("/auth");
      }, 1500);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [formState?.success, router, dispatch]);
  const tButtons = useTranslations("buttons");
  return (
    <>
      <motion.form
        initial={{ translateY: -40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        action={foreAction}
        className="flex  gap-x-4 ring-2 px-6 py-3 ring-bluColor rounded">
        <label className="dark:text-white">{tButtons("code")}</label>
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
        <button className="dark:text-white" type="submit">
          {tButtons("submit")}
        </button>
      </motion.form>
      {formState?.success && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-center text-black dark:text-white">
          {formState?.message}
        </motion.p>
      )}
      {!formState?.success && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-center text-black dark:text-white">
          {formState?.message}
        </motion.p>
      )}
    </>
  );
};

export default UserValidatationCodeForm;

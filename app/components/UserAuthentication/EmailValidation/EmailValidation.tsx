"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { sendEmail } from "../functions/sendEmail";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/navigation";
import UserValidatationCodeForm from "./UserValidatationCodeForm";
import { useTranslations } from "next-intl";
import { useAppDispatch } from "@/store/reduxHooks";
import { authActions } from "@/store/slices/authSlice/Slice";
import { motion } from "framer-motion";

const EmailValidation = () => {
  const [validate, setValidate] = useState<boolean>(false);
  const [formState, formAction] = useFormState(sendEmail, null);
  const disptach = useAppDispatch();
  const router = useRouter();
  const handleValidation = () => {
    setValidate(true);
  };
  const params = useSearchParams();
  const userID = params.get("userID") as string;
  const handleSkipValidation = () => {
    disptach(authActions.setAuthMoodToSignIn());
    router.push("/auth");
  };
  useEffect(() => {
    if (!formState?.success) setValidate(false);
  }, [formState?.success]);
  const tValidation = useTranslations("validation");
  const tButtons = useTranslations("buttons");
  return (
    <section className="flex flex-col justify-center gap-y-6 items-center mt-24">
      <p className="dark:text-white/70 text-sm text-balance text-center w-3/4">
        {tValidation("validationDescription")}
      </p>
      <form action={formAction}>
        <button
          className="text-white bg-blueColor px-2 py-1 rounded"
          onClick={handleValidation}
          type="submit">
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
        <motion.p
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
          }}
          className="text-xs text-black  dark:text-white/50">
          check your inbox,{" "}
          {!formState?.success ? "Sending email..." : formState?.data?.message}.
        </motion.p>
      )}
      {validate && <UserValidatationCodeForm />}
      {!formState?.success && (
        <p className="dark:text-red-500">{formState?.message}</p>
      )}
      <button
        onClick={handleSkipValidation}
        className="text-xs  underline dark:text-white">
        {tButtons("skipStep")}
      </button>
    </section>
  );
};

export default EmailValidation;

"use client";
import { useFormState } from "react-dom";
import { sendEmail } from "../functions/sendEmail";
import { useTranslations } from "next-intl";

const EmailForm = () => {
  const [formSate, formAction] = useFormState(sendEmail, null);
  const tButton = useTranslations("buttons");
  return (
    <form action={formAction}>
      <button type="submit">{tButton("sendEmail")}</button>
    </form>
  );
};

export default EmailForm;

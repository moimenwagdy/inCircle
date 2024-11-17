import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { useFormStatus } from "react-dom";
import Button from "../../Buttons/Button";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  const locale = useLocale();
  const ar = locale === "ar";
  const t_buttons = useTranslations("buttons");

  return (
    <Button submittButton color="blue" dir={-1} >
      {pending ? t_buttons("submitting") : t_buttons("submit")}
    </Button>
  );
};

export default SubmitButton;

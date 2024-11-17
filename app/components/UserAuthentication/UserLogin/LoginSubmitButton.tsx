"use client";
import React from "react";
import Button from "../../Buttons/Button";
import { useTranslations } from "next-intl";

const LoginSubmitButton = () => {
  const tButtons = useTranslations("buttons");

  return (
    <div className="min-w-12">
      <Button submittButton color="red" dir={-1}>
        {tButtons("submit")}
      </Button>
    </div>
  );
};

export default LoginSubmitButton;

"use client";
import React from "react";
import Button from "../../Buttons/Button";
import { useTranslations } from "next-intl";

const LoginSubmitButton: React.FC<{ loading: boolean }> = ({ loading }) => {
  const tButtons = useTranslations("buttons");

  return (
    <div className="min-w-12">
      <Button submittButton color="red" dir={-1}>
        {loading ? tButtons("submitting") : tButtons("submit")}
      </Button>
    </div>
  );
};

export default LoginSubmitButton;

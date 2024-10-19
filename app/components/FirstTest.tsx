import { useTranslations } from "next-intl";
import React from "react";

const FirstTest = () => {
  const t = useTranslations();

  return (
    <>
      <div className="dark:text-red-600 text-green-600">{t("welcome")}</div>
      <p className="dark:text-red-600 text-green-600">{t("description")}</p>
    </>
  );
};

export default FirstTest;

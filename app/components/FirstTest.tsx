import { useTranslations } from "next-intl";
import React from "react";

const FirstTest = () => {
  const t = useTranslations();

  return (
    <>
      <div className="">{t("welcome")}</div>
      <p>{t("description")}</p>
    </>
  );
};

export default FirstTest;

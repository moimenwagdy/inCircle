"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "../../navigation";
import LanguageSwitcher from "./LangSwitcher";

const AnotherOne = () => {
  const t = useTranslations();
  return (
    <>
      <div className="dark:text-red-600 text-green-600">{t("welcome")}</div>
      <div className="dark:text-red-600 text-green-600">{t("description")}</div>
      <Link href={`/`}>Back</Link>
      <LanguageSwitcher />
    </>
  );
};

export default AnotherOne;

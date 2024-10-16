"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const AnotherOne = () => {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale;
  return (
    <>
      <div>{t("welcome")}</div>
      <div>{t("description")}</div>
      <Link href={`../${locale}`}>Back</Link>
    </>
  );
};

export default AnotherOne;

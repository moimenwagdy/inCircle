"use client";
import { useLocale, useTranslations } from "next-intl";

const MainHeaderAdress = () => {
  const tHome = useTranslations("homePage");
  const locale = useLocale();
  const ar = locale === "ar";

  return (
    <h1
      className={`text-6xl md:text-8xl text-headed dark:text-offWhite  font-heavyFont mt-[30%] md:mt-[15%] -translate-y-[50%]`}>
      {tHome("Name")}
    </h1>
  );
};

export default MainHeaderAdress;

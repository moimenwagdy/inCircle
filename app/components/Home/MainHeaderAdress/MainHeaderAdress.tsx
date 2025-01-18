"use client";
import { useLocale, useTranslations } from "next-intl";

const MainHeaderAdress = () => {
  const tHome = useTranslations("homePage");
  const locale = useLocale();
  const ar = locale === "ar";

  return (
    <h1
      className={`text-6xl md:text-8xl text-headed mt-28 sm:mt-32 dark:text-offWhite  font-heavyFont  -translate-y-[50%]`}>
      {tHome("Name")}
    </h1>
  );
};

export default MainHeaderAdress;

import { useLocale } from "next-intl";

const useLan = () => {
  const locale = useLocale();
  const isAr = locale === "ar";

  return isAr;
};

export default useLan;

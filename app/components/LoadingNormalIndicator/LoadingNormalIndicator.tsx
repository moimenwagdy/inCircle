"use client";

import useLan from "@/lib/useLan";
import { useTranslations } from "next-intl";

const LoadingNormalIndicator: React.FC<{ className?: string }> = ({
  className,
}) => {
  const tProfile = useTranslations("profile");
  const isAr = useLan();
  return (
    <p
      className={`${className ? className : ""} dark:text-white text-center  ${
        isAr ? "text-xs" : "tracking-widest"
      } `}>
      {tProfile("loading")}
    </p>
  );
};

export default LoadingNormalIndicator;

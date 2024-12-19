"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const switchLanguage = (locale: string) => {
    const currentPath = window.location.pathname.split("/").slice(2).join("/");
    router.push(`/${locale}/${currentPath}`);
  };

  const locale = useLocale();
  const ar = locale === "ar";
  return (
    <div className="bg-transparent hidden sm:flex gap-x-1 h-fit">
      <button
        onClick={() => switchLanguage("en")}
        className="px-2 bg-blue-500 text-white rounded">
        English
      </button>
      <button
        onClick={() => switchLanguage("ar")}
        className="px-2 bg-green-500 text-white rounded">
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;

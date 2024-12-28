"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const LanguageSwitcher = () => {
  const [showLangSwitcher, setShowLangSwitcher] = useState<boolean>(false);
  const router = useRouter();
  const switchLanguage = (locale: string) => {
    const currentPath = window.location.pathname.split("/").slice(2).join("/");
    router.push(`/${locale}/${currentPath}`);
    setShowLangSwitcher(false);
  };
  const locale = useLocale();
  const ar = locale === "ar";
  const handleShowLangSwitcher = () => {
    setShowLangSwitcher((prv) => !prv);
  };
  return (
    <section className="flex justify-start items-start gap-x-3 min-w-36 h-6">
      <button className="text-xl  text-white " onClick={handleShowLangSwitcher}>
        <FontAwesomeIcon icon={faGlobe} />
      </button>
      {showLangSwitcher && (
        <div className="bg-transparent hidden sm:flex gap-x-1 h-fit mt-3">
          <button
            onClick={() => switchLanguage("en")}
            className="px-1 bg-blue-500 text-white rounded text-sm">
            English
          </button>
          <button
            onClick={() => switchLanguage("ar")}
            className="px-1 bg-green-500 text-white rounded text-sm">
            العربية
          </button>
        </div>
      )}
    </section>
  );
};
export default LanguageSwitcher;

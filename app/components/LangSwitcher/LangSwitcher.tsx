"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

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
    <section className=" justify-start items-start gap-x-3 min-w-36 h-6  sm:flex">
      <button
        name="languageSwitcher"
        className="text-2xl flex  text-white "
        onClick={handleShowLangSwitcher}>
        <FontAwesomeIcon
          icon={faGlobe}
          className="shadow-lg shadow-black/30 rounded-xl"
        />
      </button>
      <AnimatePresence>
        {showLangSwitcher && (
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -10 }}
            className="bg-transparent  sm:flex gap-x-1 h-fit mt-3">
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default LanguageSwitcher;

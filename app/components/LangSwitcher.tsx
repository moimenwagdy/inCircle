"use client";

import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();

  const switchLanguage = (locale: string) => {

    const currentPath = window.location.pathname.split("/").slice(2).join("/");
    router.push(`/${locale}/${currentPath}`); 
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => switchLanguage("en")}
        className="p-2 bg-blue-500 text-white rounded">
        English
      </button>
      <button
        onClick={() => switchLanguage("ar")}
        className="p-2 bg-green-500 text-white rounded">
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;

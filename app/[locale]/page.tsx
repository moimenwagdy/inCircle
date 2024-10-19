import FirstTest from "../components/FirstTest";
import LanguageSwitcher from "../components/LangSwitcher";
import { Link } from "../../navigation";
import Dark_light from "../components/mood/DarkLightMood";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();
  return (
    <div className="w-1/2 mx-auto text-center mt-20">
      <FirstTest />
      <h1 className="text-4xl"> {t("Name")} </h1>
      <LanguageSwitcher />
      <Link href={`/gege`}>to gege</Link>
      <Dark_light />
    </div>
  );
}

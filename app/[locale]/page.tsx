import { getTranslations } from "next-intl/server";
import MobileCodeActivation from "../components/UserAuthentication/UserSIgnup/EmailCodeActivation";

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="w-1/2 mx-auto text-center mt-20">
      <h1 className="text-6xl mt-6 font-heavyFont "> {t("Name")} </h1>
      <MobileCodeActivation />
    </div>
  );
}

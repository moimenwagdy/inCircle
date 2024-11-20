import { getTranslations } from "next-intl/server";
import HomePageBackGround from "../components/Home/BackGround/HomePageBackGround";
import Description from "../components/Home/Description/Description";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import MainHeaderAdress from "../components/Home/MainHeaderAdress/MainHeaderAdress";

export default async function Home({ params }: Params) {
  const tHome = await getTranslations("homePage");
  const locale = params.locale;
  const ar = locale === "ar";
  return (
    <main className="relative md:h-screen overflow-hidden z-0 ">
      <HomePageBackGround />
      <div className=" text-center">
        <MainHeaderAdress />
        <Description />
      </div>
    </main>
  );
}

import { getTranslations } from "next-intl/server";
import HomePageBackGround from "../components/Home/BackGround/HomePageBackGround";
import Description from "../components/Home/Description/Description";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

export default async function Home({ params }: Params) {
  const tHome = await getTranslations("homePage");
  const locale = params.locale;
  const ar = locale === "ar";
  return (
    <main className="relative md:h-screen overflow-hidden z-0 ">
      <HomePageBackGround />
      <div className=" text-center">
        <h1
          className={`text-6xl md:text-8xl text-headed dark:text-offWhite   ${
            ar ? "font-arBasic font-extrabold" : "font-heavyFont"
          }   mt-[30%] md:mt-[15%] -translate-y-[50%]`}>
          {tHome("Name")}
        </h1>
        <Description />
      </div>
    </main>
  );
}

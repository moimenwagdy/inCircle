import HomePageBackGround from "../components/Home/BackGround/HomePageBackGround";
import Description from "../components/Home/Description/Description";
import MainHeaderAdress from "../components/Home/MainHeaderAdress/MainHeaderAdress";

export default async function Home() {
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

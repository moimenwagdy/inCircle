import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import MainHomeLanding from "../components/Home/HomeLanding/MainHomeLanding";
import HomePosts from "../components/Home/HomePosts/HomePosts";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const nosession = session === null;
  return <>{nosession ? <MainHomeLanding /> : <HomePosts />}</>;
}

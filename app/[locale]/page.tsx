import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import MainHomeLanding from "../components/Home/HomeLanding/MainHomeLanding";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session?.user._id) {
    redirect("/news");
  }
  return <MainHomeLanding />;
}
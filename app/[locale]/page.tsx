import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import MainHomeLanding from "../components/Home/HomeLanding/MainHomeLanding";
import { redirect } from "@/navigation";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const locale = await getLocale();
  if (session?.user._id) {
    redirect({
      href: "/news",
      locale: locale,
    });
  }
  return <MainHomeLanding />;
}

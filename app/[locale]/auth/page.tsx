import AuthForm from "@/app/components/UserAuthentication/AuthForm";
import { authOptions } from "@/lib/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authenticate with",
  description: "Login or Signup with credentials or google auhentication",
};
const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/");
  }
  return (
    <main className=" dark:text-white ">
      <AuthForm />
    </main>
  );
};

export default page;

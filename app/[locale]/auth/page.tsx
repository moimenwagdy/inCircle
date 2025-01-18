import AuthForm from "@/app/components/UserAuthentication/AuthForm";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

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

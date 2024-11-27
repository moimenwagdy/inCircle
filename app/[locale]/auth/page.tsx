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
    <main className="relative dark:text-white ">
      <Image
        className="absolute w-full max-h-full -z-10 opacity-50 dark:opacity-100 rotate-90 md:rotate-0 scale-125 md:scale-100 top-32 md:top-auto"
        priority
        width={1000}
        height={1}
        alt="dsd"
        src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60.png?alt=media&token=53dab48f-dcc0-4a5a-bc3e-1a8ccbb22243"
      />
      <AuthForm />
    </main>
  );
};

export default page;

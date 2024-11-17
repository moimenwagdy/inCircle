import AuthForm from "@/app/components/UserAuthentication/AuthForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative dark:text-white ">
      <Image
        className="absolute w-full max-h-full -z-10 opacity-50 dark:opacity-100 rotate-90 md:rotate-0 scale-125 md:scale-100 top-32 md:top-auto"
        priority
        width={1000}
        height={1}
        alt="dsd"
        src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60.png?alt=media&token=53dab48f-dcc0-4a5a-bc3e-1a8ccbb22243"
      />
      <AuthForm />
    </div>
  );
};

export default page;

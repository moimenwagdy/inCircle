import Image from "next/image";
import { ReactNode } from "react";
import authBackground from "@/public/backgrounds/initialBG.webp";
const FormContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="relative mt-10 bg-white/50 dark:bg-white/5 flex justify-center items-center mx-auto overflow-hidden">
      <Image
        className="fixed md:inset-0 min-w-full -z-20 opacity-10 dark:opacity-50 rotate-90 md:rotate-0 "
        priority
        width={2000}
        height={2000}
        alt="authBG"
        src={authBackground}
      />
      {children}
    </section>
  );
};

export default FormContainer;

import Image from "next/image";
import { ReactNode } from "react";
import authBackground from "@/public/backgrounds/initialBG.webp";
const FormContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="relative  mt-10  flex justify-center items-center mx-auto overflow-hidden">
      <Image
        className="fixed right-0 md:inset-0 min-w-full min-h-full -z-20 opacity-50 dark:opacity-50 rotate-90 md:rotate-0 "
        priority
        width={1000}
        height={1}
        alt="dsd"
        src={authBackground}
      />
      {children}
    </section>
  );
};

export default FormContainer;

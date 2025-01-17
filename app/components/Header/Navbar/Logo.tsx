import { useRouter } from "@/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <Image
      className="z-50  w-16 h-16 cursor-pointer mx-10 ring-8 rounded-full ring-offWhite dark:ring-black"
      alt="Logo"
      src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/finalLogoLarg.png?alt=media&token=5bdeac30-cffb-49dd-b563-efe419592ff7"
      width={1000}
      height={1000}
      onClick={handleNavigation}
    />
  );
};

export default Logo;

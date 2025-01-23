import Image from "next/image";
import initialBG from "@/public/backgrounds/initialBG.webp";
const DocumentBG = () => {
  return (
    <Image
      priority
      src={initialBG}
      width={900}
      height={900}
      alt="mainBG"
      className="fixed w-full  opacity-[.07] dark:opacity-40 h-full -z-10 "
    />
  );
};
export default DocumentBG;

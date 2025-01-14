import Image from "next/image";
const DocumentBG = () => {
  return (
    <Image
      priority
      src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2FinitialBG.webp?alt=media&token=7cf79f80-5870-493a-a6be-351369685de0"
      width={5000}
      height={5000}
      alt="mainBG"
      className="fixed min-h-full min-w-full -top-2 opacity-[.07]  dark:opacity-40 -z-10 "
    />
  );
};
export default DocumentBG;

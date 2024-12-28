import Image from "next/image";
const DocumentBG = () => {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60.png?alt=media&token=53dab48f-dcc0-4a5a-bc3e-1a8ccbb22243"
      width={2000}
      height={2000}
      alt="sda"
      className="absolute min-h-full w-full opacity-10  dark:opacity-40 -z-10 "
    />
  );
};

export default DocumentBG;

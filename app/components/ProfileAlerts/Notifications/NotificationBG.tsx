import Image from "next/image";
import React from "react";

const NotificationBG = () => {
  return (
    <Image
      className="absolute max-w-full top-0 left-0 opacity-50"
      alt="bg"
      width={1000}
      height={1000}
      src="https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60.png?alt=media&token=53dab48f-dcc0-4a5a-bc3e-1a8ccbb22243"
    />
  );
};

export default NotificationBG;

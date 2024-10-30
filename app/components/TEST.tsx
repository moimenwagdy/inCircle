import { signIn } from "next-auth/react";
import React from "react";

const TEST = () => {
  return (
    <button
      onClick={() => {
        signIn("credentials", {
          email: "moimenwy@gmail.com",
          password: "1144026772",
        });
      }}>
      Login
    </button>
  );
};

export default TEST;

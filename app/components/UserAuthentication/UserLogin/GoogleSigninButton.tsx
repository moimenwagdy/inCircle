import { signIn } from "next-auth/react";
import Button from "../../Buttons/Button";

const GoogleSigninButton = () => {
  return (
    <div className="w-72">
      <Button
        color="blue"
        dir={-1}
        onclick={() => {
          signIn("google");
        }}>
        signIn with
        <span className=" ms-2 space-x-[1px] rounded bg-white/50 px-1">
          <span className=" text-[#4285F4]">G</span>
          <span className=" text-[#DB4437]">o</span>
          <span className=" text-[#F4B400]">o</span>
          <span className=" text-[#4285F4]">g</span>
          <span className=" text-[#0F9D58]">l</span>
          <span className="text-[#DB4437]">e</span>
        </span>
      </Button>
    </div>
  );
};

export default GoogleSigninButton;

import React, { ChangeEvent, ReactNode } from "react";

const LoginInput: React.FC<{
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  type: string;
}> = ({ onChange, placeholder, children, type }) => {
  return (
    <div className="flex gap-y-2 justify-between flex-col ">
      <label className="text-sm">{children}</label>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="outline outline-1 outline-black ps-4 placeholder:text-xs py-1 w-full  md:w-2/4"
      />
    </div>
  );
};

export default LoginInput;

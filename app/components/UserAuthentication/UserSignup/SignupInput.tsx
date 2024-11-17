import React from "react";

const SignupInput: React.FC<{
  name: string;
  type: string;
  placeholder?: string;
  text?: string;
  id: string;
  defaultValue?: string;
  className?: string;
  error?: string;
}> = ({
  id,
  name,
  type,
  className,
  defaultValue,
  placeholder,
  text,
  error,
}) => {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="w-full flex justify-between gap-x-3">
        <label className="font-basicFont" htmlFor={id}>
          {text}
        </label>
        <input
          key={name}
          name={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`placeholder:font-descripFont ps-4 py-1 placeholder:text-xs ${
            className ? className : ""
          }`}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 dark:text-red-200">{error}</p>
      )}
    </div>
  );
};
export default SignupInput;

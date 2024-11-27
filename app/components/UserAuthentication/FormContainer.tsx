import React, { ReactNode } from "react";

const FormContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className=" dark:bg-offWhite/5 mt-10 container mx-auto  ps-4 pe-4 pt-4 sm:ps-0 sm:pe-0 flex flex-col gap-y-8 md:flex-row justify-center items-center md:gap-x-24 md:gap-y-0 ">
      {children}
    </section>
  );
};

export default FormContainer;

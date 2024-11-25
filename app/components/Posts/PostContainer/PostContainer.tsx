import React, { ReactNode } from "react";

const PostsContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    // <main className="w-4/5 sm:w-3/4 md:w-1/2 lg:w-2/5 mx-auto dark:text-white space-y-6 ">
    //   {children}
    // </main>
    <main className="w-full mx-auto dark:text-white space-y-6 ">
      {children}
    </main>
  );
};

export default PostsContainer;

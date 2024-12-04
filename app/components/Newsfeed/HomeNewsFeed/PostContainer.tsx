import React, { ReactNode } from "react";

const PostsContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="w-full mx-auto dark:text-white">{children}</main>;
};

export default PostsContainer;

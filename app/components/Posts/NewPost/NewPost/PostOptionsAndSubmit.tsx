import React from "react";
import PostAdditionOptions from "./PostAdditionOptions";
import PostSubmitButton from "./PostSubmitButton";

const PostOptionsAndSubmit = () => {

  return (
    <div className=" w-full flex justify-between">
      <PostAdditionOptions />
      <PostSubmitButton/>
    </div>
  );
};

export default PostOptionsAndSubmit;

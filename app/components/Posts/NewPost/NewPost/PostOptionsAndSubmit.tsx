import React from "react";
import PostAdditionOptions from "./PostAdditionOptions";
import Button from "@/app/components/Buttons/Button";

const PostOptionsAndSubmit = () => {
  return (
    <div className=" w-full flex justify-between">
      <PostAdditionOptions />
      <div className=" w-12 ">
        <Button dir={-1} color="black" submittButton>
          Post
        </Button>
      </div>
    </div>
  );
};

export default PostOptionsAndSubmit;

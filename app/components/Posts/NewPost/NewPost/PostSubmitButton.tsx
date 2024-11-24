import Button from "@/app/components/Buttons/Button";
import React from "react";
import { useFormStatus } from "react-dom";

const PostSubmitButton = () => {
  const state = useFormStatus();

  return (
    <div className=" w-12 ">
      <Button dir={-1} color="black" submittButton>
        {state.pending ? "Posting" : "Post"}
      </Button>
    </div>
  );
};

export default PostSubmitButton;

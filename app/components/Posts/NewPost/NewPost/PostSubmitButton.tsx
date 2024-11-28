import Button from "@/app/components/Buttons/Button";
import React from "react";
import { useFormStatus } from "react-dom";

const PostSubmitButton = () => {
  const state = useFormStatus();

  return (
    <div className="min-w-2 ms-auto">
      <Button dir={-1} color="black" submittButton>
        {state.pending ? "Posting" : "Post"}
      </Button>
    </div>
  );
};

export default PostSubmitButton;

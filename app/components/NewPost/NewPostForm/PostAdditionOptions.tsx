import React from "react";
import PostImageUploader from "../PostImageUploader/PostImageUploader";
import EmojiSelections from "../EmojiSelections/EmojiSelections";
import FeelingsSelections from "../FeelingsSelections/FeelingsSelections";
import PostSubmitButton from "./PostSubmitButton";

const PostAdditionOptions = () => {
  return (
    <div className=" w-full flex gap-x-2 justify-start max-h-6">
      <div className="self-start">
        <PostImageUploader />
      </div>
      <div className="z-20 w-7">
        <EmojiSelections />
      </div>
      <div className="z-10 ">
        <FeelingsSelections />
      </div>
      <PostSubmitButton />
    </div>
  );
};
export default PostAdditionOptions;

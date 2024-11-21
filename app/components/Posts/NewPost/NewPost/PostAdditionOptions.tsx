import React from "react";
import PostImageUploader from "../PostImageUploader/PostImageUploader";
import EmojiSelections from "../EmojiSelections/EmojiSelections";
import FeelingsSelections from "../FeelingsSelections/FeelingsSelections";

const PostAdditionOptions = () => {
  return (
    <div className=" w-full flex gap-x-2 justify-start max-h-6">
      <div className="self-start">
        <PostImageUploader />
      </div>
      <div className="z-10 w-7">
        <EmojiSelections />
      </div>
      <div className="z-0 ">
        <FeelingsSelections />
      </div>
    </div>
  );
};

export default PostAdditionOptions;

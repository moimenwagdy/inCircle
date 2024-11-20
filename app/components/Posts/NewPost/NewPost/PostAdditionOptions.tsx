import React from "react";
import PostImageUploader from "../PostImageUploader/PostImageUploader";
import EmojiSelections from "../EmojiSelections/EmojiSelections";
import FeelingsSelections from "../Feelings/FeelingsSelections";

const PostAdditionOptions = () => {
  return (
    <div className=" w-full flex gap-x-2 h-6">
      <div className="">
        <PostImageUploader />
      </div>
      <div className="  ">
        <EmojiSelections />
      </div>
      <div className=" ">
        <FeelingsSelections />
      </div>
    </div>
  );
};

export default PostAdditionOptions;

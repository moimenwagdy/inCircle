
import React from "react";
import PostImageSlider from "./PostImageSlider";

const PostContent: React.FC<{ content: string; postMedia: string[] }> = ({
  content,
  postMedia,
}) => {
  const postContainsImages = postMedia.length > 0;
  return (
    <article className="w-full ">
      <h3 dangerouslySetInnerHTML={{ __html: content }}></h3>
      {postContainsImages && <PostImageSlider imgURLs={postMedia} />}
    </article>
  );
};

export default PostContent;

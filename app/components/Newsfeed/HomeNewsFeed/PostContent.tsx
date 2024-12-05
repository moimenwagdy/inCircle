import React from "react";
import PostImageSlider from "./PostImageSlider";

const PostContent: React.FC<{ content: string; postMedia: string[] }> = ({
  content,
  postMedia,
}) => {
  const postContainsImages = postMedia.length > 0;
  return (
    <article className="w-full space-y-2">
      <p
        className="ps-2 first-letter:capitalize"
        dangerouslySetInnerHTML={{ __html: content }}></p>
      {postContainsImages && <PostImageSlider imgURLs={postMedia} />}
    </article>
  );
};

export default PostContent;

import { isArabic } from "@/lib/isAr";
import PostImageSlider from "./PostImageSlider";
import { useState } from "react";

const PostContent: React.FC<{ content: string; postMedia: string[] }> = ({
  content,
  postMedia,
}) => {
  const [showFullContent, setShowFullContent] = useState<boolean>(false);
  const postContainsImages = postMedia.length > 0;
  const isAR = isArabic(content);
  const handleShowFullContent = () => {
    setShowFullContent((prv) => !prv);
  };
  return (
    <article onClick={handleShowFullContent} className="min-w-full space-y-4">
      <p
        className={` -mb-2 ps-2 first-letter:capitalize ${
          isAR ? "text-sm" : ""
        } ${showFullContent ? "" : "line-clamp-2"} `}
        dangerouslySetInnerHTML={{ __html: content }}></p>
      {postContainsImages && <PostImageSlider imgURLs={postMedia} />}
    </article>
  );
};

export default PostContent;

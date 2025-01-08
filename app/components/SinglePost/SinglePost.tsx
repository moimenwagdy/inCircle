import Post from "../Newsfeed/Posts/Post";
import { getSinglePost } from "./functions/getSinglePost";

const SinglePost: React.FC<{ postID: string }> = async ({ postID }) => {
  const result = await getSinglePost(postID);

  return (
    <div className="w-full">
      {result?.success && <Post post={result.post} />}
    </div>
  );
};
export default SinglePost;

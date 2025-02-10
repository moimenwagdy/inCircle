import Post from "../Newsfeed/Posts/Post";
import { getSinglePost } from "./functions/getSinglePost";

const SinglePost: React.FC<{ postID: string }> = async ({ postID }) => {
  const result = await getSinglePost(postID);


  return (
    <section className="w-full">
      {result?.success && <Post post={result.post} />}
    </section>
  );
};
export default SinglePost;

import PostsContainer from "../../PostsContainer/PostsContainer";

const PostLoading = () => {
  const arr = [1, 2, 3, 4];
  return (
    <PostsContainer>
      <ul className="w-full space-y-6 h-[500px]">
        {arr.map((ele) => {
          return (
            <li
              key={ele}
              className="w-full flex flex-col gap-y-1 animate-pulse">
              <div className="ring-[1px] ring-black/5 dark:ring-white/5 py-6 px-6 h-full min-h-[500px] space-y-3">
                <div className="w-full h-14 bg-black/5 "></div>
                <div className="w-full h-[500px] bg-black/5 "></div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-14 h-4 bg-black/5"></div>
                <div className="w-14 h-4 bg-black/5"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </PostsContainer>
  );
};

export default PostLoading;

import { useUserName } from "@/app/glopalCustomHooks/useUserName";

const PostTextContentInput = () => {
  const userName = useUserName();
  return (
    <div className="w-full">
      <textarea
        id="new-post"
        name="newPost"
        rows={3}
        placeholder={`What's on your mind ${userName && userName} ?`}
        className="placeholder:text-sm w-full resize-none p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blueColor focus:border-blueColor"
      />
    </div>
  );
};
export default PostTextContentInput;

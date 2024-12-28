"use client";
import TimePrint from "@/app/components/TimePrint/TimePrint";
import { message } from "@/globalTypes/globalTypes";
import { useAppSelector } from "@/store/reduxHooks";
const ChatContentMessage: React.FC<{ message: message; isMe: boolean }> = ({
  message,
  isMe,
}) => {
  const chatUsersData = useAppSelector(
    (state) => state.MessagingSlice.participantsData
  );
  const user = chatUsersData.find((user) => {
    return user._id === message.senderID;
  });
  return (
    <li className={`max-w-[75%] w-fit ${isMe ? "self-start " : "self-end "}`}>
      <p className="text-xs px-1 capitalize dark:text-white">
        {user?.username}
      </p>
      <p
        className={`min-w-20 w-fit first-letter:capitalize font-descripFont text-xs py-1 ${
          isMe
            ? " bg-redColor/50 dark:bg-redColor/90 dark:font-medium    "
            : " bg-blueColor/50 dark:bg-blueColor/90 dark:font-medium "
        } pe-4 ps-2 rounded-md dark:text-white`}>
        {message.content}
      </p>
      <div
        className={` ${
          isMe ? "text-start" : "text-end"
        } w-full px-2 -mt-[2px] text-black/50 dark:text-white/50 text-[2px]`}>
        <TimePrint createdAt={message.createdAt.toString()} />
      </div>
    </li>
  );
};
export default ChatContentMessage;

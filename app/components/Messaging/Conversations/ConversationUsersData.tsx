import { participant } from "@/globalTypes/globalTypes";
import UserImage from "../../UserImage/UserImage";

const ConversationUsersData: React.FC<{ participants: participant[] }> = ({
  participants,
}) => {
  return (
    <ul className="flex flex-row-reverse w-full rounded-md gap-x-1 overflow-x-auto  scrollbar-thin scrollbar-thumb-redColor scrollbar-track-transparent py-1">
      {participants?.map((participant) => {
        return (
          <li
            key={participant.username}
            className="text-black dark:text-white min-w-fit bg-black/5 dark:bg-white/5 rounded-md py-1 px-2">
            <div className="flex justify-end items-center gap-x-2 w-full">
              <p className="text-xs capitalize min-w-fit">
                {participant.username}
              </p>
              <div className="relative w-fit h-fit">
                <UserImage
                  src={participant.profile.avatar}
                  alt={participant.username}
                  userName={participant.username}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ConversationUsersData;

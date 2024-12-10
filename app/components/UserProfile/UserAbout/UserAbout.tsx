import { user } from "@/globalTypes/globalTypes";
import getUserProfileData from "../functions/getUserProfileData";
import UserAboutItem from "./UserAboutItem";

const UserAbout: React.FC<{ userID: string }> = async ({ userID }) => {
  const data: user = await getUserProfileData(userID);
  const joinedAt = new Date(data.createdAt).toLocaleString("us-en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const age = data.age.toString();
  data.verified = true;
  return (
    <section className="flex flex-col justify-center items-start gap-y-1 mx-auto mt-4 w-fit">
      <UserAboutItem label="User name :" value={data.username} />
      <div className="flex gap-x-2">
        <UserAboutItem label="E-mail :" value={data.email} />
        {data.verified ? (
          <p className="text-green-600 text-xs">Verified</p>
        ) : (
          <p className="text-xs text-red-600">Not Verified</p>
        )}
      </div>
      <UserAboutItem label="Age :" value={age} />
      <UserAboutItem label="Joined At :" value={joinedAt} />
      <UserAboutItem label="Gender :" value={data.gender} />
      <UserAboutItem label="Status :" value={data.status} />
    </section>
  );
};
export default UserAbout;

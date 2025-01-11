import { user } from "@/globalTypes/globalTypes";
import getUserProfileData from "../functions/getUserProfileData";
import UserAboutItem from "./UserAboutItem";
import { getLocale, getTranslations } from "next-intl/server";

const UserAbout: React.FC<{ userID: string }> = async ({ userID }) => {
  const data: user = await getUserProfileData(userID);
  const joinedAt = new Date(data.createdAt).toLocaleString("us-en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const age = data.age.toString();
  const tProfile = await getTranslations("profile");
  const locale = await getLocale();
  const isAr = locale === "ar";
  return (
    <section
      dir={`${isAr ? "rtl" : "ltr"}`}
      className="flex flex-col justify-center items-start gap-y-1 mx-auto mt-6 w-fit dark:text-white">
      <UserAboutItem
        label={`${tProfile("userName")} :`}
        value={data.username}
      />
      <div className="flex gap-x-2">
        <UserAboutItem label={`${tProfile("email")} :`} value={data.email} />
        {data.verified ? (
          <p className="text-green-600 text-xs">{tProfile("verfied")}</p>
        ) : (
          <p className="text-xs text-red-600">{tProfile("notVerified")}</p>
        )}
      </div>
      <UserAboutItem label={`${tProfile("age")} :`} value={age} />
      <UserAboutItem label={`${tProfile("joinedAt")} :`} value={joinedAt} />
      <UserAboutItem label={`${tProfile("gender")} :`} value={data.gender} />
      <UserAboutItem label={`${tProfile("status")} :`} value={data.status} />
    </section>
  );
};
export default UserAbout;

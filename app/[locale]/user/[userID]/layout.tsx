import LoadingNormalIndicator from "@/app/components/LoadingNormalIndicator/LoadingNormalIndicator";
import getUserProfileData from "@/app/components/UserProfile/functions/getUserProfileData";
import ProfileNavbar from "@/app/components/UserProfile/ProfileNavbar/ProfileNavbar";
import UserProfile from "@/app/components/UserProfile/UserProfile";
import { user } from "@/globalTypes/globalTypes";
import { getLocale } from "next-intl/server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { userID: string };
}) => {
  const { userID } = params;
  const response: user = await getUserProfileData(userID);
  const locale = await getLocale();
  const { username, gender, status, email, age, profile } = response;

  return {
    title: `Profile of ${username} | inCircle`,
    description: `Discover ${username}'s profile on inCircle. Connect, chat, and share moments. Age: ${age}, Email: ${email.slice(
      0,
      4
    )}****${email.slice(8)}, Marital Status: ${status}, Gender: ${gender}.`,
    keywords: `inCircle, ${username}, social media, user profile, connect, chat, ${gender}, ${status}, new friends, posts, folloing, followers `,
    openGraph: {
      type: "profile",
      title: `${username} | inCircle`,
      description: `Connect with ${username} on inCircle. Age: ${age}, Email: ${email.slice(
        0,
        4
      )}****${email.slice(8)}, Marital Status: ${status}, Gender: ${gender}.`,
      images: [
        {
          url: profile.avatar || "/default-profile.png",
          alt: `Profile picture of ${username}`,
        },
      ],
      url: `https://in-circle-iota.vercel.app/${locale}/user/${userID}`,
      site_name: "inCircle",
    },
    twitter: {
      card: "summary_large_image",
      title: `${username} | inCircle`,
      description: `Meet ${username} on inCircle. Age: ${age}, Email: ${email.slice(
        0,
        4
      )}****${email.slice(8)}, Marital Status: ${status}, Gender: ${gender}.`,
      images: [profile.avatar || "/default-profile.png"],
    },
    alternates: {
      canonical: `https://in-circle-iota.vercel.app/${locale}/user/${userID}`,
    },
  };
};

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) => {
  return (
    <main>
      <Suspense
        fallback={
          <LoadingNormalIndicator className="min-h-64 flex justify-center items-center" />
        }>
        <UserProfile userID={params.userID} />
      </Suspense>
      <ProfileNavbar userID={params.userID} />
      {children}
    </main>
  );
};

export default layout;

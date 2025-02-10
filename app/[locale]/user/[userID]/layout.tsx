import LoadingNormalIndicator from "@/app/components/LoadingNormalIndicator/LoadingNormalIndicator";
import getUserProfileData from "@/app/components/UserProfile/functions/getUserProfileData";
import ProfileNavbar from "@/app/components/UserProfile/ProfileNavbar/ProfileNavbar";
import UserProfile from "@/app/components/UserProfile/UserProfile";
import { getAllPosts } from "@/lib/getAllPosts";
import { getAllUsers } from "@/lib/getAllUsers";
import React, { Suspense } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { userID: string };
}) => {
  const { userID } = params;
  const response = await getUserProfileData(userID);
  if (!response || response.success === false) {
    return { title: "User Not Found | inCircle" };
  }
  const { username, gender, status, email, age, profile } = response;

  return {
    title: `${username} Profile`,
    description: `Discover ${username}'s profile on inCircle. Connect, chat, and share moments. Age: ${age}, Email: ${email.slice(
      0,
      4
    )}****${email.slice(8)}, Marital Status: ${status}, Gender: ${gender}.`,
    keywords: `inCircle, ${username}, social media, user profile, connect, chat, ${gender}, ${status}, new friends, posts, following, followers, message `,
    openGraph: {
      title: `${username} Profile`,
      description: `Connect with ${username} on inCircle. Age: ${age}, Email: ${email.slice(
        0,
        4
      )}****${email.slice(8)}, Marital Status: ${status}, Gender: ${gender}.`,
      type: "profile",
      url: `https://in-circle-iota.vercel.app/en/user/${userID}`,
      site_name: "inCircle",
      images: [{ url: `${profile.avatar}`, width: 1200, height: 630 }],
    },
  };
};

const Layout =  ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userID: string };
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

export default Layout;

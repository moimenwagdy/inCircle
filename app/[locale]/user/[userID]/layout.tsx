import LoadingNormalIndicator from "@/app/components/LoadingNormalIndicator/LoadingNormalIndicator";
import getUserProfileData from "@/app/components/UserProfile/functions/getUserProfileData";
import ProfileNavbar from "@/app/components/UserProfile/ProfileNavbar/ProfileNavbar";
import UserProfile from "@/app/components/UserProfile/UserProfile";
import { user } from "@/globalTypes/globalTypes";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { userID: string };
}) => {
  const { userID } = params;
  const response: user = await getUserProfileData(userID);
  return { title: response.username };
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

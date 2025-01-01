import LoadingNormalIndicator from "@/app/components/LoadingNormalIndicator/LoadingNormalIndicator";
import ProfileNavbar from "@/app/components/UserProfile/ProfileNavbar/ProfileNavbar";
import UserProfile from "@/app/components/UserProfile/UserProfile";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";
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

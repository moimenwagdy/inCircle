import LoadingNormalIndicator from "@/app/components/LoadingNormalIndicator/LoadingNormalIndicator";
import UserFollowers from "@/app/components/UserProfile/UserFollowers/UserFollowers";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";

const page = ({ params }: { params: Params }) => {
  return (
    <Suspense fallback={<LoadingNormalIndicator className="mt-16"/>}>
      <UserFollowers userID={params.userID} />;
    </Suspense>
  );
};

export default page;

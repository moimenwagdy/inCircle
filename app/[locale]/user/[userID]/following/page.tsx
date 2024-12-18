import LoadingNormalIndicator from "@/app/components/LoadingNormalIndicator/LoadingNormalIndicator";
import UserFollowing from "@/app/components/UserProfile/UserFollowing/UserFollowing";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";

const page = ({ params }: { params: Params }) => {
  return (
    <Suspense fallback={<LoadingNormalIndicator className="mt-16"/>}>
      <UserFollowing userID={params.userID} />;
    </Suspense>
  );
};
export default page;

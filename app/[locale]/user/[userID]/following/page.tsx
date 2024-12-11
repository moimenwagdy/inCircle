import UserFollowing from "@/app/components/UserProfile/UserFollowing/UserFollowing";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const page = ({ params }: { params: Params }) => {
  return <UserFollowing userID={params.userID} />;
};
export default page;
import UserFollowers from "@/app/components/UserProfile/UserFollowers/UserFollowers";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const page = ({ params }: { params: Params }) => {
  return <UserFollowers userID={params.userID} />;
};

export default page;

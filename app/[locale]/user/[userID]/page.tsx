import UserProfile from "@/app/components/UserProfile/UserProfile";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const page = ({ params }: Params) => {
  return <UserProfile userID={params.userID} />;
};

export default page;

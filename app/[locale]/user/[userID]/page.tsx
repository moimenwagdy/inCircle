import UserProfile from "@/app/components/UserProfile/UserProfile";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const Page = ({ params }: { params: Params }) => {
  return <UserProfile userID={params.userID} />;
};

export default Page;

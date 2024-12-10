import UserAbout from "@/app/components/UserProfile/UserAbout/UserAbout";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const Page = ({ params }: { params: Params }) => {
  return <UserAbout userID={params.userID} />;
};

export default Page;

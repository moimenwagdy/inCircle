import UserProfilePosts from "@/app/components/UserProfile/UserPosts/UserPosts";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const page = async ({ params }: { params: Params }) => {
  return (
    <main className="w-full px-2 sm:px-20 md:px-0 md:w-4/6 lg:w-[45%] mx-auto mt-20">
      <UserProfilePosts userID={params.userID} />
    </main>
  );
};

export default page;

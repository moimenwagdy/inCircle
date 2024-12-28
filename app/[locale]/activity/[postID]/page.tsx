import SinglePost from "@/app/components/SinglePost/SinglePost";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";

const page = ({ params }: { params: Params }) => {
  return (
    <main className="mt-20 w-[98%] mx-auto sm:w-3/4 md:w-1/2 lg:w-1/2 dark:text-white">
      <Suspense fallback={<p>Loading</p>}>
        <SinglePost postID={params.postID} />
      </Suspense>
    </main>
  );
};

export default page;

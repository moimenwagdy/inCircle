import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

const FriendSuggetions = async () => {
  const session = await getServerSession(authOptions);

  const response = await fetch(`${apiURL}/users/friendSugg`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentUserId: session?.user._id }),
  });

  const result = await response.json();
  console.log(result);
  return (
    <ul>
      {result &&
        result.map((result: any) => {
          return (
            <li key={result._id}>
              <div className="flex gap-x-2 justify-between items-center">
                <h2>{result.username}</h2>
                <Image
                  src={result.profile.avatar}
                  alt={result.username}
                  width={300}
                  height={1}
                  className="w-14"
                />
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default FriendSuggetions;

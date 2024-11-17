// "use client";
// import { useRouter } from "next/router";

// export default function AuthError() {
//   const router = useRouter();
//   const { error } = router.query;

//   const errorMessage =
//     error === "NoUserFound"
//       ? "No user found with that email."
//       : error === "InvalidPassword"
//       ? "Incorrect password. Please try again."
//       : "An unknown error occurred.";

//   return (
//     <div>
//       <h1>Sign In Error</h1>
//       <p style={{ color: "red" }}>{errorMessage}</p>
//       <button onClick={() => router.push("/auth/signin")}>
//         Back to Sign In
//       </button>
//     </div>
//   );
// }

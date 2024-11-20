import { signIn } from "next-auth/react";

export const handleSignIn = async (email: string, password: string) => {
  const response = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (response?.error) {
    console.error("Error:", response.error);
    return { success: false, error: response.error };
  }

  if (response?.ok) {
    return { success: true };
  }
};

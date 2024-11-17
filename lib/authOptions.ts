import { NextAuthOptions } from "next-auth";
import googlProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import { user } from "@/globalTypes/globalTypes";

import bcrypt from "bcryptjs";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

const googleID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
const googleSecret = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string;

export const authOptions: NextAuthOptions = {
  providers: [
    googlProvider({
      clientId: googleID,
      clientSecret: googleSecret,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "password", type: "password" },
      },
      type: "credentials",

      authorize: async (credentials, req) => {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }

        const client = await MongoClient.connect(mongoCredentials!);
        const db = client.db("socialApp");

        const user: user | null = await db
          .collection("users")
          .findOne<user>({ email: credentials.email });
        if (!user) {
          client.close();

          return null;
        }
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (!isPasswordCorrect) {
          client.close();
          return null;
        }

        client.close();
        return {
          id: user._id.toString(),
          name: user.username,
          email: user.email,
          profile: user.profile,
          following: user.following,
          followers: user.followers,
          createdAt: user.createdAt,
          age: user.age,
          verified: user.verified,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const customUser = user as unknown as user;
      if (user) {
        token._id = customUser._id;
        token.username = customUser.username;
        token.email = customUser.email;
        token.profile = customUser.profile;
        token.following = customUser.following;
        token.followers = customUser.followers;
        token.createdAt = customUser.createdAt;
        token.age = customUser.age;
        token.verified = customUser.verified;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token.id as string;
        session.user.username = token.name as string;
        session.user.email = token.email as string;
        session.user.profile = token.profile as { bio: string; avatar: string };
        session.user.following = token.following as string[];
        session.user.followers = token.followers as string[];
        session.user.createdAt = token.createdAt as Date;
        session.user.age = token.age as number;
        session.user.verified = token.verified as boolean;
      }
      return session;
    },
    redirect: async () => {
      return "/";
    },
  },
};

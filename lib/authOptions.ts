import { NextAuthOptions } from "next-auth";
import googlProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import { user } from "@/globalTypes/globalTypes";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

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

      authorize: async (credentials) => {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }

        if (credentials.email.length === 0 || credentials.email === "") {
          throw new Error("enter valid email");
        }
        if (credentials.password.length < 8 || credentials.password === "") {
          throw new Error("Password must be at least 8 characters");
        }
        try {
          if (!credentials) {
            throw new Error("Credentials not provided");
          }
          if (credentials.email.length === 0) {
            throw new Error("enter valid email");
          }
          const client = await MongoClient.connect(mongoCredentials!);
          const db = client.db("socialApp");
          const user: user | null = await db
            .collection("users")
            .findOne<user>({ email: credentials.email });
          if (!user) {
            client.close();
            throw new Error("User not found");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user?.passwordHash!
          );
          if (!isPasswordCorrect) {
            client.close();
            throw new Error("Invalid password");
          }
          revalidatePath("/");
          client.close();
          return {
            id: user?._id.toString()!,
            _id: user?._id.toString()!,
            name: user?.username!,
            email: user?.email!,
            profile: user?.profile!,
            following: user?.following!,
            followers: user?.followers!,
            createdAt: user?.createdAt!,
            age: user?.age!,
            verified: user?.verified!,
          };
        } catch (error) {
          throw new Error("network error, check your connection");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "google") {
        const client = await MongoClient.connect(mongoCredentials!);
        const db = client.db("socialApp");
        const usersCollection = db.collection("users");

        const newUser: any = {
          _id: user.id,
          username: user.name!,
          email: user.email!,
          passwordHash: "googelSignin",
          profile: {
            bio: "",
            avatar: user.image!,
          },
          following: [],
          followers: [],
          createdAt: new Date(),
          age: 0,
          verified: false,
        };

        try {
          const existingUser = await usersCollection.findOne({
            email: user.email,
          });

          if (!existingUser) {
            await usersCollection.insertOne(newUser);
          }
        } catch (error) {
          throw new Error("Database error");
        } finally {
          client.close();
        }
        token._id = user.id;
        token.email = user.email;
        token.profile = { bio: "", avatar: "" };
        token.following = [];
        token.followers = [];
        token.createdAt = 0;
        token.age = 0;
        token.verified = true;

        return token;
      }

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
        session.user._id = token.sub as string;
        session.user._id = token._id as string;
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
  },
};

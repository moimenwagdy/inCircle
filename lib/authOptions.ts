import { NextAuthOptions } from "next-auth";
import googlProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
// import bcrypt from "bcryptjs";

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

        const client = await MongoClient.connect(mongoCredentials!);
        const db = client.db("socialApp");

        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("No user found with the entered email", {});
        }

        client.close();

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Set custom fields on the token
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token.id as string; // Add id to session user
        session.user.name = token.name as string; // Set custom fields on session
        session.user.email = token.email as string;
      }
      return session;
    },
  },
};













// const isPasswordCorrect = await bcrypt.compare(
//   credentials.password,
//   user.password
// );
// if (!isPasswordCorrect) {
//   client.close();
//   throw new Error("Invalid password");
// }

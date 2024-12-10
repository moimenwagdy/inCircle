// next-auth.d.ts
import NextAuth from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      username: string;
      email: string;
      profile: { bio: string; avatar: string };
      following: string[];
      followers: string[];
      createdAt: Date;
      age: number;
      verified: boolean;
      image: string;
      status: string;
      gender: string;
    };
  }
  ff;
}

declare module "next-auth" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string;
    email: string;
    profile: { bio: string; avatar: string };
    following: string[];
    followers: string[];
    createdAt: Date;
    age: number;
    verified: boolean;
    picture?: string;
  }
}

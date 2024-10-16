import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json("from login api route GET METHOD");
};
export const POST = () => {
  return NextResponse.json("from login api route POST METHOD");
};

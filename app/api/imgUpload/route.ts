import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { file, fileName } = await req.json();
    if (!file || !fileName) {
      return NextResponse.json(
        { error: "File or fileName is missing" },
        { status: 400 }
      );
    }
    const storageRef = ref(storage, `images/${fileName}`);
    const fileBuffer = Buffer.from(file, "base64");
   
    await uploadBytes(storageRef, fileBuffer);
    const downloadURL = await getDownloadURL(storageRef);
    return NextResponse.json({ url: downloadURL }, { status: 200 });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}

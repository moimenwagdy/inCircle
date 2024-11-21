import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { files } = await req.json(); // Expecting an array of objects with `file` and `fileName`

    if (!files || !Array.isArray(files) || files.length === 0) {
      return NextResponse.json(
        { error: "No files provided" },
        { status: 400 }
      );
    }

    const uploadResults = [];

    for (const { file, fileName } of files) {
      if (!file || !fileName) {
        uploadResults.push({ fileName, success: false, error: "File or fileName is missing" });
        continue;
      }

      try {
        const storageRef = ref(storage, `images/${fileName}`);
        const fileBuffer = Buffer.from(file, "base64");
        await uploadBytes(storageRef, fileBuffer);
        const downloadURL = await getDownloadURL(storageRef);

        uploadResults.push({ fileName, success: true, url: downloadURL });
      } catch (error) {
        console.error(`Error uploading file ${fileName}:`, error);
        uploadResults.push({ fileName, success: false, error: `Failed to upload ${fileName}` });
      }
    }

    return NextResponse.json({ results: uploadResults }, { status: 200 });
  } catch (error) {
    console.error("Error processing uploads:", error);
    return NextResponse.json(
      { error: "Failed to process uploads" },
      { status: 500 }
    );
  }
}

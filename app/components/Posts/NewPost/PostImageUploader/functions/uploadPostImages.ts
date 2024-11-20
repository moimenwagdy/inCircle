import { postImageUpload } from "@/globalTypes/globalTypes";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

const uploadPostImages = async (
  files: {
    file: string;
    fileName: string;
  }[]
) => {
  const response = await fetch(`${apiURL}/postImageUpload`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ files: files }),
  });
  const data = await response.json();
  return data;
};

export default uploadPostImages;

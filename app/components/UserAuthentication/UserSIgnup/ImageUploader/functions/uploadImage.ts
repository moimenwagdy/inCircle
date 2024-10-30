"use server";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const uploadImage = async (_prvState: any, formData: FormData) => {
  const img = formData.get("img") as File | null;

  if (!img) {
    return { error: "No image file provided" };
  }

  if (!img.type.startsWith("image/")) {
    return { error: "The file must be an image" };
  }

  const fileName = `${Date.now()}-${img.name}`;

  try {
    const arrayBuffer = await img.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    const response = await fetch(`${apiURL}/imgUpload`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName, file: fileBuffer.toString("base64") }), // Convert buffer to base64 string for transport
    });

    if (!response.ok) {
      return { error: "Failed to upload image" };
    }

    const result = await response.json();
    return { success: true, result };
  } catch (error) {
    console.error("Error uploading image:", error);
    return { error: "An unexpected error occurred while uploading the image" };
  }
};

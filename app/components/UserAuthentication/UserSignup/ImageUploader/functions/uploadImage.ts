const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const uploadImage = async (img: File) => {
  console.log("Image upload function triggered");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!img) {
    console.log("no Image");
    return { error: "No image file provided" };
  }

  if (img) {
    const startsWithImagePath = img?.type?.startsWith("image/");
    if (!startsWithImagePath) {
      return { error: "The file must be an image" };
    }
  }
  
  try {
    const arrayBuffer = await img.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);
    const fileName = `${Date.now()}-${img.name}`;

    const response = await fetch(`${apiURL}/imgUpload`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName, file: fileBuffer.toString("base64") }),
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

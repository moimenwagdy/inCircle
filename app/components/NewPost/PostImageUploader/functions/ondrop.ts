import uploadPostImages from "./uploadPostImages";

export const ondrop = async (acceptedFiles: File[]) => {
  const filesArray = await Promise.all(
    acceptedFiles.map(async (file) => {
      const base64File = await fileToBase64(file);
      return {
        file: base64File.split(",")[1],
        fileName: file.name,
      };
    })
  );
  const response = uploadPostImages(filesArray);
  return response;
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

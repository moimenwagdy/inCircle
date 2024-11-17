import { useState } from "react";
import { uploadImage } from "./uploadImage";
import { useDropzone } from "react-dropzone";

type UploadResult = {
  success?: boolean;
  result?: any;
  error?: string;
};
export const useImageUpload = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<UploadResult>();
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "image/*": [] },
      onDrop: async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
          clearTimeout(timer);
        }, 1000);

        try {
          const uploadResult = await uploadImage(file);
          setResult(uploadResult);
        } catch (error) {
          console.error("Upload failed:", error);
          setResult(undefined);
        } finally {
          setLoading(false);
        }
      },
      onDragOver: (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
      },
    });
  return {
    loading,
    formState: result,
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragReject,
  };
};

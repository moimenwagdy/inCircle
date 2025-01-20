"use client";
import React, { useEffect } from "react";
import UploadedImagePreview from "./UploadedImagePreview";
import { useImageUpload } from "./functions/useImageUpload";
import { useTranslations } from "next-intl";

const ImageUploader: React.FC<{ url: (url: string) => void }> = React.memo(
  ({ url }) => {
    const {
      loading,
      formState,
      getInputProps,
      getRootProps,
      isDragAccept,
      isDragReject,
    } = useImageUpload();

    const t_imageUploader = useTranslations("buttons");

    // Update the parent component with the URL only after rendering
    useEffect(() => {
      if (formState?.result?.url) {
        url(formState.result.url as string);
      }
    }, [formState?.result?.url, url]);

    return (
      <section className="">
        <div
          {...getRootProps()}
          className={`z-[100] bg-white/70 dark:bg-black/80 flex flex-col gap-y-3 justify-center items-center h-10 px-4 md:px-0 md:h-80 md:w-80 cursor-pointer border border-black border-dashed 
          ${isDragReject ? "border-red-600 " : ""}
          ${
            isDragAccept
              ? "border-blueColor border-dotted bg-white/100 dark:bg-black"
              : ""
          }`}>
          <input {...getInputProps()} className="h-full w-full" />
          <p className="text-xs">{t_imageUploader("chooseDragImage")}</p>
        </div>
        <aside className="max-h-10 max-w-10 flex flex-col justify-center items-center mt-2 mx-auto">
          {formState?.success && (
            <UploadedImagePreview
              url={formState.result.url}
              key={formState.result.url}
            />
          )}
          {loading && <p>Uploading... </p>}
          {formState?.error && (
            <p className="text-xs text-red-300">{formState.error}</p>
          )}
        </aside>
      </section>
    );
  }
);

ImageUploader.displayName = "ImageUploader";
export default React.memo(ImageUploader);

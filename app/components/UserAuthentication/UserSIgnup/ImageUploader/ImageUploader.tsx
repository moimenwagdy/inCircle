"use client";

import UploadedImagePreview from "./UploadedImagePreview";
import { useImageUpload } from "./functions/useImageUpload";
import { useTranslations } from "next-intl";

const ImageUploader: React.FC<{ url: (url: string) => void }> = ({ url }) => {
  const {
    loading,
    formState,
    dragging,
    handleSelectedImageUpload,
    handleSelectedImageDrag,
    handleDragOver,
    canelDrag,
  } = useImageUpload();

  if (formState && formState.result?.url) {
    url(formState.result.url as string);
  }
  const t_imageUploader = useTranslations("buttons");
  return (
    <section className="relative flex gap-x-3 justify-center items-center">
      <form className=" flex flex-col gap-y-3 justify-center items-center">
        <label
          htmlFor="selIMG"
          className="p-2 bg-gray-600 rouded-full hover:cursor-pointer">
          {t_imageUploader("chooseImage")}
        </label>
        <input
          id="selIMG"
          className="hidden"
          type="file"
          name="img"
          onChange={handleSelectedImageUpload}
          accept="image/*"
          disabled={loading}
        />
        <input
          placeholder={t_imageUploader("dragImage")}
          onDragLeave={canelDrag}
          onDragOver={handleDragOver}
          onDrop={handleSelectedImageDrag}
          className={`    bg-transparent border border-gray-500 mx-auto placeholder:text-center placeholder:text-white  ${
            dragging ? "border-white placeholder:text-white/50 h-60" : "h-20"
          }`}
        />
      </form>
      <aside>
        {formState?.success && (
          <UploadedImagePreview url={formState.result.url} />
        )}
        {formState?.error && <p>{formState.error}</p>}
      </aside>
    </section>
  );
};
export default ImageUploader;

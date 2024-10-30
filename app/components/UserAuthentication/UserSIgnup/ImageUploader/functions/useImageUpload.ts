import { ChangeEvent, useState, DragEvent } from "react";
import { useFormState } from "react-dom";
import { uploadImage } from "./uploadImage";

export const useImageUpload = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formState, FormAction] = useFormState(uploadImage, null);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleSelectedImageUpload = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const formData = new FormData();
    let file = e.target.files?.[0];

    formData.append("img", file!);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      clearTimeout(timer);
    }, 500);
    FormAction(formData);
  };
  const handleSelectedImageDrag = async (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    const formData = new FormData();
    formData.append("img", file!);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      clearTimeout(timer);
    }, 500);
    FormAction(formData);
    setDragging(false);
  };
  const handleDragOver = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDragging(true);
  };
  const canelDrag = () => setDragging(false);
  return {
    loading,
    formState,
    dragging,
    handleSelectedImageUpload,
    handleSelectedImageDrag,
    handleDragOver,
    canelDrag,
  };
};

"use server";
export const newPost = async (_prvState: any, formData: FormData) => {
  const content = formData.get("newPost");
  return { content };
};

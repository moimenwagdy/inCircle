"use client";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import ImageUploader from "./ImageUploader/ImageUploader";
import FormContainer from "../FormContainer";
const Signup = () => {
  const [imgPath, setImagePath] = useState<string>("");
  const url = (url: string) => {
    setImagePath(url);
  };
  return (
    <FormContainer>
      <SignUpForm urlImagePath={imgPath} />
      <ImageUploader url={url} />
    </FormContainer>
  );
};
export default Signup;

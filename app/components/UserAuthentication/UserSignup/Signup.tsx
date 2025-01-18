"use client";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import ImageUploader from "./ImageUploader/ImageUploader";
import FormContainer from "../FormContainer";
const Signup = () => {
  return (
    <FormContainer>
      <SignUpForm />
    </FormContainer>
  );
};
export default Signup;

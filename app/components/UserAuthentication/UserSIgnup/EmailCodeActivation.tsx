"use client";
import { useFormState } from "react-dom";
import { sendEmail } from "../functions/sendEmail";

const EmailForm = () => {
  const [formSate, formAction] = useFormState(sendEmail, null);
  console.log(formSate);
  return (
    <form action={formAction}>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
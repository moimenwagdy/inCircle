"use server";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const sendEmail = async (_prvState: any, formData: any) => {
  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString();
  try {
    const response = await fetch(`${apiURL}/twilio/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "moimenwy@gmail.com", // Replace with your service ID
        subject: "TEST", // Replace with your template ID
        text: "TEST TEST TEST", // Replace with your User ID
      }),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

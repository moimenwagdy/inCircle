"use server";


const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const sendEmail = async (_prvState: any, formData: FormData) => {
  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString();
  const userID = formData.get("userID") as string;

  try {
    const response = await fetch(`${apiURL}/twilio/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID,
        verificationCode,
      }),
    });
    if (!response.ok) {
      return {
        success: false,
        message: "sending failed!, please try again",
      };
    }
    const response_DB = await fetch(`${apiURL}/sendCode/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: userID,
        verificationCode,
      }),
    });
    if (!response_DB.ok) {
      return {
        success: false,
        message: "sending failed, please try again",
      };
    }
    const data = await response.json();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error(error);
  }
};

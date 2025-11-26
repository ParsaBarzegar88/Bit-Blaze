"use server";
import { IVerifyResponse } from "@/app/(public)/(auth)/register/verify/page";

export const UserVerifyNumber = async (
  prevState: IVerifyResponse,
  formData: FormData
): Promise<IVerifyResponse> => {
  const verifyNumber = formData.get("verifyNumber")?.toString();
  const tempUserId = formData.get("tempUserId")?.toString();
  const baseURL = process.env.API_BASE_URL;

  if (!verifyNumber || !tempUserId) {
    return { error: "لطفا کد تأیید و شناسه موقت را وارد کنید", userId: "" };
  }

  try {
    const response = await fetch(`${baseURL}/api/auth/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tempUserId,
        verificationCode: verifyNumber,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        message: data.message || "تأیید کد ناموفق بود",
        userId: "",
      };
    }


    if(data.error) {
      return {
        error: data.error || "لطفا کد تأیید و شناسه موقت را وارد کنید",
        userId: ""    
      }
    }

    return {
      message: data.message || "تأیید با موفقیت انجام شد",
      userId: data.userId || "",
    };
  } catch{
    return { message: "خطای شبکه رخ داده است", userId: "" };
  }
};
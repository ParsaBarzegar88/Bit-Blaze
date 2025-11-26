"use server";
import { IResetVerifyResponse } from "@/app/(public)/(auth)/resetPassword/verifyCode/page";

export const postVerify = async (
  prevState: IResetVerifyResponse,
  formData: FormData,
): Promise<IResetVerifyResponse> => {

  const email = formData.get("email");
  const resetCode = formData.get("resetCode");

  if (!resetCode || typeof resetCode !== "string") {
    return { error: "لطفا یک ایمیل معتبر وارد کنید" };
  }


  if (!resetCode) {
    return { error: "لطفا کد تأیید و شناسه موقت را وارد کنید", resetCode };
  }

  const baseURL = process.env.API_BASE_URL;

  try {
    const response = await fetch(`${baseURL}/api/auth/forgot-password/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, resetCode }),
    });

    const data = await response.json();
    if (!response.ok) {
      return {
        message: data.message || "عملیات با موفقیت انجام نشد",
        resetCode: resetCode
      };
    }

    if (data.error) {
      return {
        error: data.error || "لطفا کد تأیید و شناسه موقت را وارد کنید",
        resetCode: ""
      }
    }

    return {
      message: data.message || "کد با موفقیت ارسال شد",
      resetCode: resetCode
    };
  } catch{
    return { message: "خطای شبکه رخ داده است", };
  }
};
"use server";
import { IResetPasswordResponse } from "@/app/(public)/(auth)/resetPassword/page";

export const PostEmail = async (
  prevState: IResetPasswordResponse,
  formData: FormData,
): Promise<IResetPasswordResponse> => {

    const email = formData.get("email");

      if (!email || typeof email !== "string") {
    return { message: "لطفا یک ایمیل معتبر وارد کنید", email: undefined};
  }


  if (!email) {
    return { error: "لطفا ایمیل خود را وارد کنید", email: "", message:"" };
  }

  const baseURL = process.env.API_BASE_URL;

  try {
    const response = await fetch(`${baseURL}/api/auth/forgot-password/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (!response.ok) {
      return {
        message: data.message || "عملیات با موفقیت انجام نشد",
        email: email,
        error: ""
      };
    }

    if(data.error) {
      return {
        message: "",
        email: "",
        error: "لطفا ایمیل خود را وارد کنید",
      };
    }

    return {
      message: data.message || "کد با موفقیت ارسال شد",
      email: email,
      error: ""
    };
  } catch {
    return { message: "خطای شبکه رخ داده است",  };
  }
};
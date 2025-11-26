"use server";
import { IRegisterResponse } from "@/app/(public)/(auth)/register/page";

export const PostUserEmail = async (
  prevState?: IRegisterResponse,
  formData?: FormData,
  emailValue?: string
): Promise<IRegisterResponse> => {
  let email: string | undefined = undefined;

  if (formData) {
    const emailFromForm = formData.get("email");
    if (typeof emailFromForm === 'string') {
      email = emailFromForm;
    }
  } else if (emailValue) {
    email = emailValue;
  }

  
  const baseURL = process.env.API_BASE_URL;
  
  if (!email) {
    return { error: "لطفا ایمیل خود را وارد کنید", tempUserId: "", message:"" };
  }

  try {
    const response = await fetch(`${baseURL}/api/auth/register`, {
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
        tempUserId: "",
      };
    }
    
    if(data.error) {
      return {
        tempUserId: "",
        error: "لطفا ایمیل خود را وارد کنید",
      };
    }

    return {
      message: data.message || "کد با موفقیت ارسال شد",
      tempUserId: data.tempUserId || "",
      email: email,
    };
  } catch (error) {
    console.error("Error in PostUserEmail:", error);
    return { message: "خطای شبکه رخ داده است", tempUserId: "" };
  }
};
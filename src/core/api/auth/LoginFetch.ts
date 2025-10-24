"use server";

import { ILoginResponse } from "@/app/(public)/(auth)/login/page";
import { cookies } from "next/headers";

export const LoginFetch = async (
  prevState: ILoginResponse,
  formData: FormData,
): Promise<ILoginResponse> => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const baseURL = process.env.API_BASE_URL;

  if (!email || !password) {
    return {
      accessToken: "",
      refreshToken: "",
      error: "لطفاً ایمیل و رمز عبور را وارد کنید",
    };
  }

  const cookieStore = await cookies();

  try {
    const response = await fetch(`${baseURL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok) {
      return {
        accessToken: "",
        refreshToken: "",
        error: data.error || "خطایی در ورود رخ داد",
      };
    }

    if (data.error) {
      return {
        accessToken: "",
        refreshToken: "",
        error: data.error || "نام کاربری یا رمز عبور اشتباه است",
      };
    }

    if (data.accessToken && data.refreshToken) {
      cookieStore.set("accessToken", data.accessToken);
      cookieStore.set("refreshToken", data.refreshToken);
      console.log("Cookies set successfully");
      return {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };
    }

    return {
      accessToken: "",
      refreshToken: "",
      error: "پاسخ سرور نامعتبر است",
    };
  } catch (error) {
    console.error("Error in LoginFetch:", error);
    return {
      accessToken: "",
      refreshToken: "",
      error: "خطایی در ارتباط با سرور رخ داد",
    };
  }
};
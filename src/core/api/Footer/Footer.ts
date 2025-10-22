"use server";

import { IFooterResponse } from "@/app/(public)/layout";

export const FooterFetch = async (
  prevState: IFooterResponse,
  formData: FormData,
): Promise<IFooterResponse> => {
  const title = formData.get("title")?.toString();
  const message = formData.get("message")?.toString();

  const baseURL = process.env.API_BASE_URL;

  if (!title || !message) {
    return {
      error: "لطفاً عنوان و پیام خود را وارد کنید",
      success: false
    };
  }

  try {
    const response = await fetch(`${baseURL}/api/contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        message,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return {
        error: data.error || "خطایی در ورود رخ داد",
        success: false
      };
    }
    if (data.error) {
      return {
        error: data.error || "خطایی در ورود رخ داد",
        success:false
      };
    }
     return {
      success: true,
      error: ""
    };
  } catch{
    return {
      error: "خطایی در ارتباط با سرور رخ داد",
      success: false
    };
  }
};
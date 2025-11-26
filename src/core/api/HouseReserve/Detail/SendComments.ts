"use server";

import { ISendCommentsResponse } from "@/app/(public)/mortgage-rent/[id]/page";
import { cookies } from "next/headers";

export const SendCommentFetch = async (
  prevState: ISendCommentsResponse,
  formData: FormData,
): Promise<ISendCommentsResponse> => {
  const cookieStore = await cookies()
  const token = cookieStore.get('accessToken')?.value
  const houseId = formData.get("houseId")?.toString();
  const userId = formData.get("userId")?.toString();
  const title = formData.get("title")?.toString();
  const caption = formData.get("caption")?.toString();
  const rating = formData.get("rating")?.toString();
  const parentCommentId = formData.get("parentId")?.toString();
  const baseURL = process.env.API_BASE_URL;
  console.log( houseId,
        userId,
        caption,
        rating,
        parentCommentId)
  if (!houseId || !userId || !title || !caption) {
    return {
      error: "لطفاً مقادیر خواسته شده را وارد کنید",
      success: false
    };
  }

  try {
    const response = await fetch(`${baseURL}/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        house_id:houseId,
        user_id:userId,
        title:title,
        caption:caption,
        rating:rating,
        parent_comment_id:parentCommentId
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return {
        error: data.message,
        success: false
      };
    }
    if (data.message) {
      return {
        error: data.message,
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
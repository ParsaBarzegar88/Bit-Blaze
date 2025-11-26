"use server"
import { IComments } from "@/core/types/SellerDashboard/IComment";
import { cookies } from "next/headers"

interface SearchParam {
  page?: string;
  rating?:string
}
export const getAllHouseComments = async (searchParams: SearchParam = {} , sellerId:string):Promise<IComments> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/comments/seller/${sellerId}?page=${searchParams.page ? searchParams.page : 1}&limit=6&sort=created_at&order=DESC${searchParams.rating ? `&rating=${searchParams.rating}` : ""}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

export const getParentComments = async (commentId:string, sellerId:string):Promise<IComments> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/comments/seller/${sellerId}?page=1&limit=10&sort=created_at&order=DESC&parent_comment_id=${commentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
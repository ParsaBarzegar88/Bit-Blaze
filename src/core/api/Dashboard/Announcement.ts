"use server";

import { cookies } from "next/headers";

export const getUserAnnouncements = async (userId:string , searchParam = {}) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/notifications/${userId}?page=1&limit=10&sort=createdAt&order=DESC`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json()
};

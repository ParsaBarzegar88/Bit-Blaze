'use server'
import { cookies } from "next/headers";

export const getAllChats = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/chats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
export const getChatHistory = async (room: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/chats/${room}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

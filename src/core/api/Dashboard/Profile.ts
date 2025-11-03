"use server";
import { cookies } from "next/headers";

export const SendProfileImage = async (picture: FormData) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/users/upload/picture`, {
    method:"PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: picture,
  });
  return res.json()
};
export const UpdateProfileInformation = async (userId: string , firstName:string, lastName:string ,email:string,phoneNumber:string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const fullName = firstName + ' ' + lastName
  const res = await fetch(`${baseURL}/api/users/${userId}`, {
    method:"PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
      fullName,
      firstName,
      lastName,
      phoneNumber
    }),
  });
  const data = await res.json()
  return {
    status: res.status,
    ok: res.ok,
    res:data,
  };
};
export const ProfileChangePassword = async (currentPassword: string , newPassword:string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/users/change-password`, {
    method:"PUT",
    headers: {
      'Content-Type':"application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      currentPassword,
      newPassword,
    }),
  });
  return res.json()
};
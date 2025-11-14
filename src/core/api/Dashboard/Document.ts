"use server";
import { cookies } from "next/headers";

export const uploadContractDocument = async (formData: FormData) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/documents/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const data = await res.json();
  return {
    status: res.status,
    ok: res.ok,
    res:data,
  };
};

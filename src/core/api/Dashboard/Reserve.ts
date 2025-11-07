"use server";
import { cookies } from "next/headers";

interface SearchParam {
  page?: string;
}
export const getUserReserves = async (searchParams: SearchParam = {}) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/bookings?page=${
      searchParams.page ? searchParams.page : 1
    }&limit=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};

export const DeleteUserReserve = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/bookings/${id}`,
    {
      method:"DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};

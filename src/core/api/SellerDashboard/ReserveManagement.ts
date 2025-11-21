"use server";

import { cookies } from "next/headers";
interface SearchParam {
  page?: string;
  reserveType?: string;
}
export const getAllUserReserve = async (
  id: string,
  searchParams: SearchParam = {}
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/bookings/${id}/customers?page=${
      searchParams.page ? searchParams.page : 1
    }&limit=8${
      searchParams.reserveType ? `&status=${searchParams.reserveType}` : ""
    }&sort=created_at&order=ASC`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};
export const AcceptUserReserve = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/bookings/${id}/continue`,
    {
      method:"POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};
export const CancelUserReserve = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/bookings/${id}/cancel`,
    {
      method:"POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};
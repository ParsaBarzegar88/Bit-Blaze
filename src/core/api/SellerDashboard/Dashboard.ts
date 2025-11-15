"use server";
import { cookies } from "next/headers";

export const getDashboardFinance = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/seller/finance/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
export const getMyUserReserve = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/bookings/${id}/customers?page=1&limit=3&sort=created_at&order=ASC`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};
export const getAllUserReserveDashboard = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/bookings/${id}/customers?page=1&limit=3&sort=created_at&order=DESC`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};
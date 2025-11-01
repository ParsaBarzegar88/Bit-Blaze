import { cookies } from "next/headers";

export const getUserDetail = async (userId: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
export const getDashboardSummery = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/dashboard/summary`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
export const getDashboardMarketTrends = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/dashboard/market-trends`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
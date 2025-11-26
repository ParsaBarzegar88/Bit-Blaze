"use server";
import { cookies } from "next/headers";

interface SearchParam {
  page?: string;
  reserveType?: string;
}
export const getAllFavorites = async (searchParams: SearchParam = {}) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/favorites/user?page=${
      searchParams.page ? searchParams.page : 1
    }&limit=5&sort=createdAt&order=DESC`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};

export const RemoveFavoriteHouse = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/favorites/${id}`,
    {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};

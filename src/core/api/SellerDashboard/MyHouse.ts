"use server";
import { cookies } from "next/headers";

interface SearchParam {
  page?: string;
  transaction_type?: string;
  minPrice?: string;
  maxPrice?: string;
}
export const getAllSellerHouses = async (searchParams: SearchParam = {}) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/houses/seller/user?page=${
      searchParams.page ? searchParams.page : 1
    }&limit=5&sort=createdAt&order=DESC&maxPrice=${searchParams?.maxPrice}&minPrice=${searchParams?.minPrice}$transaction_type=${searchParams?.transaction_type}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};

export const DeleteHouseBySeller = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const response = await fetch(`${baseURL}/api/houses/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    }
  )
  return response.json()
}
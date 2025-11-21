"use server"
import { cookies } from "next/headers";

interface SearchParam {
  page?: string;
  reserveType?: string;
}
export const getAllCustomerPayments = async (searchParams: SearchParam = {}) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/seller/finance?${searchParams.reserveType ? `paymentStatus=${searchParams.reserveType}&` : ""
    }page=${searchParams.page ? searchParams.page : 1
    }&limit=6`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json()
};
export const AcceptUserPayment = async (id:string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/payments/${id}/verify`,
    {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json()
};
"use server";
import { ICreatePayment } from "@/core/types/Dashboard/IPayment";
import { cookies } from "next/headers";

interface SearchParam {
  page?: string;
  reserveType?: string;
}
export const getAllPayments = async (searchParams: SearchParam = {}) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/payments?${searchParams.reserveType ? `status=${searchParams.reserveType}&` : ""
    }page=${searchParams.page ? searchParams.page : 1
    }&limit=9&sort=createdAt&order=ASC`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json()
};

export const createPayment = async (paymentData: ICreatePayment) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/payments` , {
    method:"POST",
    headers:{
      'Content-Type':"application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify({
      amount:paymentData.amount,
      description:paymentData.description,
      callbackUrl:paymentData.callbackUrl,
      bookingId:paymentData.bookingId
    })
  })
  const data = await res.json()
  return {
    status: res.status,
    ok: res.ok,
    res:data,
  };
}
export const getPaymentsById = async (id:string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/payments/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json()
};
import { ISendBookingHouseToApi } from "@/core/types/bookingHouse/IBookingHouse";
import { cookies } from "next/headers";

export const sendBookingHouse = async ({data}:ISendBookingHouseToApi) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body:JSON.stringify({
        data
    })
  });
  if(!res.ok){
    throw new Error('Failed To Send Booking House')
  }
  return res.json()
};

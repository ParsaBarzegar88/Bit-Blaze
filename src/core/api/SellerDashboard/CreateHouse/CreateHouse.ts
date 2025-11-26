"use server";

import { ICreateHouse } from "@/core/types/CreateHouse/CreateHouse";
import { cookies } from "next/headers";

export const CreateAHouse = async (houseData: ICreateHouse) => {
  console.log("api", houseData)
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;

  const sendData = {
    title: houseData?.title,
    address: houseData?.address,
    rate: 5,
    price: houseData?.price,
    tags: houseData?.tags,
    capacity: houseData?.capacity,
    location: {
      lat: houseData?.location?.lat,
      lng: houseData?.location?.lng,
    },
    categories: {
      name: houseData?.categories?.name,
    },
    bathrooms: houseData?.bathrooms,
    parking: houseData?.parking,
    rooms: houseData?.rooms,
    yard_type: houseData?.yard_type,
    transaction_type: houseData?.transaction_type,
    caption: houseData?.caption || null,
  };
  const res = await fetch(`${baseURL}/api/houses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(sendData),
  });

  const response = await res.json();

  return {
    response:response,
    ok:res.ok
  };
};

export const UploadPicture = async (id: string, data: FormData) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/houses/upload/photos/${id}`, {
    method:"POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data
  });
  return res.json();
};
"use server"
import { IUpdateHouse } from "@/core/types/UpdateHouse/IUpdateHouse";
import { cookies } from "next/headers";


export const UpdateAHouse = async (HouseId: string = "" , houseData: IUpdateHouse) => {
  console.log("api", houseData)
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;

  const sendData = {
    title: houseData?.title,
    address: houseData?.address,
    rate: 5,
    price: houseData?.price,
    photos: houseData?.photos ?? [""],
    tags: houseData?.tags,
    last_updated: houseData?.last_updated ?? "",
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
    num_comments: houseData?.num_comments ?? 0,
    transaction_type: houseData?.transaction_type,
    caption: houseData?.caption || null,
  };
  const res = await fetch(`${baseURL}/api/houses/${HouseId}`, {
    method: "PUT",
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
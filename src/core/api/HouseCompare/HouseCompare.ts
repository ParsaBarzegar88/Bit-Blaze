"use server";
import { IHouseCompare } from "@/core/types/HouseCompare/IHouseCompare";
import { IHouses } from "@/core/types/LandingPage/IHouses";
import { cookies } from "next/headers";

export const getHouseCompare = async (
  ids: string
): Promise<IHouseCompare[]> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/comparison?ids=${ids}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const getAllHouses = async ():Promise<IHouses> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/houses?page=1&limit=100&order=DESC&sort=last_updated`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};

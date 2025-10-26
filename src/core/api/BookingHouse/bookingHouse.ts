'use server';

import { IBookingData } from "@/core/types/bookingHouse/IBookingHouse";
import { cookies } from "next/headers";

export const sendBookingHouse = async (houseData: IBookingData) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;

  if (!token) {
    throw new Error("No token provided");
  }
  const sendData = {
      houseId: houseData.info.id,
      reservedDates: [
        new Date(houseData.selectedDepartureDay).toISOString(),
        new Date(houseData.selectedReturnDay).toISOString(),
      ],
      traveler_details: houseData.personalInfo.map((person) => ({
        firstName: person.firstName,
        lastName: person.lastName,
        gender: person.gender,
        birthDate: person.birthDate
          ? new Date(person.birthDate).toISOString()
          : "",
        nationalId: person.nationalCode,
      })),
      sharedEmail: houseData.shareEmail,
      sharedMobile: houseData.shareMobile,
  };
  const res = await fetch(`${baseURL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(sendData),
  });
  if (!res.ok) {
    throw new Error(`Failed to send booking`);
  }

  const response = await res.json();

  return response;
};
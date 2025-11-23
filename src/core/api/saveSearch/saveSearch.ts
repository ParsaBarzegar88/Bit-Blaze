"use server";
import { IAddSaveSearch } from "@/core/types/saveSearch/ISaveSearch";
import { cookies } from "next/headers";


export const getSaveSearch = async () => {
    const cookie = await cookies();
    const token = cookie.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/saved-searches`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    return response.json()
}

export const AddSaveSearch = async (data: IAddSaveSearch) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const res = await fetch(`${baseURL}/api/saved-searches`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    const response = await res.json();

    return {
        response: response,
        ok: res.ok
    };
}

export const DeleteSaveSearch = async (id: string) => {
    const cookie = await cookies();
    const token = cookie.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/saved-searches/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    return response.json()
}
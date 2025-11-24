"use server"
import { IAddWishlist, IWishlist } from "@/core/types/wishlist/IWishlist";
import { cookies } from "next/headers";

export const getUserWishlist = async (searchParams?: { [key: string]: string }): Promise<IWishlist> => {
        const cookieStore = await cookies();
        const token = cookieStore.get("accessToken")?.value;

        const baseURL = process.env.API_BASE_URL;
        const page = searchParams?.page || '1';
        const limit = '4';
        
        const response = await fetch(`${baseURL}/api/wishlist?page=${page}&limit=${limit}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        const data = await response.json();
        console.log('Wishlist API Response:', data); 
        return data;
}

export const addToWishlist = async (note: IAddWishlist) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/wishlist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearar ${token}`
        },
        body: JSON.stringify(note)
    })
    const res = await response.json()

    return {
        response: res,
        ok: response.ok
    }
}

export const DeleteWishlist = async (userId: number, houseId: number) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/wishlist/${userId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearar ${token}`
        },
        body: JSON.stringify({
            houseId: houseId
        })
    })
    const res = await response.json();

    return {
        response: res,
        ok: response.ok
    };
}
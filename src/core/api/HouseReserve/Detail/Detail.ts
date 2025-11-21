'use server'
import { IComments } from "@/core/types/HouseReserveDetail/IComments";
import { IHousesDetail } from "@/core/types/HouseReserveDetail/IHousesDetail";
import { IHouses } from "@/core/types/LandingPage/IHouses";

export const getHousesReserveDetail = async (id: string = ""): Promise<IHousesDetail> => {
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/houses/${id}`)

    if (!result.ok) {
        throw new Error('Failed to fetch houses')
    }
    return result.json()
}
export const getHousesForAdvertisement = async ():Promise<IHouses> => {
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/houses?page=1&limit=10&order=DESC`)
    if(!result.ok){
        throw new Error('Failed to fetch houses')
    }
    return result.json()
}
export const getHousesComments = async (houseID:number):Promise<IComments> => {
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/comments?page=1&limit=10&sort=created_at&order=DESC&house_id=${houseID}`)
    if(!result.ok){
        throw new Error('Failed to fetch houses')
    }
    return result.json()
}
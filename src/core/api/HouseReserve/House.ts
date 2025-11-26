import { IHouses } from "@/core/types/LandingPage/IHouses";

export const getHousesReserve = async (
    search: string = "",
    sort: string = "last_updated",
    maxPrice: string = "",
    minPrice: string = "",
    location: string = ""
): Promise<IHouses> => {
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/houses?page=1&limit=200&search=${search}&order=DESC&sort=${sort}&minPrice=${minPrice}&maxPrice=${maxPrice}&location=${location}`)

    if (!result.ok) {
        throw new Error('Failed to fetch houses')
    }
    return result.json()
}
'use server'
export const getAllHouses = async () => {
    const baseURL = process.env.API_BASE_URL
    const response = await fetch(`${baseURL}/api/houses?limit=100`)
    return response.json()
}
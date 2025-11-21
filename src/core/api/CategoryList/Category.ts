"use server"

export const GetAllCategory = async () => {
      const baseURL = process.env.API_BASE_URL;
      const response = await fetch(`${baseURL}/api/categories?page=1&limit=50`)
      return response.json()
}
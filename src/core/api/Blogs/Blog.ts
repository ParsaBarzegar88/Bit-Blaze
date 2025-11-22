"use server"

export const GetAllBlogs = async (page: string, limit: string, search: string) => {

    const params = new URLSearchParams();
    if (page) params.append('page', page);
    if (limit) params.append('limit', "8");
    if (search) params.append('title', search);
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/blogs?${params.toString()}`)
    return response.json()
}
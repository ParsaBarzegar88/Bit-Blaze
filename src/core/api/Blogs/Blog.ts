"use server";

import { cookies } from "next/headers";
import { ICreateBlog, IUpdateBlog } from "@/core/types/Blogs/IBlogs";

export const GetAllBlogs = async (searchParams?: { [key: string]: string }) => {

    const params = new URLSearchParams();
    if (searchParams?.page) params.append('page', searchParams.page);
    if (searchParams?.limit) params.append('limit', searchParams.limit);
    params.append('limit', "8");
    if (searchParams?.search) params.append('title', searchParams.search);
    
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/blogs?${params.toString()}`)
    return response.json()
    
}

export const GetBlogById = async (id: string) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const res = await fetch(`${baseURL}/api/blogs/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    return res.json();
};


export const CreateBlogs = async (data: ICreateBlog) => {
    console.log("api" , data)
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const res = await fetch(`${baseURL}/api/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    });
      const response = await res.json();

  return {
    response:response,
    ok:res.ok
  };
};

export const UpdateBlogs = async (id: string, data: IUpdateBlog) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const res = await fetch(`${baseURL}/api/blogs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    });
      const response = await res.json();

  return {
    response:response,
    ok:res.ok
  };
};

export const DeleteBlog = async (id: string) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const res = await fetch(`${baseURL}/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    return res.json();
};
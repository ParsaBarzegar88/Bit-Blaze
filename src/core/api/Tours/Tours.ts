"use server"
import { ICreateTour, IRegisterTour, ITours, IUpdateTour } from "@/core/types/Tours/ITours";
import { cookies } from "next/headers";

export const GetTourList = async (searchParams?: { [key: string]: string }): Promise<ITours> => { 
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    const baseURL = process.env.API_BASE_URL;
    const page = searchParams?.page || '1';
    const limit = '6';
    
    const urlParams = new URLSearchParams();
    urlParams.set('page', page);
    urlParams.set('limit', limit);
    
    if (searchParams?.title) {
        urlParams.set('title', searchParams.title);
    }
    if (searchParams?.tag) {
        urlParams.set('tag', searchParams.tag);
    }

    const response = await fetch(`${baseURL}/api/tour?${urlParams.toString()}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    });


    const data = await response.json();
    return data;
}

// export const GetUserTourList = async (searchParams?: { [key: string]: string }): Promise<IToursItem> => {
//         const cookieStore = await cookies();
//         const token = cookieStore.get("accessToken")?.value;

//         const baseURL = process.env.API_BASE_URL;
//         const page = searchParams?.page || '1';
//         const limit = '4';
        
//         const response = await fetch(`${baseURL}/api/tour/user/my-registers?page=1&limit=10`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//         });

//         const data = await response.json();
//         return data;
// }

export const GetTourById = async (id: string) => {
        const cookieStore = await cookies();
        const token = cookieStore.get("accessToken")?.value;

        const baseURL = process.env.API_BASE_URL;

        const response = await fetch(`${baseURL}/api/tour/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        
        return response.json();
}

export const CreateTour = async (Data: ICreateTour) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/tour`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearar ${token}`
        },
        body: JSON.stringify(Data)
    })
    const res = await response.json()

    return {
        response: res,
        ok: response.ok
    }
}

export const RegisterTour = async (Data: IRegisterTour) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/tour/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearar ${token}`
        },
        body: JSON.stringify(Data)
    })
    const res = await response.json()

    return {
        response: res,
        ok: response.ok
    }
}

export const UploadPhotosForTour = async (id: string, Photos: FormData) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/tour/${id}/upload`, {
        method: "POST",
        headers: {
            Authorization: `Bearar ${token}`
        },
        body: Photos
    })
    const res = await response.json()

    return {
        response: res,
        ok: response.ok
    }
}

export const UpdateTours = async (id: string, Data: IUpdateTour) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/tour/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearar ${token}`
        },
        body: JSON.stringify(Data)
    })
    const res = await response.json()

    return {
        response: res,
        ok: response.ok
    }
}

export const DeleteTourById = async (id: string) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const response = await fetch(`${baseURL}/api/tour/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearar ${token}`
        },
    })

        const res = await response.json()

    return {
        response: res,
        ok: response.ok
    }
}
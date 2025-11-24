'use server'
import { IComments } from "@/core/types/MortgageRent/IComments";
import { IHouses } from "@/core/types/MortgageRent/IHouses";
import { IHousesDetail } from "@/core/types/MortgageRent/IHousesDetail";
import { cookies } from "next/headers";
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
export const addHouseToFavorite = async (houseId:string , userId:string | undefined) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('accessToken')?.value
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/favorites` , {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
            house_id: houseId,
            user_id: userId
        })
    })
    return result.json()
}
export const getSellerInfo = async (id:string) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('accessToken')?.value
    const baseURL = process.env.API_BASE_URL;
    const result = await fetch(`${baseURL}/api/users/${id}` , {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    return result.json()
}
export const sendQuestion = async (houseId: string, question: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const result = await fetch(`${baseURL}/api/property-qa/question`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      houseId: houseId,
      question: question,
    }),
  });
  const response = await result.json();
  return {
    res: response,
    ok: result.ok,
  };
};
export const sendAnswer = async (questionId: string, answer: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const result = await fetch(`${baseURL}/api/property-qa/answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      questionId: questionId,
      answer: answer,
    }),
  });
  const response = await result.json();
  return {
    res: response,
    ok: result.ok,
  };
};
export const getQuestions = async (houseId: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const result = await fetch(`${baseURL}/api/property-qa/${houseId}` , {
    headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    }
  })
  return result.json()
};

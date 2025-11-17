"use server";

import { cookies } from "next/headers";

export const SendMessage = async (room:string,sender:string,message:string,getterId:number) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/chats/send` , {
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    body:JSON.stringify({
        room:room,
        sender:sender,
        message:message,
        getterId:getterId
    })
  });
  const data = await res.json()
  return {
    ok:res.ok,
    res:data,
    status: res.status
  }
};
export const GetMessageOfChat = async (room:string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/chats/${room}` , {
    headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
  });
  return res.json()
};

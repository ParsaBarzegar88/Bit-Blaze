"use server";

import { INotificationSetting } from "@/core/types/Dashboard/IAnnouncement";
import { cookies } from "next/headers";

interface SearchParam {
  isRead?: string;
  page?: string;
}
export const getUserAnnouncements = async (
  userId: string,
  searchParam: SearchParam = {}
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(
    `${baseURL}/api/notifications/${userId}?page=${
      searchParam.page ? searchParam.page : 1
    }&limit=10&sort=createdAt&order=DESC&${
      searchParam.isRead === "true"
        ? "isRead=true"
        : searchParam.isRead === "false"
        ? "isRead=false"
        : ""
    }`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.json();
};

export const markAsRead = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/notifications/${id}/read`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
export const markAllAsRead = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/notifications/mark-all-as-read`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const getAnnouncementSetting =
  async (): Promise<INotificationSetting[]> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    const baseURL = process.env.API_BASE_URL;
    const res = await fetch(`${baseURL}/api/targeted-notifications/settings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  };

export const createAnnouncementSetting = async (notificationType: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/targeted-notifications/settings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body:JSON.stringify({
      notificationType:notificationType,
      criteria:{}
    })
  });
  return {
    ok:res.ok
  };
};

export const deleteAnnouncementSetting = async (id: string) => {
  console.log(id)
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const baseURL = process.env.API_BASE_URL;
  const res = await fetch(`${baseURL}/api/targeted-notifications/settings/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

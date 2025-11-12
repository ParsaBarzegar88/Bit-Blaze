import React, { FC } from "react";
import DashboardDocumentItem from "./DashboardDocumentItem/DashboardDocumentItem";
import { getHousesReserveDetail } from "@/core/api/HouseReserve/Detail/Detail";
import { cookies } from "next/headers";
import { getUserDetail } from "@/core/api/Dashboard/Dashboard";
import jwt from 'jsonwebtoken'
interface IProps{
  houseId:string;
}
const DashboardDocumentPageSection:FC<IProps> = async ({houseId}) => {
  const cookieStore = await cookies()
  const houseDetail = await getHousesReserveDetail(houseId)
    const accessToken = cookieStore.get('accessToken')?.value
    let userInfo
    let userId: string | undefined;
    if (accessToken) {
      const findUserId = jwt.decode(accessToken) as { id: string };
      userId = findUserId.id;
      userInfo = await getUserDetail(String(userId))
    }
  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-4">
      <DashboardDocumentItem houseDetail={houseDetail} userDetail={userInfo}/>
    </div>
  );
};

export default DashboardDocumentPageSection;

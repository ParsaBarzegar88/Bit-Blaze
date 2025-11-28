import React from 'react'
import DashboardSummery from './DashboardSummery/DashboardSummery'
import { getDashboardSummery, getUserDetail } from '@/core/api/Dashboard/Dashboard'
import DashboardStatusProfile from './DashboardStatusProfile/DashboardStatusProfile'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import DashboardRecentReserve from './DashboardRecentReserve/DashboardRecentReserve'
import { IReserveManagement } from '@/core/types/SellerDashboard/IReserveManagement'
import { getAllUserReserveDashboard } from '@/core/api/SellerDashboard/Dashboard'
import { getHousesReserveDetail } from '@/core/api/HouseReserve/Detail/Detail'

const DashboardPageSection = async () => {
  const cookieStore = await cookies()
  let userId: string | undefined;
  const accessToken = cookieStore.get('accessToken')?.value
  const dashboardSummery = await getDashboardSummery()
  let userInfo
  if (accessToken) {
    const findUserId = jwt.decode(accessToken) as { id: string };
    userId = findUserId.id;
    userInfo = await getUserDetail(String(userId))
  }
  const dashboardUserReserve = await getAllUserReserveDashboard(String(userId))
  const housesDetail = await dashboardUserReserve.bookings?.map((item: IReserveManagement) => getHousesReserveDetail(String(item.houseId)))
  let enrichedData
  if(housesDetail){
    const houseDetailPromise = await Promise.all(housesDetail)
    enrichedData = dashboardUserReserve.bookings?.map((reserve: IReserveManagement, index: number) => ({
      ...reserve,
      houseDetail: houseDetailPromise[index],
    }))
  }
  return (
    <div className='flex flex-col w-full gap-3 h-full overflow-x-auto bg-none shadow-none'>
      <DashboardSummery dashboardSummeryInfo={dashboardSummery} />
      <DashboardStatusProfile userInfo={userInfo} />
      <DashboardRecentReserve dashboardUserReserveInfo={enrichedData} />
    </div>
  )
}

export default DashboardPageSection
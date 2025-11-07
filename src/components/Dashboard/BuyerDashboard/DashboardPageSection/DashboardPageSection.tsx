import React from 'react'
import DashboardSummery from './DashboardSummery/DashboardSummery'
import { getDashboardMarketTrends, getDashboardSummery, getDashboardUserReserve, getUserDetail } from '@/core/api/Dashboard/Dashboard'
import DashboardStatusProfile from './DashboardStatusProfile/DashboardStatusProfile'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import DashboardRecentReserve from './DashboardRecentReserve/DashboardRecentReserve'

const DashboardPageSection = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const dashboardSummery = await getDashboardSummery()
  const dashboardMarketTrends = await getDashboardMarketTrends()
  const dashboardUserReserve = await getDashboardUserReserve()
  let userInfo
  let userId: string | undefined;
  if (accessToken) {
    const findUserId = jwt.decode(accessToken) as { id: string };
    userId = findUserId.id;
    userInfo = await getUserDetail(String(userId))
  }
  return (
    <div className='flex flex-col w-full gap-3 h-full overflow-x-auto bg-none shadow-none'>
      <DashboardSummery dashboardSummeryInfo={dashboardSummery} />
      <DashboardStatusProfile dashboardMarketTrendsInfo={dashboardMarketTrends} userInfo={userInfo}/>
      <DashboardRecentReserve dashboardUserReserveInfo={dashboardUserReserve}/>
    </div>
  )
}

export default DashboardPageSection
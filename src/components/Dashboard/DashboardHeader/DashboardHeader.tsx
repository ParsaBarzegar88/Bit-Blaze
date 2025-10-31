import { getUserDetail } from '@/core/api/Dashboard/Dashboard';
import { cookies } from 'next/headers';
import React from 'react'
import jwt from 'jsonwebtoken'
import DashboardItems from './DashboardItems/DashboardItems';
const DashboardHeader = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  let userInfo
  let userId: string | undefined;
  if (accessToken) {
    const findUserId = jwt.decode(accessToken) as { id: string };
    userId = findUserId.id;
    userInfo = await getUserDetail(String(userId))
  }
  return (
    <div className='bg-[#ffffff] dark:bg-[#363636] mt-2 items-center flex flex-col justify-center w-full mx-auto h-[66px] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)] shadow-[0_0px_10px_rgba(0,0,0,0.27)] rounded-[12px]'>
      <DashboardItems userInfo={userInfo}/>
    </div>
  )
}

export default DashboardHeader
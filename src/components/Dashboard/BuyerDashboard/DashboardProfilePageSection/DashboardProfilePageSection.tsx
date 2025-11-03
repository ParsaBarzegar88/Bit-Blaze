import React from 'react'
import ProfileUserPicture from './ProfileUserPicture/ProfileUserPicture'
import ProfileUserInformation from './ProfileUserInformation/ProfileUserInformation'
import ProfileUserSecurity from './ProfileUserSecurity/ProfileUserSecurity'
import { cookies } from 'next/headers'
import { getUserDetail } from '@/core/api/Dashboard/Dashboard'
import jwt from 'jsonwebtoken'

const DashboardProfilePageSection = async () => {
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
    <div className='flex flex-col w-full gap-3 px-3 py-3 md:max-h-[821px] h-full md:overflow-x-auto bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
        <ProfileUserPicture userInfo={userInfo}/>
        <ProfileUserInformation userInfo={userInfo} userId={userId}/>
        <ProfileUserSecurity/>
    </div>
  )
}

export default DashboardProfilePageSection
import React, { FC } from 'react'
import AnnouncementFilter from './AnnouncementFilter/AnnouncementFilter'
import { getUserAnnouncements } from '@/core/api/Dashboard/Announcement'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import AnnouncementList from './AnnouncementList/AnnouncementList'
import AnnouncementPagination from './AnnouncementPagination/AnnouncementPagination'
interface IProps {
    searchParams?: { [key: string]: string }
}
const DashboardAnnouncementsPageSection:FC<IProps> = async ({searchParams}) => {
        const cookieStore = await cookies()
        const accessToken = cookieStore.get('accessToken')?.value
        let userAnnouncement
        let userId: string | undefined;
        if (accessToken) {
          const findUserId = jwt.decode(accessToken) as { id: string };
          userId = findUserId.id;
          userAnnouncement = await getUserAnnouncements(String(userId),searchParams)
        }
    return (
        <div className='flex flex-col w-full gap-3 px-3 py-3 sm:max-h-full md:max-h-full lg:max-h-full h-full overflow-x-hidden custom-scrollbar overflow-y-auto bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
            <AnnouncementFilter />
            <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
            <div className='flex flex-col h-full justify-between'>
                <AnnouncementList userAnnouncement={userAnnouncement} />
                <AnnouncementPagination userAnnouncement={userAnnouncement} />
            </div>
        </div>
    )
}

export default DashboardAnnouncementsPageSection
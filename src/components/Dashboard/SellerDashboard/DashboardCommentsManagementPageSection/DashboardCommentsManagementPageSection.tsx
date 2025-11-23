import React, { FC } from 'react'
import CommentFilter from './CommentFilter/CommentFilter'
import CommentList from './CommentList/CommentList'
import { getAllHouseComments } from '@/core/api/SellerDashboard/CommentManagement'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import CommentPagination from './CommentPagination/CommentPagination'
interface IProps {
  searchParams?: { [key: string]: string }
}
const DashboardCommentsManagementPageSection: FC<IProps> = async ({ searchParams }) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  let houseComment
  let userId: string | undefined;
  if (accessToken) {
    const findUserId = jwt.decode(accessToken) as { id: string };
    userId = findUserId.id;
    houseComment = await getAllHouseComments(searchParams, String(userId))
  }
  return (
    <div className='flex flex-col w-full gap-3 px-3 py-3 sm:max-h-full md:max-h-full lg:max-h-full h-full overflow-x-hidden custom-scrollbar overflow-y-auto bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
      <CommentFilter />
      <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
      <div className='flex flex-col h-full justify-between'>
        <CommentList userCommentInfo={houseComment} userId={userId} />
        <CommentPagination userCommentCount={houseComment} />
      </div>
    </div>
  )
}

export default DashboardCommentsManagementPageSection
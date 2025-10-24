import React from 'react'
import UserCommentsListParent from './UserCommentsListParent/UserCommentsListParent'
import ArrowTriangleGreenLeftSVG from '../landingPageSVG/arrowTriangleGreenLeftSVG'
import ArrowTriangleGreenRightSVG from '../landingPageSVG/arrowTriangleGreenRightSVG'
import { gerComments } from '@/core/api/LandingPage/comments'

const UserComments = async () => {
  const commentsData = await gerComments()
  return (
    <div className='flex flex-col max-w-[98%] w-full relative mt-48 items-center gap-5 justify-center mb-20'>
      <div className='flex flex-row gap-3 dark:fill-[#8CFF45] fill-[#58893a] text-[#58893a] dark:text-[#8CFF45] items-center font-[500] text-[16px] mx-auto'>
        <ArrowTriangleGreenRightSVG />
        نظرات  کاربران
        <ArrowTriangleGreenLeftSVG />
      </div>
      <h2 className="dark:text-[#FFFFFF] text-black text-[26px] font-[500]">
        رضایت شما <b className='text-[30px]'>اعتبار و ارزش دلتا را می سازد !</b>
      </h2>
      <p className="dark:text-[#FFFFFF] text-black text-[16px] font-[400]">
        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .
      </p>
      <UserCommentsListParent comments={commentsData} />
    </div>
  )
}

export default UserComments
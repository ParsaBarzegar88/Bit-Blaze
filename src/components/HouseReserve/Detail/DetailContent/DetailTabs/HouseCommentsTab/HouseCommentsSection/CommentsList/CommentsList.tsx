'use client'
import { IComment } from '@/core/types/MortgageRent/IComments'
import React, { FC } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { formatToPersianDate } from '@/utils/date';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useRouter, useSearchParams } from 'next/navigation';

interface IProps {
  commentData: IComment
}
const CommentsList: FC<IProps> = ({ commentData }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const handleReplyComment = (parentId:string) =>{
    const param = new URLSearchParams(searchParams)
    param.set("parentId", parentId)
    router.push(`?${param.toString()}`)
  }
  return (
    <div className='w-[100%] mt-5'>
      <div className='flex flex-col relative'>
        <div className='flex flex-row justify-between items-center relative'>
          <div className='bg-[#FFFFFF] text-black transition-colors duration-300 z-[1] mr-3 shadow-[0px_4px_12px_rgba(255,255,255,0.2)] translate-y-6 flex flex-row gap-1.5 items-center justify-center rounded-[10px] w-[67px] h-[32px]'>
            <div className='mt-1 font-[700] text-[16px]'>
              {commentData.dataValues.rating}
            </div>
            <FaStar />
          </div>
        </div>
        <div className='dark:bg-[#393939] bg-[#adadad]
                      before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                     transition-all duration-300 relative w-full h-fit mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                        dark:before:bg-[#393939] before:bg-[#adadad] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                        before:h-6 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-6 before:top-0 before:right-0
                        after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                        after:transform-[rotate(11deg)] after:top-[-1.2rem] after:right-[6.3rem] after:shadow-[6px_10px_0_0_rgba(173,173,173,1)] dark:after:shadow-[6px_10px_0_0_rgba(57,57,57,1)]'>

          <div className="absolute top-[-1.5rem] right-[5px] w-[5rem] h-[2rem] rounded-[14px] 
                            outline-[5px] dark:outline-[#393939] outline-[#adadad]
                            transition-all duration-300
                            "></div>
          <div className='flex flex-col gap-4 max-w-[98%] w-full justify-center mx-auto mb-4'>
            <p className='dark:text-[#FFFFFF] text-black leading-[40px] mt-5 mb-2'>
              ” {commentData.dataValues.caption} “
            </p>
            <div className='dark:bg-[#444444] bg-[#cccccc] rounded-[24px] flex flex-row justify-between items-end'>
              <div className='flex flex-row gap-1.5 items-center'>
                <div className='bg-[#D9D9D9] rounded-2xl w-[57px] h-[57px] flex justify-center items-center mt-2 mb-2 mr-2'>
                  {commentData.user?.avatar}
                </div>
                <div className='flex flex-col gap-3'>
                  <p className='dark:text-[#FFFFFF] text-black text-[14px]'>{commentData.user?.name}</p>
                  <div className='flex flex-row gap-2 items-center text-[#696969] dark:text-[#AAAAAA] text-[14px]'>
                    <FaRegCalendarAlt />
                    {formatToPersianDate("2011-10-05T14:48:00.000Z")}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleReplyComment(commentData.dataValues.id)}
                type="submit"
                className='dark:border-white mb-2 cursor-pointer border-black w-fit flex flex-row gap-2 pr-3 items-center ml-2 h-[36px] rounded-[12px] border dark:text-white text-black'
              >
                ثبت پاسخ
                <MdKeyboardArrowLeft className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsList
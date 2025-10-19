import React, { FC } from 'react'
import { FaStar } from 'react-icons/fa6';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IComment } from '@/core/types/LandingPage/IComments';
import { formatToPersianDate } from '@/utils/date';
interface IProps{
    commentData:IComment
}
const UserCommentsList:FC<IProps> = ({commentData}) => {
    return (
        <div className='w-[100%] mt-5'>
            <div className='flex flex-col relative'>
                <div className='flex flex-row justify-between items-center relative'>
                    <div className='bg-[#FFFFFF] transition-colors duration-300 z-[1] mr-3 shadow-[0px_4px_12px_rgba(255,255,255,0.2)] translate-y-6 flex flex-row gap-1.5 items-center justify-center rounded-[10px] w-[67px] h-[32px]'>
                        <div className='mt-1 font-[700] text-[16px]'>
                            {commentData.dataValues.rating}
                        </div>
                        <FaStar />
                    </div>
                </div>
                <div className='bg-[#393939] 
                  before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative w-full h-fit mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(11deg)] after:top-[-1.2rem] after:right-[6.3rem] after:shadow-[6px_10px_0_0_rgba(57,57,57,1)]'>

                    <div className="absolute top-[-1.5rem] right-[5px] w-[5rem] h-[2rem] rounded-[14px] 
                        outline-[5px] outline-[#393939] 
                        transition-all duration-300
                        "></div>
                    <div className='flex flex-col gap-4 max-w-[98%] w-full justify-center mx-auto mb-4'>
                        <p className='text-[#FFFFFF] leading-[40px] mt-5 mb-2'>
                            ” {commentData.dataValues.caption} “
                        </p>
                        <div className='bg-[#444444] rounded-[24px] flex flex-row gap-1.5 items-center'>
                            <div className='bg-[#D9D9D9] rounded-2xl w-[57px] h-[57px] flex justify-center items-center mt-2 mb-2 mr-2'>
                                {commentData.user?.avatar}
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-[#FFFFFF] text-[14px]'>{commentData.user?.name}</p>
                                <div className='flex flex-row gap-2 items-center text-[#AAAAAA] text-[14px]'>
                                    <FaRegCalendarAlt/>
                                    {formatToPersianDate("2011-10-05T14:48:00.000Z")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCommentsList
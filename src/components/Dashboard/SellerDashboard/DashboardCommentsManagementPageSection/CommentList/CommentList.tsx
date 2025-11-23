'use client'
import { formatToPersianDate } from '@/utils/date'
import React, { FC, useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import { IComments } from '@/core/types/SellerDashboard/IComment';
import CommentMoreSection from './CommentMoreSection/CommentMoreSection';
import CommentReplyList from './CommentMoreSection/CommentReplyList/CommentReplyList';
interface IProps {
    userCommentInfo?: IComments;
    userId:string | undefined
}
const CommentList: FC<IProps> = ({ userCommentInfo , userId}) => {
    const [openCommentId, setOpenCommentId] = useState<string | null>(null)
    const [modal, setModal] = useState<boolean>(false)
    const handleOpenReserveMode = (id: string) => {
        setOpenCommentId(prev => prev === id ? null : id)
    }
    const FindHouseDetailById = userCommentInfo?.comments?.find(item => String(item.id) === openCommentId)
    return (
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="w-full flex flex-col gap-3 sm:gap-2 min-w-[900px]">
                <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-5 gap-2 py-3 px-2 sm:py-2 sm:px-3 rounded-[10px]">
                    <div className="col-span-1 sm:col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        عنوان
                    </div>
                    <div className="col-span-1 sm:col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        توضیحات
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        امتیاز
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        تاریخ
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm"></div>
                </div>

                <div className="flex flex-col gap-1">

                    {userCommentInfo ? (
                        userCommentInfo?.comments?.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-5 gap-2 sm:gap-7 items-center py-6 px-2 sm:py-6 sm:px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300"
                            >
                                <div className="col-span-1 sm:col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.title}
                                </div>
                                <div className="col-span-1 sm:col-span-1 text-right max-w-[150px] truncate font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.caption}
                                </div>
                                <div className="col-span-1 sm:col-span-1 text-center font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.rating ? item.rating : 5}
                                </div>
                                <div className="col-span-1 text-center flex justify-center items-center">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-300">
                                        {formatToPersianDate(item.created_at)}
                                    </span>
                                </div>
                                <div className="flex relative col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium items-center justify-center">
                                    <div className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] cursor-pointer transition-colors duration-200">
                                        <IoIosMore onClick={() => handleOpenReserveMode(String(item.id))} size={25} className="text-gray-600 dark:text-gray-400" />
                                    </div>
                                    {openCommentId === String(item.id) && (
                                        <div className={`absolute left-1/2 -translate-x-1/2 z-10 `}>
                                            <CommentMoreSection setModal={setModal} modal={modal}/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
                            هیچ رزروی یافت نشد
                        </div>
                    )}
                </div>
            </div>
            {modal && (
                <div className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'>
                    <CommentReplyList closeModal={setModal} commentId={FindHouseDetailById?.id} sellerId={userId}/>
                </div>
            )}
        </div>
    )
}

export default CommentList
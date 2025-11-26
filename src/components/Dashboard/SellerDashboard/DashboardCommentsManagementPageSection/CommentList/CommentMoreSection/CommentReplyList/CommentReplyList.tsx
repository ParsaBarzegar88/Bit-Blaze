'use client'
import { getParentComments } from '@/core/api/SellerDashboard/CommentManagement';
import { IComments } from '@/core/types/SellerDashboard/IComment';
import { formatToPersianDate } from '@/utils/date';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';

interface IProps {
    closeModal: Dispatch<SetStateAction<boolean>>;
    commentId: string | undefined;
    sellerId: string | undefined;
}
const CommentReplyList: FC<IProps> = ({ closeModal, commentId, sellerId }) => {
    const [commentReplyLists, setCommentReplyLists] = useState<IComments>()
    useEffect(() => {
        const fetchPayments = async () => {
            const getUserPayments = await getParentComments(String(commentId), String(sellerId))
            setCommentReplyLists(getUserPayments)
        }
        if (commentId) {
            fetchPayments();
        }
    }, [commentId, sellerId])
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-2xl mx-4 
                        flex flex-col max-h-[90vh]'>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='text-[24px] font-[400] text-gray-800 dark:text-white'>
                        نظرات کامنت
                    </h2>
                    <button
                        onClick={() => closeModal(false)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
                    >
                        <LiaTimesSolid size={20} />
                        <span className='text-md'>بستن</span>
                    </button>
                </div>
                <div className='w-full max-w-[96%] mx-auto mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                <div className='flex flex-col gap-1.5 w-[96%] mb-3 justify-center mx-auto max-h-[350px] overflow-y-auto custom-scrollbar'>
                    {commentReplyLists && commentReplyLists.totalCount > 0 ? commentReplyLists?.comments?.map((item) => (
                        <div key={item.id} className='px-2 py-1 flex flex-col gap-3.5 w-full mx-auto bg-[#e4e4e4] dark:bg-[#444444] rounded-[15px]'>
                            <div className='flex flex-row w-full justify-between items-center'>
                                <span className='text-[19px] font-[800]'>{item.title}</span>
                                <div className='flex flex-row gap-1 items-center text-yellow-400'>
                                    <FaStar size={17}/>
                                    <span>{item.rating ? item.rating : 5}</span>
                                </div>
                            </div>
                            <span className='text-[#b4b4b4] max-w-[200px] truncate'>{item.caption}</span>
                            <div className='flex flex-row gap-0.5'>
                                <span>تاریخ ثبت : </span>
                                <span>{formatToPersianDate(item.created_at)}</span>
                            </div>
                        </div>

                    ))
                        : (
                            <div>نظری وجود ندارد</div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default CommentReplyList
'use client'
import { getChatHistory } from '@/core/api/Dashboard/Chats';
import { IChatHistory } from '@/core/types/Dashboard/IChats';
import React, { FC, useEffect, useState, useCallback } from 'react'
import { BsChatDots } from "react-icons/bs";
import { IUserDetail } from '@/core/types/Dashboard/IDashboard';
import { getUserDetail } from '@/core/api/Dashboard/Dashboard';
import { useCookies } from 'next-client-cookies';
import jwt from 'jsonwebtoken'
import { formatToPersianDate } from '@/utils/date';
import { IoIosSend } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { SendMessage } from '@/core/api/MortgageRent/MortgageRentDetail/chat';

interface IProps {
    roomId?: string | number;
}

const ChatsSection: FC<IProps> = ({ roomId }) => {
    const [chatHistory, setChatHistory] = useState<IChatHistory[]>([])
    const [userInfo, setUserInfo] = useState<IUserDetail>()
    const [MessageContent, setMessageContent] = useState<string>('')
    const router = useRouter()
    const cookieStore = useCookies()
    const accessToken = cookieStore.get('accessToken')
    let userId: string | undefined;
    if (accessToken) {
        const findUserId = jwt.decode(accessToken) as { id: string };
        userId = findUserId.id;
    }
    const fetchChatHistory = useCallback(async () => {
        const getUserChatHistory = await getChatHistory(String(roomId))
        setChatHistory(getUserChatHistory)
    }, [roomId])

    const fetchUserDetail = useCallback(async () => {
        const otherUser = chatHistory.find(item =>
            item.getterId !== Number(userId) || item.senderId !== Number(userId)
        );

        if (!otherUser) return;
        const otherUserId = otherUser.getterId !== Number(userId)
            ? otherUser.getterId
            : otherUser.senderId;
        const getUserInfo = await getUserDetail(String(otherUserId))
        setUserInfo(getUserInfo)
    }, [chatHistory, userId])
    const sendMessageToCustomer = async () => {
        if (!MessageContent.trim()) return;

        const response = await SendMessage(String(roomId), String(userId), String(MessageContent), Number(userInfo?.user.id))
        if (response.ok) {
            toast.success("پیام شما با موفقیت ارسال شد", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            setTimeout(() => {
                router.refresh();
                setMessageContent('')
            }, 5000);
        } else {
            toast.error("مشکلی در ارسال پیام وجود آمده است", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            setTimeout(() => {
                router.refresh();
                setMessageContent('')
            }, 5000);
        }
    }
    useEffect(() => {
        fetchChatHistory()
        const interval = setInterval(fetchChatHistory, 3000)
        return () => clearInterval(interval)
    }, [fetchChatHistory])

    useEffect(() => {
        if (chatHistory && chatHistory.length > 0) {
            fetchUserDetail()
        }
        const interval = setInterval(fetchUserDetail, 3000)
        return () => clearInterval(interval)
    }, [chatHistory, fetchUserDetail])

    const getFirstIndexOfName = userInfo?.user.firstName.charAt(0).toUpperCase()
    return (
        Number(roomId) > 0 ? (
            <div className='flex flex-col w-full'>
                <div className='flex flex-row gap-2.5 w-full px-3 tex-black items-center border-b pb-3 py-2'>
                    <div className='flex justify-center items-center text-center w-[50px] h-[50px] bg-[#2a87d3] rounded-full'>{getFirstIndexOfName}</div>
                    <div className='flex flex-col justify-between'>
                        <div>{userInfo?.user?.firstName + ' ' + userInfo?.user?.lastName}</div>
                        <div>{userInfo?.user?.email}</div>
                    </div>
                </div>
                <div className='max-h-[700px] h-full overflow-y-auto px-1'>
                    {chatHistory.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2.5'>
                            {String(item.getterId) !== userId ? (
                                <div className='flex flex-col mt-2.5 items-start'>
                                    <div className='bg-gray-300 dark:bg-gray-600 w-fit h-fit p-2 rounded-b-[10px] rounded-tl-[10px] flex flex-col gap-1.5 max-w-[80%]'>
                                        <span className='text-[15px] text-gray-800 dark:text-gray-200 font-semibold'>{item?.sender?.fullName}</span>
                                        <span className='text-[15px] text-gray-800 dark:text-gray-200'>{item?.message}</span>
                                        <span className='text-[13px] text-gray-600 dark:text-gray-400'>{formatToPersianDate(item?.createdAt)}</span>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex flex-col gap-1.5 mt-2.5 items-end'>
                                    <div className='bg-[#2273ec] w-fit h-fit p-2 rounded-b-[10px] rounded-tr-[10px] flex flex-col gap-1.5 max-w-[80%]'>
                                        <span className='text-[15px] text-white font-semibold'>{item?.sender?.fullName}</span>
                                        <span className='text-[15px] text-white'>{item?.message}</span>
                                        <span className='text-[13px] text-gray-200'>{formatToPersianDate(item?.createdAt)}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex flex-row w-full gap-1.5 mt-2 mb-2 justify-center border-t border-gray-300 pt-2 px-2'>
                    <input
                        value={MessageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessageToCustomer()}
                        type="text"
                        placeholder='متن خود را وارد کنید ...'
                        className='w-full outline-none border-none dark:text-white text-black dark:bg-gray-700 bg-gray-100 px-3 py-2 rounded-lg'
                    />
                    <IoIosSend
                        onClick={sendMessageToCustomer}
                        size={25}
                        className='bg-[#2273ec] p-2 w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center text-white hover:bg-blue-600 transition-colors'
                    />
                </div>
            </div>
        ) : (
            <div className="flex flex-col justify-center items-center w-full">
                <div className='flex flex-col gap-3 items-center'>
                    <BsChatDots size={50} className='text-gray-400' />
                    <h3 className='text-[22px] font-800 dark:text-gray-200 text-gray-500'>گفتگویی انتخاب نشده است</h3>
                    <span className='text-[14px] font-500 text-gray-400'>برای گفتگو یک چت را از لیست انتخاب کنید</span>
                </div>
            </div>
        )
    )
}

export default ChatsSection
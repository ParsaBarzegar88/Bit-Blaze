import { GetMessageOfChat, SendMessage } from '@/core/api/HouseReserve/Detail/chat';
import { getSellerInfo } from '@/core/api/MortgageRent/MortgageRentDetail/MortgageRentDetail';
import { IUserDetail } from '@/core/types/LandingPage/IUserDetail';
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';
import { useCookies } from 'next-client-cookies';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoIosSend } from "react-icons/io";
import jwt from 'jsonwebtoken'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { IGetChatMessage } from '@/core/types/HouseReserveDetail/ISendChat';
import { formatToPersianDate } from '@/utils/date';

interface IProps {
    onClose: Dispatch<SetStateAction<boolean>>;
    sellerInfo: IHousesDetail;
}

const ReserveChat: FC<IProps> = ({ onClose, sellerInfo }) => {
    const [SellerData, setSellerData] = useState<IUserDetail>()
    const [MessageContent, setMessageContent] = useState<string>('')
    const [ChatMessage, setChatMessage] = useState<IGetChatMessage[]>()
    const router = useRouter()
    const CookieStore = useCookies()
    const accessToken = CookieStore.get('accessToken')
    let userId: string | undefined;
    if (accessToken) {
        const findUserId = jwt.decode(accessToken) as { id: string }
        userId = findUserId.id;
    }

    const room = sellerInfo.id + sellerInfo.sellerId + userId

    const sendMessageToSeller = async () => {
        if (!MessageContent.trim()) return;

        const response = await SendMessage(room, String(userId), String(MessageContent), Number(sellerInfo.sellerId))
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
        const getUserData = async () => {
            const getSellerDetail = await getSellerInfo(sellerInfo.sellerId)
            setSellerData(getSellerDetail)
        }
        const getChatData = async () => {
            const getRoom = await GetMessageOfChat(room)
            setChatMessage(getRoom)
        }
        getChatData()
        getUserData()
        const interval = setInterval(getChatData, 3000)
        return () => clearInterval(interval)
    }, [sellerInfo.sellerId, room])

    return (
        <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] flex flex-col items-center 
      justify-center mx-auto dark:bg-[#363636]'>
            <div className="flex flex-row justify-between w-full items-center bg-[#2273ec] p-2">
                <div className='flex flex-row gap-1.5 items-center'>
                    {SellerData?.user.profilePicture ? (
                        <div className='w-[50px] h-[50px] bg-[#363636] rounded-full'>
                            <Image src={SellerData?.user.profilePicture} className='object-contain w-full h-full rounded-full' width={200} height={150} alt='profile pic' />
                        </div>
                    ) : (
                        <div className='w-[50px] h-[50px] bg-[#363636] rounded-full'></div>
                    )}
                    <div className='flex flex-col justify-between'>
                        <div className='text-white'>{SellerData?.user.firstName + " " + SellerData?.user.lastName}</div>
                        <div className='text-white text-sm'>{SellerData?.user.email}</div>
                    </div>
                </div>
                <div onClick={() => onClose(false)} className="flex flex-row gap-1.5 cursor-pointer items-center border border-[#ff0000] text-[#ff0000] py-1 px-2 rounded-[20px]">
                    <FaTimes />
                    <span
                        className="cursor-pointer"
                    >
                        بستن
                    </span>
                </div>
            </div>
            <div className='flex flex-col min-h-[300px] p-2 max-h-[360px] h-full dark:bg-[#363636] bg-white overflow-y-auto custom-scrollbar w-full'>
                {ChatMessage && ChatMessage.length > 0 ? ChatMessage?.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2.5'>
                        {String(item.getterId) !== userId ? (
                            <div className='flex flex-col mt-2.5 items-start'>
                                <div className='bg-gray-300 dark:bg-gray-600 w-fit h-fit p-2 rounded-b-[10px] rounded-tl-[10px] flex flex-col gap-1.5 max-w-[80%]'>
                                    <span className='text-[15px] text-gray-800 dark:text-gray-200 font-semibold'>{item.sender.fullName}</span>
                                    <span className='text-[15px] text-gray-800 dark:text-gray-200'>{item.message}</span>
                                    <span className='text-[13px] text-gray-600 dark:text-gray-400'>{formatToPersianDate(item.createdAt)}</span>
                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-col gap-1.5 mt-2.5 items-end'>
                                <div className='bg-[#2273ec] w-fit h-fit p-2 rounded-b-[10px] rounded-tr-[10px] flex flex-col gap-1.5 max-w-[80%]'>
                                    <span className='text-[15px] text-white font-semibold'>{item.sender.fullName}</span>
                                    <span className='text-[15px] text-white'>{item.message}</span>
                                    <span className='text-[13px] text-gray-200'>{formatToPersianDate(item.createdAt)}</span>
                                </div>
                            </div>
                        )}
                    </div>
                )) : (
                    <div className='flex justify-center h-full w-full m-auto items-center text-[20px] dark:text-white text-black'>
                        پیامی وجود ندارد
                    </div>
                )}
            </div>
            <div className='flex flex-row w-full gap-1.5 mt-2 mb-2 justify-center border-t border-gray-300 pt-2 px-2'>
                <input
                    value={MessageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessageToSeller()}
                    type="text"
                    placeholder='متن خود را وارد کنید ...'
                    className='w-[90%] outline-none border-none dark:text-white text-black dark:bg-gray-700 bg-gray-100 px-3 py-2 rounded-lg'
                />
                <IoIosSend
                    onClick={sendMessageToSeller}
                    size={25}
                    className='bg-[#2273ec] p-2 w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center text-white hover:bg-blue-600 transition-colors'
                />
            </div>
        </div>
    )
}

export default ReserveChat
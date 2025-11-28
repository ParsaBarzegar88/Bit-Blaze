'use client'
import { IUserReserve } from '@/core/types/Dashboard/IReserve';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { FaBed, FaCarSide, FaRegShareFromSquare } from 'react-icons/fa6';
import { GoStarFill } from "react-icons/go";
import { LiaTimesSolid } from 'react-icons/lia';
import { MdHotTub } from 'react-icons/md';
import { toast } from 'react-toastify';
import ReservePaymentDetail from '../ReservePaymentDetail/ReservePaymentDetail';
import ReserveReserversLists from '../ReserveReserversLists/ReseveReserversLists';
interface IProps {
    closeHouseDetail: Dispatch<SetStateAction<boolean>>;
    houseDetail: IUserReserve
}

const ReserveHouseDetail: FC<IProps> = ({ closeHouseDetail, houseDetail }) => {
    const [openPayment, setOpenPayment] = useState<boolean>(false)
    const [openReserversList, setOpenReserversList] = useState<boolean>(false)
    const [openChat, setOpenChat] = useState<boolean>(false)
    const handleOpenPayment = () => {
        setOpenPayment(!openPayment)
    }
    const handleOpenReservesList = () => {
        setOpenReserversList(!openReserversList)
    }
    const handleOpenChat = () => {
        setOpenChat(!openChat)
    }
    const handleSharePage = async () => {
        if (!navigator.share) {
            toast.error('قابلیت به اشتراک گذاری در مرورگر شما وجود ندارد', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
            return
        }
        const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
        try {
            await navigator.share({
                title: houseDetail.houseDetail.title,
                text: houseDetail.houseDetail.caption,
                url: shareUrl,

            });
        } catch {
            toast.error('مشکلی در اشتراک گذاری به وجود آمده است', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
        }
    }
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-4xl mx-4 
                flex flex-col max-h-[90vh]'>
                <div className='flex justify-between items-center p-6 border-b border-dashed border-gray-300 dark:border-gray-600'>
                    <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
                        {houseDetail.house.title}
                    </h2>
                    <button
                        onClick={() => closeHouseDetail(false)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
                    >
                        <LiaTimesSolid size={20} />
                        <span className='text-md'>بستن</span>
                    </button>
                </div>
                <div className='flex-1 overflow-y-auto p-6'>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className='space-y-4'>
                            <div className='relative h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden'>
                                <Image src={houseDetail.houseDetail.photos !== null && houseDetail.houseDetail.photos.length > 0 && houseDetail.houseDetail.photos[0].trim() !== '' ? houseDetail.houseDetail.photos[0] : "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg"} width={500} height={500} className='w-full h-full object-cover rounded-[12px]' alt='HouseImage' />
                                <div className='absolute top-3 right-3 h-[40px] bg-[#7367FF] text-white flex flex-row gap-1.5 justify-center items-center px-3 py-1 rounded-[10px] text-sm font-medium'>
                                    <GoStarFill />
                                    5 ستاره
                                </div>
                                <div onClick={handleSharePage} className='absolute top-3 left-3 bg-[#8CFF45] cursor-pointer flex justify-center items-center text-black px-3 py-1 rounded-[12px] w-[40px] h-[40px] text-sm'>
                                    <FaRegShareFromSquare size={18} />
                                </div>
                            </div>

                            <p className='text-[#AAAAAA] text-lg'>
                                آدرس : {houseDetail.houseDetail.address}
                            </p>

                            <div className='flex flex-wrap gap-4 text-[#757575] dark:text-[#AAAAAA]'>
                                <div className='flex items-center gap-2'>
                                    <FaBed className='text-lg' />
                                    <span>{houseDetail.houseDetail.rooms} خوابه</span>
                                </div>
                                <div className='w-0.5 h-5 bg-[#AAA] hidden sm:block' />
                                <div className='flex items-center gap-2'>
                                    <FaCarSide className='text-lg' />
                                    <span>{houseDetail.houseDetail.parking} پارکینگ</span>
                                </div>
                                <div className='w-0.5 h-5 bg-[#AAA] hidden sm:block' />
                                <div className='flex items-center gap-2'>
                                    <MdHotTub className='text-lg' />
                                    <span>{houseDetail.houseDetail.bathrooms} حمام</span>
                                </div>
                                <div className='w-0.5 h-5 bg-[#AAA] hidden sm:block' />
                                <div className='flex items-center gap-2'>
                                    <svg className='w-5 h-5' viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M15.736 14.8353C15.3513 15.5533 14.606 16 13.7913 16H12C11.632 16 11.3333 15.702 11.3333 15.3333C11.3333 14.9647 11.632 14.6667 12 14.6667H13.7913C14.1187 14.6667 14.406 14.494 14.5607 14.206C14.7147 13.9173 14.6993 13.5827 14.5173 13.31C14.5033 13.2893 14.4907 13.268 14.4793 13.2453L12.9633 10.3053C12.8567 10.0987 12.8653 9.85134 12.9867 9.65267C13.108 9.454 13.3233 9.33334 13.556 9.33334H13.8253C13.8813 9.33334 13.9227 9.30867 13.9493 9.25934C13.976 9.21 13.9733 9.162 13.942 9.11467L12.0793 5.648C11.9687 5.44134 11.9747 5.19134 12.0947 4.99067C12.2147 4.79 12.432 4.66667 12.6667 4.66667C12.722 4.66667 12.764 4.642 12.79 4.594C12.812 4.55334 12.8147 4.514 12.798 4.47534L10.1373 1.37067C10.0793 1.31734 9.95067 1.282 9.82867 1.406L7.79533 3.76934C7.556 4.048 7.134 4.07934 6.85467 3.83934C6.576 3.59934 6.54467 3.178 6.78467 2.89934L8.85 0.501336C9.508 -0.169331 10.5227 -0.135331 11.118 0.467336C11.118 0.467336 13.8893 3.70134 13.9053 3.72667C14.198 4.18067 14.2193 4.75667 13.9613 5.23067C13.8687-5.40067 13.746 5.54734 13.602 5.66534L15.0847 8.42934C15.354 8.828 15.382 9.408 15.1253 9.888C14.9907 10.1393 14.7907 10.3413 14.552 10.476L15.6493 12.604C16.08 13.278 16.1147 14.1287 15.736 14.8353ZM10.6667 10.232V13C10.6667 14.654 9.32067 16 7.66667 16H3C1.346 16 0 14.654 0 13V10.232C0 9.2 0.466 8.244 1.27867 7.60667L3.27867 6.04134C4.488 5.094 6.178 5.09534 7.38733 6.04134L9.38733 7.60734C10.2 8.244 10.666 9.20067 10.666 10.2327L10.6667 10.232ZM9.33333 10.232C9.33333 9.61267 9.054 9.03867 8.566 8.65667L6.566 7.09134C6.20333 6.808 5.768 6.66534 5.33333 6.66534C4.89867 6.66534 4.46333 6.80734 4.10067 7.092L2.10067 8.65667C1.61333 9.03867 1.33333 9.61334 1.33333 10.232V13C1.33333 13.9193 2.08133 14.6667 3 14.6667H7.66667C8.58533 14.6667 9.33333 13.9193 9.33333 13V10.232ZM6 10H4.66667C4.29867 10 4 10.2987 4 10.6667V12C4 12.368 4.29867 12.6667 4.66667 12.6667H6C6.368 12.6667 6.66667 12.368 6.66667 12V10.6667C6.66667 10.2987 6.368 10 6 10Z" />
                                    </svg>
                                    <span>حیاط</span>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <p className='text-[#555555] dark:text-gray-300 text-sm leading-relaxed'>
                                {houseDetail.houseDetail.caption}
                            </p>

                            <div>
                                <span className='text-[#555] dark:text-white font-medium'>برچسب‌ها</span>
                                <div className='flex flex-wrap gap-2 mt-2'>
                                    {houseDetail.houseDetail.tags.map(tag => (
                                        <span key={tag} className='px-4 py-1.5 border border-[#8CFF45] rounded-lg text-sm'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 pt-6 border-t border-dashed border-gray-300 dark:border-gray-600'>
                        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                            <div className='bg-[#D9D9D9] dark:bg-gray-700 px-6 py-3 rounded-xl'>
                                <div className='flex justify-between items-center gap-8 text-lg font-medium'>
                                    <span>قیمت کل :</span>
                                    <span className='text-xl'>{houseDetail.houseDetail.discounted_price ? houseDetail.houseDetail.discounted_price : houseDetail.houseDetail.price} تومان</span>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <button onClick={handleOpenReservesList} className='bg-[#8CFF45] cursor-pointer text-black px-6 py-3 rounded-xl font-medium hover:bg-[#7be03b] transition'>
                                    رزروها
                                </button>
                                <button onClick={handleOpenPayment} className='bg-[#8CFF45] cursor-pointer text-black px-6 py-3 rounded-xl font-medium hover:bg-[#7be03b] transition'>
                                    پرداختی‌ها
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openPayment && (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <ReservePaymentDetail closePayment={setOpenPayment} bookingId={houseDetail.id} />
                </div>
            )}
            {openReserversList && (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <ReserveReserversLists closeReserversLists={setOpenReserversList} reserversDetail={houseDetail} />
                </div>
            )}
            {}
        </div>
    )
}

export default ReserveHouseDetail
"use client"
import { IHousesDetail } from '@/core/types/HouseReserveDetail/IHousesDetail'
import React, { FC, useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { BsChatDots } from "react-icons/bs";
import ReserveChat from './ReserveChat/ReserveChat';

interface IProps {
    Info: IHousesDetail
}

const TopOfDetail: FC<IProps> = ({ Info }) => {
    const [openChat, setOpenChat] = useState<boolean>(false)
    const handleOpenChat = () => {
        setOpenChat(!openChat)
    }
    const CopyLink = () => {
        const isCopied = copy(window.location.href);

        if (isCopied) {
            toast.success('لینک با موفقیت کپی شد', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
        } else {
            toast.error('لینک کپی نشد', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
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
        <>
            <div className='max-w-[100%] w-full flex flex-col sm:flex-row m-3 justify-between'>
                <div className='flex flex-col'>
                    <h1 className='dark:text-white text-[32px] font-[600] text-black'>{Info.title}</h1>
                    <div className='flex items-center gap-2 w-full min-w-0 mt-4'>
                        <svg width="14" height="14" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                            <g clipPath="url(#clip0_1_1535)">
                                <path d="M8.6403 4C8.11288 4 7.59731 4.1564 7.15878 4.44941C6.72025 4.74243 6.37846 5.15891 6.17662 5.64618C5.97479 6.13345 5.92198 6.66962 6.02487 7.18691C6.12777 7.70419 6.38174 8.17935 6.75468 8.55229C7.12762 8.92523 7.60278 9.1792 8.12006 9.28209C8.63734 9.38499 9.17352 9.33218 9.66079 9.13035C10.1481 8.92851 10.5645 8.58672 10.8576 8.14819C11.1506 7.70966 11.307 7.19408 11.307 6.66667C11.307 5.95942 11.026 5.28115 10.5259 4.28105C10.0258 4.28095 9.34755 4 8.6403 4ZM8.6403 8C8.37659 8 8.11881 7.9218 7.89954 7.77529C7.68028 7.62878 7.50938 7.42055 7.40846 7.17691C7.30754 6.93328 7.28114 6.66519 7.33259 6.40655C7.38403 6.14791 7.51102 5.91033 7.69749 5.72386C7.88396 5.53739 8.12154 5.4104 8.38018 5.35895C8.63882 5.30751 8.90691 5.33391 9.15055 5.43483C9.39418 5.53574 9.60242 5.70664 9.74893 5.92591C9.89544 6.14517 9.97363 6.40296 9.97363 6.66667C9.97363 7.02029 9.83316 7.35943 9.58311 7.60948C9.33306 7.85952 8.99392 8 8.6403 8Z" fill="#AAAAAA" />
                                <path d="M8.64083 15.9994C8.07946 16.0023 7.52557 15.8706 7.02554 15.6154C6.52551 15.3602 6.0939 14.989 5.76683 14.5327C3.22617 11.028 1.9375 8.39338 1.9375 6.70138C1.9375 4.92355 2.64374 3.21853 3.90086 1.96141C5.15798 0.704289 6.863 -0.00195312 8.64083 -0.00195312C10.4187 -0.00195312 12.1237 0.704289 13.3808 1.96141C14.6379 3.21853 15.3442 4.92355 15.3442 6.70138C15.3442 8.39338 14.0555 11.028 11.5148 14.5327C11.1878 14.989 10.7562 15.3602 10.2561 15.6154C9.75609 15.8706 9.2022 16.0023 8.64083 15.9994ZM8.64083 1.45338C7.24911 1.45497 5.91484 2.00853 4.93075 2.99263C3.94665 3.97673 3.39309 5.31099 3.3915 6.70271C3.3915 8.04272 4.6535 10.5207 6.94417 13.68C7.13863 13.9479 7.39375 14.1659 7.68864 14.3162C7.98354 14.4665 8.30983 14.5449 8.64083 14.5449C8.97183 14.5449 9.29813 14.4665 9.59302 14.3162C9.88792 14.1659 10.143 13.9479 10.3375 13.68C12.6282 10.5207 13.8902 8.04272 13.8902 6.70271C13.8886 5.31099 13.335 3.97673 12.3509 2.99263C11.3668 2.00853 10.0326 1.45497 8.64083 1.45338Z" fill="#AAAAAA" />
                            </g>
                        </svg>
                        <span className='text-[#AAAAAA] text-xs md:text-sm flex-shrink-0'>آدرس:</span>
                        <span className=' dark:text-white text-black text-xs md:text-sm line-clamp-1 min-w-0'>{Info.address}</span>
                    </div>
                </div>
                <div className='flex flex-row gap-3 mt-4 md:mt-0 items-center'>
                    <div className='max-w-[90px] w-full bg-[#7569FF] shadow-[0px_8px_16px_rgba(115,103,255,0.2)] group-hover:shadow-[#7569FF] flex justify-center rounded-[8px] px-2 py-1'>
                        <span className='text-white text-xs md:text-sm flex items-center flex-row-reverse gap-1 md:gap-2 whitespace-nowrap'>
                            {Info.rate ? Info.rate : 0}  ستاره
                            {Info.rate ? (<IoIosStar className="text-white" />) : (<IoIosStarOutline />)}
                        </span>
                    </div>
                    <div className='w-1 h-4 rounded-2xl dark:bg-[#DDDDDD] text-black '></div>
                    <div onClick={handleOpenChat} className='w-11 h-9 rounded-[12px] flex items-center hover:scale-110 cursor-pointer duration-300 justify-center px-3 dark:bg-[#393939] bg-[#dadadae9]'>
                        <BsChatDots size={18} className='dark:text-white text-black' />
                    </div>
                    <div onClick={CopyLink} className='w-11 h-9 rounded-[12px] flex items-center hover:scale-110 cursor-pointer duration-300 justify-center px-3 dark:bg-[#393939] bg-[#dadadae9]'>
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.103 2.18133L11.5803 0.608667C11.3933 0.416644 11.1699 0.263893 10.9231 0.159374C10.6762 0.0548549 10.411 0.000670954 10.143 0L6.99967 0C6.23154 0.000969683 5.48722 0.266727 4.89217 0.752479C4.29713 1.23823 3.88774 1.91428 3.73301 2.66667H3.66634C2.78261 2.66773 1.93538 3.01925 1.31049 3.64415C0.685596 4.26904 0.334066 5.11627 0.333008 6V12.6667C0.334066 13.5504 0.685596 14.3976 1.31049 15.0225C1.93538 15.6474 2.78261 15.9989 3.66634 16H7.66634C8.55007 15.9989 9.3973 15.6474 10.0222 15.0225C10.6471 14.3976 10.9986 13.5504 10.9997 12.6667V12.6C11.7521 12.4453 12.4281 12.0359 12.9139 11.4408C13.3996 10.8458 13.6654 10.1015 13.6663 9.33333V3.57333C13.6673 3.05361 13.4652 2.55408 13.103 2.18133ZM7.66634 14.6667H3.66634C3.13591 14.6667 2.6272 14.456 2.25213 14.0809C1.87705 13.7058 1.66634 13.1971 1.66634 12.6667V6C1.66634 5.46957 1.87705 4.96086 2.25213 4.58579C2.6272 4.21071 3.13591 4 3.66634 4V9.33333C3.6674 10.2171 4.01893 11.0643 4.64382 11.6892C5.26871 12.3141 6.11594 12.6656 6.99967 12.6667H9.66634C9.66634 13.1971 9.45563 13.7058 9.08055 14.0809C8.70548 14.456 8.19677 14.6667 7.66634 14.6667ZM10.333 11.3333H6.99967C6.46924 11.3333 5.96053 11.1226 5.58546 10.7475C5.21039 10.3725 4.99967 9.86377 4.99967 9.33333V3.33333C4.99967 2.8029 5.21039 2.29419 5.58546 1.91912C5.96053 1.54405 6.46924 1.33333 6.99967 1.33333H9.66634V2.66667C9.66634 3.02029 9.80682 3.35943 10.0569 3.60948C10.3069 3.85952 10.6461 4 10.9997 4H12.333V9.33333C12.333 9.86377 12.1223 10.3725 11.7472 10.7475C11.3721 11.1226 10.8634 11.3333 10.333 11.3333Z" fill="#AAAAAA" />
                        </svg>
                    </div>
                    <div className='w-11 h-9 rounded-[12px] flex items-center justify-center px-3 bg-[#8CFF45] hover:scale-109 cursor-pointer duration-300 hover:shadow-[#8CFF451F]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3333 12.667C11.3333 14.507 9.84 16.0003 8 16.0003H3.33333C1.49333 16.0003 0 14.507 0 12.667V8.00033C0 6.16033 1.49333 4.667 3.33333 4.667H4C4.36667 4.667 4.66667 4.967 4.66667 5.33367C4.66667 5.70033 4.36667 6.00033 4 6.00033H3.33333C2.23333 6.00033 1.33333 6.90033 1.33333 8.00033V12.667C1.33333 13.767 2.23333 14.667 3.33333 14.667H8C9.1 14.667 10 13.767 10 12.667C10 12.3003 10.3 12.0003 10.6667 12.0003C11.0333 12.0003 11.3333 12.3003 11.3333 12.667ZM15.42 3.927L11.8133 0.200332C11.56 -0.0663351 11.1333 -0.0730017 10.8733 0.186998C10.6133 0.446998 10.6 0.866998 10.86 1.127L14.2867 4.66033H8.66667C6.82667 4.66033 5.33333 6.15367 5.33333 7.99367V11.327C5.33333 11.6937 5.63333 11.9937 6 11.9937C6.36667 11.9937 6.66667 11.6937 6.66667 11.327V7.99367C6.66667 6.89367 7.56667 5.99367 8.66667 5.99367H14.28L10.8533 9.527C10.6 9.79367 10.6 10.2137 10.8667 10.467C10.9933 10.5937 11.1667 10.6537 11.3333 10.6537C11.5 10.6537 11.68 10.587 11.8133 10.4537L15.4133 6.74033C16.1933 5.96033 16.1933 4.69367 15.42 3.92033V3.927Z" fill="#363636" />
                        </svg>
                    </div>
                </div>
            </div>
            {openChat && (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <ReserveChat onClose={setOpenChat} sellerInfo={Info} />
                </div>
            )}
        </>
    )
}

export default TopOfDetail
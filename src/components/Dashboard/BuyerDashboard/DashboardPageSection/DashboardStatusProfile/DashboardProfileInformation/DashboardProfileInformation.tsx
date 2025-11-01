import Link from 'next/link'
import React, { FC } from 'react'
import { FaBookmark } from 'react-icons/fa6'
import ArrowLeftSVG from '../../../.././BuyerDashboardSVG/arrowLeftSVG';
import { IUserDetail } from '@/core/types/LandingPage/IUserDetail';

interface IProps {
    userInfo: IUserDetail
}
const DashboardProfileInformation: FC<IProps> = ({ userInfo }) => {
    return (
        <div className='
            bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px]
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
        '>
            <div className='px-2 py-2 w-full flex flex-col gap-1.5 h-full'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row gap-2.5 items-center'>
                        <FaBookmark size={24} />
                        <span className='dark:text-white text-black text-[20px] font-[400]'>وضعیت پروفایل شما</span>
                    </div>
                    <Link href='/dashboard-profile' className='flex flex-row gap-4.5 '>
                        <span className='
                                text-sm text-gray-600 dark:text-white
                                hover:text-gray-800 dark:hover:text-gray-200 
                                cursor-pointer transition-colors duration-300
                            '>
                            ویرایش
                        </span>
                        <ArrowLeftSVG />
                    </Link>
                </div>
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                <div className='mt-8 flex  sm:flex-row flex-col justify-between items-center'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-[36px] text-black dark:text-white'>{userInfo.additionalPercentage}%</span>
                        <p className='text-[16px] max-w-[70%] text-wrap text-black dark:text-white'>برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪ تکمیل شده باشد.</p>
                    </div>
                    <div className='relative w-[150px] h-[150px] flex justify-center items-center'>
                        <div className='absolute inset-0 rounded-full bg-[#D9D9D9] dark:bg-gray-700' />
                        <div
                            className='absolute inset-0 rounded-full'
                            style={{
                                background: `conic-gradient(
                                    from 0deg,
                                    #8CFF45 0%,
                                    #4ADE80 ${userInfo.additionalPercentage * 0.8}%,
                                    #22C55E ${userInfo.additionalPercentage}%,
                                    transparent ${userInfo.additionalPercentage}%,
                                    transparent 100%
                                )`,
                                mask: `radial-gradient(transparent 55px, black 56px)`,
                                WebkitMask: `radial-gradient(transparent 55px, black 56px)`,
                                transition: 'all 0.7s ease-out',
                            }}
                        />
                        <div className='absolute inset-0 flex justify-center items-center'>
                            <div className='bg-white dark:bg-[#1F2937] w-[110px] h-[110px] rounded-full flex flex-col justify-center items-center shadow-inner'>
                                <span className='text-2xl font-bold text-black dark:text-white'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardProfileInformation
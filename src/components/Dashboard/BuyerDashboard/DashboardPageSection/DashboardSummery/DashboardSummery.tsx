import { IDashboardSummery } from '@/core/types/Dashboard/IDashboard';
import React, { FC } from 'react'
import { LuPin } from "react-icons/lu";
import ArrowLeftSVG from '../../../BuyerDashboardSVG/arrowLeftSVG';

interface IProps{
    dashboardSummeryInfo:IDashboardSummery
}

const DashboardSummery:FC<IProps> = ({dashboardSummeryInfo}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
        <div className='
            bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
        '>
            <div className='max-w-[94%] mx-auto w-full flex flex-col gap-3 justify-between h-full'>
                <div className='flex flex-row gap-3 items-start'>
                    <div className='
                        bg-gray-200 dark:bg-[#2d2d2d]
                        pt-8 pb-2 px-3 
                        flex items-center justify-center 
                        rounded-bl-[12px] rounded-br-[12px]
                        transition-colors duration-300
                    '>
                        <LuPin size={24} className='rotate-[40deg]'/>
                    </div>
                    <div className='flex flex-col gap-1 flex-1 mt-2'>
                        <div className='text-2xl sm:text-[20px] font-[600] text-gray-800 dark:text-white transition-colors duration-300'>
                            {dashboardSummeryInfo.bookings.bookingCount}
                        </div>
                        <div className='text-sm sm:text-[14px] font-[400] text-gray-600 dark:text-gray-300 transition-colors duration-300'>
                            کل رزرو ها
                        </div>
                    </div>
                </div>
                
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                
                <div className='flex flex-row justify-between items-center mb-3 cursor-pointer'>
                    <span className='
                        text-sm text-gray-600 dark:text-white
                        hover:text-gray-800 dark:hover:text-gray-200 
                        cursor-pointer transition-colors duration-300
                    '>
                        مشاهده همه
                    </span>
                    <div>
                        <ArrowLeftSVG/>
                    </div>
                </div>
            </div>
        </div>
        <div className='
            bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
        '>
            <div className='max-w-[94%] mx-auto w-full flex flex-col gap-3 justify-between h-full'>
                <div className='flex flex-row gap-3 items-start'>
                    <div className='
                        bg-gray-200 dark:bg-gray-700 
                        pt-8 pb-2 px-3 
                        flex items-center justify-center 
                        rounded-bl-[12px] rounded-br-[12px]
                        transition-colors duration-300
                    '>
                        <LuPin size={24} className='rotate-[40deg]'/>
                    </div>
                    <div className='flex flex-col gap-1 flex-1 mt-2'>
                        <div className='text-2xl sm:text-[20px] font-[600] text-gray-800 dark:text-white transition-colors duration-300'>
                            {dashboardSummeryInfo.bookings.conformedBookings}
                        </div>
                        <div className='text-sm sm:text-[14px] font-[400] text-gray-600 dark:text-gray-300 transition-colors duration-300'>
                            رزرو های فعال
                        </div>
                    </div>
                </div>
                
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                
                <div className='flex flex-row justify-between items-center mb-3 cursor-pointer'>
                    <span className='
                        text-sm text-gray-600 dark:text-white
                        hover:text-gray-800 dark:hover:text-gray-200 
                        cursor-pointer transition-colors duration-300
                    '>
                        مشاهده همه
                    </span>
                    <div>
                        <ArrowLeftSVG/>
                    </div>
                </div>
            </div>
        </div>
        <div className='
            bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
        '>
            <div className='max-w-[94%] mx-auto w-full flex flex-col gap-3 justify-between h-full'>
                <div className='flex flex-row gap-3 items-start'>
                    <div className='
                        bg-gray-200 dark:bg-gray-700 
                        pt-8 pb-2 px-3 
                        flex items-center justify-center 
                        rounded-bl-[12px] rounded-br-[12px]
                        transition-colors duration-300
                    '>
                        <LuPin size={24} className='rotate-[40deg]'/>
                    </div>
                    <div className='flex flex-col gap-1 flex-1 mt-2'>
                        <div className='text-2xl sm:text-[20px] font-[600] text-gray-800 dark:text-white transition-colors duration-300'>
                            {dashboardSummeryInfo.bookings.pendingBookings}
                        </div>
                        <div className='text-sm sm:text-[14px] font-[400] text-gray-600 dark:text-gray-300 transition-colors duration-300'>
                            رزرو های پرداخت نشده
                        </div>
                    </div>
                </div>
                
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                
                <div className='flex flex-row justify-between items-center mb-3 cursor-pointer'>
                    <span className='
                        text-sm text-gray-600 dark:text-white
                        hover:text-gray-800 dark:hover:text-gray-200 
                        cursor-pointer transition-colors duration-300
                    '>
                        مشاهده همه
                    </span>
                    <div>
                        <ArrowLeftSVG/>
                    </div>
                </div>
            </div>
        </div>
        <div className='
            bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
        '>
            <div className='max-w-[94%] mx-auto w-full flex flex-col gap-3 justify-between h-full'>
                <div className='flex flex-row gap-3 items-start'>
                    <div className='
                        bg-gray-200 dark:bg-gray-700 
                        pt-8 pb-2 px-3 
                        flex items-center justify-center 
                        rounded-bl-[12px] rounded-br-[12px]
                        transition-colors duration-300
                    '>
                        <LuPin size={24} className='rotate-[40deg]'/>
                    </div>
                    <div className='flex flex-col gap-1 flex-1 mt-2'>
                        <div className='text-2xl sm:text-[20px] font-[600] text-gray-800 dark:text-white transition-colors duration-300'>
                            {dashboardSummeryInfo.averageRating}
                        </div>
                        <div className='text-sm sm:text-[14px] font-[400] text-gray-600 dark:text-gray-300 transition-colors duration-300'>
                            میانگین امتیاز
                        </div>
                    </div>
                </div>
                
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                
                <div className='flex flex-row justify-between items-center mb-3 cursor-pointer'>
                    <span className='
                        text-sm text-gray-600 dark:text-white
                        hover:text-gray-800 dark:hover:text-gray-200 
                        cursor-pointer transition-colors duration-300
                    '>
                        مشاهده همه
                    </span>
                    <div>
                        <ArrowLeftSVG />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardSummery
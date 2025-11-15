import { IDashboardFinancial } from '@/core/types/SellerDashboard/IDashboard';
import React, { FC } from 'react'
import { LuPin } from "react-icons/lu";

interface IProps {
    dashboardSummeryInfo: IDashboardFinancial
}

const FinancialManagementSummery: FC<IProps> = ({ dashboardSummeryInfo }) => {
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
                            <LuPin size={24} className='rotate-[40deg]' />
                        </div>
                        <div className='flex flex-col gap-1 flex-1 mt-2 h-[130px] justify-between px-2 py-5'>
                            <div className='text-sm sm:text-[16px] font-[400] text-black dark:text-gray-300 transition-colors duration-300'>
                                درآمد ماه جاری
                            </div>
                            <div className='text-2xl sm:text-[20px] font-[600] text-gray-800 dark:text-white transition-colors duration-300 '>
                                {dashboardSummeryInfo.totalCurrentMonthAmount} تومان
                            </div>
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
                        bg-gray-200 dark:bg-[#2d2d2d]
                        pt-8 pb-2 px-3 
                        flex items-center justify-center 
                        rounded-bl-[12px] rounded-br-[12px]
                        transition-colors duration-300
                    '>
                            <LuPin size={24} className='rotate-[40deg]' />
                        </div>
                        <div className='flex flex-col gap-1 flex-1 mt-2 h-[130px] justify-between px-2 py-5'>
                            <div className='text-sm sm:text-[16px] font-[400] text-black dark:text-gray-300 transition-colors duration-300'>
                                درآمد ماه قبل
                            </div>
                            <div className='text-2xl sm:text-[20px] font-[600] text-gray-800 dark:text-white transition-colors duration-300 '>
                                {dashboardSummeryInfo.totalPerviousMonthAmount} تومان
                            </div>
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
                        bg-gray-200 dark:bg-[#2d2d2d]
                        pt-8 pb-2 px-3 
                        flex items-center justify-center 
                        rounded-bl-[12px] rounded-br-[12px]
                        transition-colors duration-300
                    '>
                            <LuPin size={24} className='rotate-[40deg]' />
                        </div>
                        <div className='flex flex-col gap-1 flex-1 mt-2 h-[130px] justify-between px-2 py-5'>
                            <div className='text-sm sm:text-[16px] font-[400] text-black dark:text-gray-300 transition-colors duration-300'>
                                درآمد کل
                            </div>
                            <div className='text-2xl sm:text-[20px] font-[600] text-gray-800 dark:text-white transition-colors duration-300 '>
                                {dashboardSummeryInfo.totalAmount} تومان
                            </div>
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
                        bg-gray-200 dark:bg-[#2d2d2d]
                        pt-8 pb-2 px-3 
                        flex items-center justify-center 
                        rounded-bl-[12px] rounded-br-[12px]
                        transition-colors duration-300
                    '>
                            <LuPin size={24} className='rotate-[40deg]' />
                        </div>
                        <div className='flex flex-col gap-1 flex-1 mt-2 h-[130px] justify-between px-2 py-5'>
                            <div className='text-sm sm:text-[16px] font-[400] text-black dark:text-gray-300 transition-colors duration-300'>
                                موجودی قابل برداشت
                            </div>
                            <div className='text-2xl sm:text-[20px] font-[600] text-gray-800 dark:text-white transition-colors duration-300 '>
                                {dashboardSummeryInfo.totalPayments} تومان
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialManagementSummery
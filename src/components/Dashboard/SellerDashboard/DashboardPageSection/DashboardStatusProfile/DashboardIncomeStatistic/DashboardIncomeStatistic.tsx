import { getDashboardFinance } from '@/core/api/SellerDashboard/Dashboard';
import React from 'react'
import { HiNewspaper } from "react-icons/hi";

const DashboardIncomeStatistic = async () => {
    const getFinance = await getDashboardFinance()
    return (
        <div className='
            bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px]
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
            p-4
        '>
            <div className='flex flex-col gap-1.5'>
                <div className='flex items-center gap-2.5'>
                    <HiNewspaper size={24} />
                    <span className='text-black dark:text-white text-xl font-normal'>آمار درآمد ها </span>
                </div>
                <div className="w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300"></div>

                <div className='mt-2 flex flex-col gap-15'>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='flex flex-row gap-2.5 items-center'>
                            <div className='flex rounded-full w-4 h-4 bg-[#8CFF45]'></div>
                            <span className='font-[600]'>درآمد ماه جاری</span>
                        </div>
                        <div className='bg-[#8CFF45] py-1.5 px-2 text-black rounded-[12px]'>
                            {getFinance.totalAmount} تومان
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <div className='flex flex-row gap-2.5 items-center'>
                            <div className='flex rounded-full w-4 h-4 bg-[#ECECEC]'></div>
                            <span className='font-[600]'>درآمد کل</span>
                        </div>
                        <div className='bg-[#ECECEC] py-1.5 px-2 text-black rounded-[12px]'>
                            {getFinance.totalPayments} تومان
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardIncomeStatistic
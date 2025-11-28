import React, { FC } from 'react'
import HouseManagemntFilter from './TourFilter/TourFilter'
import TourManagementList from './TourManagementList/TourManagementList'
import TourManagementPagination from './TourManagementPagination/TourManagementPagination'
import { IoAddCircleOutline } from "react-icons/io5";
import Link from 'next/link'
import { GetTourList } from '@/core/api/Tours/Tours';
interface IProps {
    searchParams?: { [key: string]: string }
}
const DashboardTourPageSection:FC<IProps> = async ({searchParams}) => {
    const sellerTours = await GetTourList(searchParams)
    return (
        <div className='flex flex-col w-full gap-3 px-3 py-3 sm:max-h-full md:max-h-full lg:max-h-full h-full overflow-x-auto custom-scrollbar overflow-y-auto bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
            <HouseManagemntFilter />
            <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
            <div className='flex flex-col h-full justify-between'>
                <TourManagementList userSellerTourInfo={sellerTours} searchParams={searchParams} />
                <TourManagementPagination userSellerTourInfo={sellerTours} />
                <Link href={"/seller/dashboard-house-management/create-house"} className='flex cursor-pointer flex-row text-black items-center sm:w-full max-w-[146px] w-full rounded-2xl py-2 px-4 bg-[#8CFF45] gap-2'>
                    <IoAddCircleOutline size={20} />
                    افزودن ملک
                </Link>
            </div>
        </div>
    )
}

export default DashboardTourPageSection
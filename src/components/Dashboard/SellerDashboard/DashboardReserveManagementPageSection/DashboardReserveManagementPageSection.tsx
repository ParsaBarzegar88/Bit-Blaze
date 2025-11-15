import React, { FC } from 'react'
import ReserveFilter from './ReserveFilter/ReserveFilter'
import ReserveList from './ReserveList/ReserveList'
import ReservePagination from './ReservePagination/ReservePagination'
import { getHousesReserveDetail } from '@/core/api/HouseReserve/Detail/Detail'
import { getAllUserReserve } from '@/core/api/SellerDashboard/ReserveManagement'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { IReserveManagement } from '@/core/types/SellerDashboard/IReserveManagement'
interface IProps {
    searchParams?: { [key: string]: string }
}
const DashboardReserveManagementPageSection: FC<IProps> = async ({ searchParams = {} }) => {
    const cookieStore = await cookies()
    let userId: string | undefined;
    const accessToken = cookieStore.get('accessToken')?.value
    if (accessToken) {
        const findUserId = jwt.decode(accessToken) as { id: string };
        userId = findUserId.id;
    }
    const userReserve = await getAllUserReserve(String(userId), searchParams)
    const housesDetail = await userReserve.bookings?.map((item: IReserveManagement) => getHousesReserveDetail(String(item.houseId)))
    let enrichedData
    if(housesDetail){
        const houseDetailPromise = await Promise.all(housesDetail)
        enrichedData = userReserve.bookings?.map((reserve: IReserveManagement, index: number) => ({
            ...reserve,
            houseDetail: houseDetailPromise[index],
        }))
    }
    return (
        <div className='flex flex-col w-full gap-3 px-3 py-3 sm:max-h-full md:max-h-full lg:max-h-full h-full overflow-x-hidden custom-scrollbar overflow-y-auto bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
            <ReserveFilter />
            <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
            <div className='flex flex-col h-full justify-between'>
                <ReserveList userReserveInfo={enrichedData} searchParams={searchParams} />
                <ReservePagination userReserveCount={userReserve} />
            </div>
        </div>
    )
}

export default DashboardReserveManagementPageSection
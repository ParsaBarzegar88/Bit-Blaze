import React, { FC } from 'react'
import ReserveFilter from './ReserveFilter/ReserveFilter'
import ReserveList from './ReserveList/ReserveList'
import ReservePagination from './ReservePagination/ReservePagination'
import { getUserReserves } from '@/core/api/Dashboard/Reserve'
import { getHousesReserveDetail } from '@/core/api/HouseReserve/Detail/Detail'
import { IUserReserve } from '@/core/types/Dashboard/IReserve'

interface IProps {
    searchParams?: { [key: string]: string }
}
const DashboardReservePageSection: FC<IProps> = async ({ searchParams = {} }) => {
    const userReserve = await getUserReserves(searchParams)
    const housesDetail = await userReserve.data.map((item: IUserReserve) => getHousesReserveDetail(String(item.houseId)))
    const houseDetailPromise = await Promise.all(housesDetail)
    const enrichedData = userReserve.data.map((reserve:IUserReserve, index:number) => ({
        ...reserve,
        houseDetail: houseDetailPromise[index],
    }))
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

export default DashboardReservePageSection
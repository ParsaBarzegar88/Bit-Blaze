'use client'
import { formatToPersianDate } from '@/utils/date'
import React, { FC, useState } from 'react'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'
import { IoRemoveCircleOutline } from "react-icons/io5";
import { IoIosMore } from 'react-icons/io'
import ReserveMoreSection from './ReserveMoreSection/ReserveMoreSection'
import ReserveHouseDetail from './ReserveMoreSection/ReserveHouseDetail/ReserveHouseDetail'
import { IReserveManagement } from '@/core/types/SellerDashboard/IReserveManagement'
interface IProps {
    userReserveInfo: IReserveManagement[];
    searchParams?: { [key: string]: string }
}
const ReserveList: FC<IProps> = ({ userReserveInfo, searchParams = {} }) => {
    const [openReserveId, setOpenReserveId] = useState<string | null>(null)
    const [openHouseDetail, setOpenHouseDetail] = useState<boolean>(false)
    const handleOpenReserveMode = (id: string) => {
        setOpenReserveId(prev => prev === id ? null : id)
    }
    const handleOpenHouseDetail = () => {
        setOpenHouseDetail(!openHouseDetail)
    }
    const FindHouseDetailById = userReserveInfo?.find(item => String(item.id) === openReserveId)
    return (
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="w-full flex flex-col gap-3 sm:gap-2 min-w-[900px]">
                <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-7 gap-2 py-3 px-2 sm:py-2 sm:px-3 rounded-[10px]">
                    <div className="col-span-1 sm:col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        نام ملک
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        اطلاعات مسافر
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        تاریخ رزرو
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        مبلغ
                    </div>
                    <div className="sm:block col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        وضعیت رزرو
                    </div>
                    <div className="sm:block col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    {userReserveInfo.length > 0 ? (
                        userReserveInfo.filter((item) => {
                            const query = searchParams?.search?.trim()
                            if (!query) return true
                            const lowerCase = query.toLocaleLowerCase()
                            const houseTitle = item.houseDetail.title.trim().toLocaleLowerCase() || ''
                            return houseTitle.includes(lowerCase)
                        }).map((item, index, array) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-7 gap-2 sm:gap-7 items-center py-6 px-2 sm:py-6 sm:px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300"
                            >
                                <div className="col-span-1 sm:col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.house.title}
                                </div>
                                <div className="col-span-1 sm:col-span-1 text-center font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.traveler_details.map((item, index) => (
                                        <span key={index}>
                                            {index >= 1 ? ' , ' + item.firstName : item.firstName}
                                        </span>
                                    ))}
                                </div>
                                <div className="col-span-1 text-center flex justify-center items-center">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-300">
                                        {formatToPersianDate(item.reservedDates[0].value)}
                                    </span>
                                </div>
                                <div className="col-span-1 text-center flex justify-center items-center">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {item.house.price.toLocaleString()} ت
                                    </span>
                                </div>
                                <div className="col-span-1 text-center flex justify-center items-center">
                                    <div
                                        className={`flex flex-row gap-1 sm:gap-2 items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm 
                                        ${item.status === 'pending'
                                                ? "bg-[#FAC100] text-gray-800"
                                                : item.status === 'canceled'
                                                    ? "bg-[#FF989A] text-gray-800"
                                                    : "bg-[#8CFF45] text-gray-800"
                                            }
                                        `}

                                    >
                                        {item.status === 'pending' ? (
                                            <IoRemoveCircleOutline size={20} className="text-gray-800 text-xs sm:text-sm" />
                                        ) : item.status === 'canceled' ? (
                                            <FaTimes className="text-gray-800 text-xs sm:text-sm" />
                                        ) : (
                                            <FaCheckCircle className="text-gray-800 text-xs sm:text-sm" />
                                        )}
                                        <span className="whitespace-nowrap">
                                            {item.status === 'pending' ? 'در حال انتظار' : item.status === 'canceled' ? 'تایید نشده' : 'تایید شده'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex relative col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium items-center justify-center">
                                    <div className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] cursor-pointer transition-colors duration-200">
                                        <IoIosMore onClick={() => handleOpenReserveMode(String(item.id))} size={25} className="text-gray-600 dark:text-gray-400" />
                                    </div>
                                    {openReserveId === String(item.id) && (
                                        <div className={`absolute left-1/2 -translate-x-1/2 z-10 ${index === array.length - 1
                                            ? "bottom-full mb-11"
                                            : "top-full mt-5"
                                            }`}>
                                            <ReserveMoreSection openHouseDetailFunction={handleOpenHouseDetail} reserveId={String(FindHouseDetailById?.id)} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
                            هیچ رزروی یافت نشد
                        </div>
                    )}
                </div>
            </div>
            {openHouseDetail && FindHouseDetailById && (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <ReserveHouseDetail closeHouseDetail={setOpenHouseDetail} houseDetail={FindHouseDetailById} />
                </div>
            )}
        </div>
    )
}

export default ReserveList
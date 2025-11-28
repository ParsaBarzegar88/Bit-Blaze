'use client'
import React, { FC, useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import { ITours, IToursItem } from '@/core/types/Tours/ITours'
import { formatToPersianDate } from '@/utils/date'
import TourManagementMoreSection from './TourManagementMoreSection/TourManagementMoreSection'

interface IProps {
    userSellerTourInfo: ITours;
    searchParams?: { [key: string]: string }
}

const TourManagementList: FC<IProps> = ({ userSellerTourInfo, searchParams = {} }) => {
    const [openTourId, setOpenTourId] = useState<string | null>(null)
    
    const handleOpenMoreMode = (id: string) => {
        setOpenTourId(prev => prev === id ? null : id)
    }

    const formatPrice = (price: string) => {
        return `${parseInt(price).toLocaleString('fa-IR')} تومان`
    }

    const allTours: IToursItem[] = userSellerTourInfo.tours || [];

    return (
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="w-full flex flex-col gap-3 sm:gap-2 min-w-[800px]">
                <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-8 gap-2 py-3 px-2 rounded-[10px]">
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        نام تور
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        تاریخ شروع
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        مقصد
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        قیمت
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        برچسب
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        تعداد ثبت‌نامی‌ها
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    {allTours && allTours.length > 0 ? (
                        allTours.filter((tour) => {
                            const query = searchParams?.search?.trim()
                            if (!query) return true
                            const lowerCase = query.toLocaleLowerCase()
                            const tourTitle = tour.title?.trim().toLocaleLowerCase() || ''
                            const tourAddress = tour.address?.trim().toLocaleLowerCase() || ''
                            const tourTag = tour.tag?.trim().toLocaleLowerCase() || ''
                            
                            return tourTitle.includes(lowerCase) || 
                                   tourAddress.includes(lowerCase) || 
                                   tourTag.includes(lowerCase)
                        }).map((tour) => (
                            <div
                                key={tour.id}
                                className="grid grid-cols-8 gap-2 items-center py-2 px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300"
                            >
                                <div className="col-span-1 text-right rounded-[12px] w-full h-[107px] line-clamp-1 overflow-hidden">
                                    {tour.photos && tour.photos.length > 0 && tour.photos[0]?.trim() !== '' ? (
                                        <img 
                                            src={tour.photos[0]} 
                                            alt={tour.title}
                                            className='w-full h-full object-cover rounded-[12px]' 
                                        />
                                    ) : (
                                        <div className='w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center rounded-[12px]'>
                                            <div className='text-center text-gray-500 dark:text-gray-400'>
                                                <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className='text-xs'>بدون تصویر</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-2">
                                    {tour.title}
                                </div>
                                <div className="col-span-1 text-right flex">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {formatToPersianDate(tour.startDate)}
                                    </span>
                                </div>
                                <div className="col-span-1 text-right flex">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200 line-clamp-2">
                                        {tour.address}
                                    </span>
                                </div>
                                <div className="col-span-1 text-right flex">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {formatPrice(tour.price)}
                                    </span>
                                </div>
                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {tour.tag}
                                </div>
                                <div className="col-span-1 text-right flex">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {Array.isArray(tour.TourRegistrations) ? tour.TourRegistrations.length : 0} نفر
                                    </span>
                                </div>
                                <div className="flex relative col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium items-center justify-center">
                                    <div className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] cursor-pointer transition-colors duration-200">
                                        <IoIosMore 
                                            onClick={() => handleOpenMoreMode(String(tour.id))} 
                                            size={25} 
                                            className="text-gray-600 dark:text-gray-400" 
                                        />
                                    </div>
                                    {openTourId === String(tour.id) && (
                                        <div className={`absolute left-32 bottom-0 z-10`}>
                                            <TourManagementMoreSection 
                                                tourId={tour.id.toString()} 
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
                            هیچ توری یافت نشد
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TourManagementList
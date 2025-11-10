'use client'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import ReserveMoreSection from './ReserveMoreSection/FavoriteMoreSection'
import { IUserFavorites } from '@/core/types/Dashboard/IFavorite'
interface IProps {
    userFavoriteInfo: IUserFavorites;
    searchParams?: { [key: string]: string }
}
const FavoriteList: FC<IProps> = ({ userFavoriteInfo, searchParams = {} }) => {
    const [openFavoriteId, setOpenFavoriteId] = useState<string | null>(null)
    const handleOpenReserveMode = (id: string) => {
        setOpenFavoriteId(prev => prev === id ? null : id)
    }
    const FindHouseDetailById = userFavoriteInfo.data.find(item => item.house_id === openFavoriteId)
    return (
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="w-full flex flex-col gap-3 sm:gap-2">
                <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-5 gap-2 min-w-[600px] py-3 px-2  rounded-[10px]">
                    <div className="col-span-1 sm:col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        نام اقامتگاه
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        قیمت کل
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        آدرس
                    </div>
                    <div className="sm:block col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    {userFavoriteInfo ? (
                        userFavoriteInfo.data.filter((item) => {
                            const query = searchParams?.search?.trim()
                            if (!query) return true
                            const lowerCase = query.toLocaleLowerCase()
                            const houseTitle = item.house.title.trim().toLocaleLowerCase() || ''
                            return houseTitle.includes(lowerCase)
                        }).map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-5 gap-2 items-center py-2 px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300"
                            >
                                <div className="col-span-1 text-right bg-[#AAAAAA] rounded-[12px] w-full h-[107px] line-clamp-1">
                                    <Image src={item.house.photos !== null && item.house.photos.length > 0 && item.house.photos[0].trim() !== '' ? item.house.photos[0] : "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg"} width={500} height={500} className='w-full h-full object-cover rounded-[12px]' alt='HouseImage' />
                                </div>
                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.house.title}
                                </div>
                                <div className="col-span-1 text-center flex justify-center=">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {item.house.price.toLocaleString()} ت
                                    </span>
                                </div>
                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.house.address}
                                </div>
                                <div className="flex relative col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium items-center justify-center">
                                    <div className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] cursor-pointer transition-colors duration-200">
                                        <IoIosMore onClick={() => handleOpenReserveMode(String(item.house_id))} size={25} className="text-gray-600 dark:text-gray-400" />
                                    </div>
                                    {openFavoriteId === String(item.house_id) && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-10">
                                            <ReserveMoreSection reserveId={String(FindHouseDetailById?.house_id)} />
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
        </div>
    )
}

export default FavoriteList
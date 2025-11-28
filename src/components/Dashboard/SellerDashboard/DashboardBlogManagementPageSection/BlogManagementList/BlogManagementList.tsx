'use client'
import { IBlogs } from '@/core/types/Blogs/IBlogs'
import { formatToPersianDate } from '@/utils/date'
import Image from 'next/image'
import { FC, useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import HouseManagementMoreSection from './BlogManagementMoreSection/BlogManagementMoreSection'

interface IProps {
    userSellerBlogInfo: IBlogs ;
    searchParams?: { [key: string]: string }
}

const BlogManagementList: FC<IProps> = ({ userSellerBlogInfo, searchParams = {} }) => {
    const [openHouseId, setOpenHouseId] = useState<string | null>(null)

    const handleOpenReserveMode = (id: string) => {
        setOpenHouseId(prev => prev === id ? null : id)
    }

    const formatReadingTime = (seconds: number) => {
        const minutes = Math.ceil(seconds / 60)
        return `${minutes} دقیقه`
    }

    return (
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="w-full flex flex-col gap-3 sm:gap-2 min-w-[700px]">
                <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-7 gap-2 py-3 px-2 rounded-[10px]">
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        تصویر
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        شناسه
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        تاریخ ساخت
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        زمان مطالعه
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        عنوان
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        دسته‌بندی
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        عملیات
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    {userSellerBlogInfo ? (
                        userSellerBlogInfo.data?.filter((item) => {
                            const query = searchParams?.search?.trim()
                            if (!query) return true
                            const lowerCase = query.toLocaleLowerCase()
                            const blogTitle = item?.title?.trim().toLocaleLowerCase() || ''
                            return blogTitle.includes(lowerCase)
                        }).map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-7 gap-2 items-center py-2 px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300"
                            >
                                <div className="col-span-1 bg-[#AAAAAA] rounded-[12px] w-full h-[107px] overflow-hidden">
                                    <Image
                                        src={"/assets/BlogsImage/blog-t.jpg"}
                                        width={500}
                                        height={500}
                                        className='w-full h-full object-cover rounded-[12px]'
                                        alt='BlogImage'
                                    />
                                </div>

                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.id + "#"}
                                </div>

                                <div className="col-span-1 text-right">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {item?.created_at ? formatToPersianDate(item?.created_at): "تاریخ نامشخص"}
                                    </span>
                                </div>

                                <div className="col-span-1 text-right">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {item?.estimated_reading_time?.seconds ? formatReadingTime(item?.estimated_reading_time.seconds) : "نامشخص"}
                                    </span>
                                </div>

                                <div className="col-span-1 text-right">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200 line-clamp-2">
                                        {item.title}
                                    </span>
                                </div>

                                <div className="col-span-1 text-right">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {item.category_id || "بدون دسته"}
                                    </span>
                                </div>

                                <div className="flex relative col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium items-center justify-center">
                                    <div className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] cursor-pointer transition-colors duration-200">
                                        <IoIosMore
                                            onClick={() => handleOpenReserveMode(String(item.id))}
                                            size={25}
                                            className="text-gray-600 dark:text-gray-400"
                                        />
                                    </div>
                                    {openHouseId === String(item.id) && (
                                        <div className={`absolute left-32 bottom-0 z-10`}>
                                            <HouseManagementMoreSection 
                                                BlogId={String(item.id)} 
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
                            هیچ مقاله‌ای یافت نشد
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BlogManagementList
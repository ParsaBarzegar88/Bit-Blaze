import { IBookingData } from '@/core/types/bookingHouse/IBookingHouse';
import Image from 'next/image';
import React, { FC } from 'react'
import { FaStar } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { SlCalender } from "react-icons/sl";
import { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import Link from 'next/link';
import { FaBuilding } from "react-icons/fa6";

interface IProps {
    houseData: IBookingData;
}

const calculateDiscountPercentage = (originalPrice: string, discountedPrice: string | null): number => {
    if (!discountedPrice) return 0;

    const original = parseFloat(originalPrice);
    const discounted = parseFloat(discountedPrice);

    if (original <= 0 || discounted <= 0 || discounted >= original) return 0;

    const percentage = ((original - discounted) / original) * 100;
    return Math.round(percentage);
}

const HotelSection: FC<IProps> = ({ houseData }) => {
    const discountPercentage = calculateDiscountPercentage(houseData.info.price, houseData.info.discounted_price);

    const formatDate = (timestamp: number | string | Date) => {
        const date = new DateObject({
            date: typeof timestamp === 'number' ? timestamp : new Date(timestamp),
            calendar: persian,
            locale: persian_fa,
        });
        return date.format('YYYY/MM/DD ساعت HH:mm');
    };

    return (
        <div className='dark:bg-[#393939] bg-white dark:shadow-none shadow-lg border dark:border-[#333] border-gray-200 w-full rounded-[24px] p-4 sm:p-6'>
            <div className='flex flex-col lg:hidden gap-4'>
                <div className='flex flex-row gap-4 items-start w-full'>
                    {houseData.info.photos !== null ? (
                        <div className='min-w-[100px] w-[100px] h-[80px] rounded-2xl overflow-hidden'>
                            <Image
                                src={houseData.info.photos[0] === "" ? "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg" : houseData.info.photos[0]}
                                alt='Image'
                                width={100}
                                height={80}
                                className='object-cover w-full h-full'
                            />
                        </div>
                    ) : (
                        <div className='min-w-[100px] w-[100px] h-[80px] flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-2xl text-xs dark:text-gray-300 text-gray-600'>
                            عکسی وجود ندارد
                        </div>
                    )}
                    <div className='flex flex-col gap-2 flex-1'>
                        <div className='flex flex-row text-white text-xs font-[500] px-2 py-1 items-center justify-center gap-1 rounded-[12px] bg-[#7569FF] shadow-[0px_8px_16px_rgba(115,103,255,0.2)] w-fit'>
                            <FaStar size={12} />
                            {houseData.info.rate !== null ? houseData.info.rate : "0"} ستاره
                        </div>
                        <h2 className='dark:text-white text-black text-base font-[600] line-clamp-2'>
                            {houseData.info.title}
                        </h2>
                        <div className='flex flex-row gap-1 items-start'>
                            <IoLocationOutline size={16} className='dark:text-[#AAAAAA] text-gray-600 mt-0.5' />
                            <p className='dark:text-[#AAAAAA] text-gray-600 text-sm line-clamp-2 flex-1'>
                                آدرس : {houseData.info.address}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 py-2 border-t border-gray-300 dark:border-[#565656]'>
                    <div className='flex flex-row gap-2 items-center text-sm dark:text-gray-300 text-gray-700'>
                        <SlCalender size={14} />
                        <span>تاریخ ورود :</span>
                        <span className='dark:text-[#8CFF45] text-[#4f9623] text-sm'>
                            {formatDate(houseData.selectedDepartureDay)}
                        </span>
                    </div>
                    <div className='flex flex-row gap-2 items-center text-sm dark:text-gray-300 text-gray-700'>
                        <SlCalender size={14} />
                        <span>تاریخ خروج :</span>
                        <span className='dark:text-[#8CFF45] text-[#4f9623] text-sm'>
                            {formatDate(houseData.selectedReturnDay)}
                        </span>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center pt-2 border-t border-gray-300 dark:border-[#565656]'>
                    <div className='flex flex-row gap-2 items-center'>
                        {houseData.info.discounted_price ? (
                            <div className='flex flex-row gap-1.5 items-center'>
                                <p className='line-through text-[#AAAAAA] text-sm font-[600]'>
                                    {houseData.info.price} ت
                                </p>
                                <div className='dark:bg-[#FF5555] bg-red-500 text-xs font-[700] px-2 h-[22px] items-center rounded-full flex justify-center text-white'>
                                    {discountPercentage}%
                                </div>
                            </div>
                        ) : ""}
                        <div className='dark:text-[#8CFF45] text-[#4f9623] text-lg font-[600]'>
                            {houseData.info.discounted_price ? houseData.info.discounted_price : houseData.info.price} ت
                        </div>
                    </div>

                    <Link
                        href={`/house-reserve`}
                        className='w-[120px] transition duration-300 border border-[#4f9623] dark:border-[#8CFF45] rounded-[12px] h-[36px] justify-center text-[#4f9623] dark:text-[#8CFF45] flex flex-row gap-1 items-center text-sm font-[500] hover:bg-[#4f9623]/10 dark:hover:bg-[#8CFF45]/10'
                    >
                        <FaBuilding size={14} />
                        تغییر هتل
                    </Link>
                </div>
            </div>
            <div className='hidden lg:flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-4 items-center flex-1'>
                    {houseData.info.photos !== null ? (
                        <div className='min-w-[130px] w-[130px] h-[100px] rounded-2xl overflow-hidden'>
                            <Image
                                src={houseData.info.photos[0] === "" ? "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg" : houseData.info.photos[0]}
                                alt='Image'
                                width={130}
                                height={100}
                                className='object-cover w-full h-full'
                            />
                        </div>
                    ) : (
                        <div className='min-w-[130px] w-[130px] h-[100px] flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-2xl text-sm dark:text-gray-300 text-gray-600'>
                            عکسی وجود ندارد
                        </div>
                    )}

                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row text-white text-sm font-[500] px-3 py-1 items-center justify-center gap-1 rounded-[12px] bg-[#7569FF] shadow-[0px_8px_16px_rgba(115,103,255,0.2)] w-fit'>
                            <FaStar size={14} />
                            {houseData.info.rate !== null ? houseData.info.rate : "0"} ستاره
                        </div>
                        <h2 className='dark:text-white text-black text-lg font-[600] max-w-[250px]'>
                            {houseData.info.title}
                        </h2>
                        <div className='flex flex-row gap-2 items-center dark:text-[#AAAAAA] text-gray-600'>
                            <IoLocationOutline size={18} />
                            <p className='max-w-[220px] truncate text-sm'>
                                آدرس : {houseData.info.address}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-0.5 h-[80px] mx-4 dark:bg-[#565656] bg-gray-300'></div>
                <div className='flex flex-col gap-4 justify-center flex-1'>
                    <div className='flex flex-row gap-3 items-center text-sm dark:text-gray-300 text-gray-700'>
                        <SlCalender size={16} />
                        <span>تاریخ ورود :</span>
                        <span className='dark:text-[#8CFF45] text-[#4f9623] font-[500]'>
                            {formatDate(houseData.selectedDepartureDay)}
                        </span>
                    </div>
                    <div className='flex flex-row gap-3 items-center text-sm dark:text-gray-300 text-gray-700'>
                        <SlCalender size={16} />
                        <span>تاریخ خروج :</span>
                        <span className='dark:text-[#8CFF45] text-[#4f9623] font-[500]'>
                            {formatDate(houseData.selectedReturnDay)}
                        </span>
                    </div>
                </div>
                <div className='w-0.5 h-[80px] mx-4 dark:bg-[#565656] bg-gray-300'></div>
                <div className='flex flex-col gap-3 justify-center items-end flex-1'>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className='flex flex-row gap-2 items-center'>
                            <p className='line-through text-[#AAAAAA] text-base font-[600]'>
                                {houseData.info.price} ت
                            </p>
                            {discountPercentage > 0 && (
                                <div className='dark:bg-[#FF5555] bg-red-500 text-xs font-[700] w-[42px] h-[25px] items-center rounded-full flex justify-center text-white'>
                                    {discountPercentage}%
                                </div>
                            )}
                        </div>
                        <div className='dark:text-[#8CFF45] text-[#4f9623] text-xl font-[600]'>
                            {houseData.info.discounted_price ? houseData.info.discounted_price : houseData.info.price} ت
                        </div>
                    </div>

                    <Link
                        href={`/house-reserve`}
                        className='w-[140px] transition duration-300 border border-[#4f9623] dark:border-[#8CFF45] rounded-[14px] h-[40px] justify-center text-[#4f9623] dark:text-[#8CFF45] flex flex-row gap-2 items-center text-base font-[500] hover:bg-[#4f9623]/10 dark:hover:bg-[#8CFF45]/10'
                    >
                        <FaBuilding size={16} />
                        تغییر هتل
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HotelSection;
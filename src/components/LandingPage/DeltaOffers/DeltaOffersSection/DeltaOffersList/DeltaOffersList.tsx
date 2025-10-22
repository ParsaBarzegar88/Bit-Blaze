'use client'
import React, { FC } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { BiBuildingHouse } from "react-icons/bi";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IHousesData } from '@/core/types/LandingPage/IHouses';
import Image from 'next/image';

interface IProps {
    houseData: IHousesData
}
const calculateDiscountPercentage = (originalPrice: string, discountedPrice: string | null): number => {
    if (!discountedPrice) return 0;

    const original = parseFloat(originalPrice);
    const discounted = parseFloat(discountedPrice);

    if (original <= 0 || discounted <= 0 || discounted >= original) return 0;

    const percentage = ((original - discounted) / original) * 100;
    return Math.round(percentage);
}
const DeltaOffersList: FC<IProps> = ({ houseData }) => {
    const discountPercentage = calculateDiscountPercentage(houseData.price, houseData.discounted_price);
    return (
        <div className='w-full max-w-full mt-5 group mx-auto'>
            <div className='flex flex-col relative'>
                <div className='flex flex-row justify-between items-center relative'>
                    <div className='bg-[#FFFFFF] text-black transition-colors duration-300 group-hover:bg-[#2D2D2D] group-hover:text-[#FFFFFF] shadow-[0px_4px_12px_rgba(255,255,255,0.2)] z-[1] mr-3 translate-y-2 flex flex-row gap-1.5 items-center justify-center rounded-[10px] w-[67px] h-[32px]'>
                        <div className='mt-1 font-[700] text-[16px]'>
                            {houseData.rate ? houseData.rate : 0}
                        </div>
                        <FaStar />
                    </div>
                    <FaArrowLeftLong className='w-[45px] h-[22px] rounded-[8px] bg-[#393939] text-[#FFFFFF] group-hover:bg-[#58893a] dark:group-hover:bg-[#8CFF45] group-hover:text-[#363636] transition-all duration-300' size={25} />
                </div>
                <div className='bg-[#393939] dark:group-hover:bg-[#8CFF45] group-hover:bg-[#58893a] dark:group-hover:after:shadow-[6px_10px_0_0_rgba(140,255,69,1)]
                group-hover:after:shadow-[6px_10px_0_0_rgba(88,137,58,1)] group-hover:before:bg-[#58893a] dark:group-hover:before:bg-[#8CFF45] before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative w-full h-[180px] sm:h-[200px] mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-10 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-10 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(11deg)] after:top-[-1.2rem] after:right-[6.5rem] after:shadow-[6px_10px_0_0_rgba(57,57,57,1)]'>

                    <div className="absolute top-[-2.5rem] right-[5px] w-[5rem] h-[2rem] rounded-[14px] 
                        outline-[5px] outline-[#393939] 
                        dark:group-hover:outline-[#8CFF45] 
                        group-hover:outline-[#58893a] 
                        transition-all duration-300
                        "></div>
                    <div className='bg-[#444444] mt-2.5 max-w-[90%] max-h-[90%] w-full h-full rounded-[20px] m-auto'>
                        <Swiper
                            slidesPerView={1}
                            navigation={true}
                            pagination={{
                                clickable: true,
                                clickableClass: "readsad"
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="h-full cursor-pointer"
                        >
                            {houseData.photos !== null ? houseData.photos.map((img, index) => {
                                if (img === "") {
                                    return (
                                        <SwiperSlide key={index}><div className='w-full h-full flex justify-center items-center bg-[#444444] rounded-[20px]'>عکسی وجود ندارد</div></SwiperSlide>
                                    )
                                }
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='w-full h-full flex justify-center items-center bg-[#444444] rounded-[20px]'>
                                            <Image src={img} fill alt="Image" className='rounded-[20px]' />
                                        </div>
                                    </SwiperSlide>
                                )
                            }) :
                                <SwiperSlide><div className='w-full h-full flex justify-center items-center bg-[#444444] rounded-[20px]'>عکسی وجود ندارد</div></SwiperSlide>
                            }
                        </Swiper>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <h3 className='dark:text-[#FFFFFF] text-black font-[500] text-[14px] sm:text-[16px] mt-5 mr-1'>{houseData.title}</h3>
                    {houseData.discounted_price !== null ?
                        (
                            <div className='bg-[#FF5555] w-[52px] h-[32px] text-[#FFFFFF] text-[14px] sm:text-[16px] font-[600] mt-3 rounded-[12px]'>
                                <div className='m-auto flex justify-center items-center h-full'>
                                    {houseData.discounted_price !== null ?
                                        (
                                            <>
                                                {discountPercentage}%
                                            </>
                                        ) : (
                                            ""
                                        )}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                </div>
                <div className='flex flex-row gap-2 text-[#757575] dark:text-[#AAAAAA] mt-1 items-center'>
                    <CiLocationOn size={18} className='flex-shrink-0' />
                    <div className='mt-1 text-[12px] sm:text-[14px] truncate'>
                        {houseData.address}
                    </div>
                </div>
                <div className='flex flex-row gap-2 text-[#757575] dark:text-[#AAAAAA] mt-1 items-center'>
                    <BiBuildingHouse size={18} className='flex-shrink-0' />
                    <div className='mt-1 text-[12px] sm:text-[14px]'>
                        {houseData.rooms} خوابه ، {houseData.bathrooms} حمامه ، ظرفیت {houseData.capacity} نفر
                    </div>
                </div>
                <div className='bg-[#444444] group-hover:bg-[#58893a] dark:group-hover:bg-[#8CFF45] transition-all duration-300 group-hover:text-[#363636] text-[#AAAAAA] text-[14px] sm:text-[14px] mt-3 w-full p-2 flex flex-row justify-center items-center rounded-[12px]'>
                    <div className='flex flex-row gap-2 items-center'>
                        {houseData.discounted_price !== null ? (
                            <>
                                <div className='line-through group-hover:text-red-600 dark:group-hover:text-[#9A9A9A] transition-all duration-300'>
                                    {houseData.price}ت
                                </div>
                                <div className='w-[1px] bg-[#FFFFFF] h-[14px] group-hover:bg-[#363636] transition-all duration-300'></div>
                            </>
                        ) : ""}
                        <div className='text-[#FFFFFF] group-hover:text-[#363636] transition-all duration-300'>
                            {houseData.discounted_price ? houseData.discounted_price : houseData.price}ت
                            <span className='text-[#9A9A9A] group-hover:text-[#363636] transition-all duration-300'>/هرشب</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeltaOffersList
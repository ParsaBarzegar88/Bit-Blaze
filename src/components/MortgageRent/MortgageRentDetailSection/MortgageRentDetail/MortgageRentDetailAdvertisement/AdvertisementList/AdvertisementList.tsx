'use client'
import Image from 'next/image'
import React, { FC } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaArrowLeftLong, FaBed, FaCarSide, FaStar } from 'react-icons/fa6'
import { MdHotTub } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { IHousesData } from '@/core/types/LandingPage/IHouses'
import Link from 'next/link'
interface IProps {
    houseListDetail: IHousesData;
}
const AdvertisementList: FC<IProps> = ({ houseListDetail }) => {
    return (
        <div className='w-full mt-5 group mx-auto'>
            <div className='flex flex-col relative'>
                <div className='flex flex-row justify-between items-center relative'>
                    <div className='bg-[#FFFFFF] text-black transition-colors duration-300 group-hover:bg-[#2D2D2D] group-hover:text-[#FFFFFF] shadow-[0px_4px_12px_rgba(255,255,255,0.2)] z-[1] mr-3 translate-y-2 flex flex-row gap-1.5 items-center justify-center rounded-[10px] w-[67px] h-[32px]'>
                        <div className='mt-1 font-[700] text-[16px]'>
                            {houseListDetail.rate ? houseListDetail.rate : 0}
                        </div>
                        <FaStar />
                    </div>
                    <Link href={`/mortgage-rent/${houseListDetail.id}`}>
                        <FaArrowLeftLong className='w-[45px] h-[22px] rounded-[8px] bg-[#393939] text-[#FFFFFF] group-hover:bg-[#58893a] dark:group-hover:bg-[#8CFF45] group-hover:text-[#363636] transition-all duration-300' size={25} />
                    </Link>
                </div>
                <div className='bg-[#393939] group-hover:bg-[#58893a] dark:group-hover:bg-[#8CFF45] 
                group-hover:after:shadow-[6px_10px_0_0_rgba(88,137,58,1)] dark:group-hover:after:shadow-[6px_10px_0_0_rgba(140,255,69,1)]
                 dark:group-hover:before:bg-[#8CFF45] group-hover:before:bg-[#58893a] before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
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
                            {houseListDetail.photos !== null ? houseListDetail.photos.map((img, index) => {
                                if (img === "") {
                                    return (
                                        <SwiperSlide key={index}
                                        ><div className='w-full h-full flex justify-center items-center bg-[#444444] rounded-[20px]'>عکسی وجود ندارد</div></SwiperSlide>
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
                    <h3 className='dark:text-[#FFFFFF] text-black font-[500] text-[14px] sm:text-[16px] mt-5 mr-1'>{houseListDetail.title}</h3>
                </div>
                <div className='flex flex-row gap-2 text-[#757575] dark:text-[#AAAAAA] mt-1 items-center'>
                    <CiLocationOn size={18} className='flex-shrink-0' />
                    <div className='mt-1 text-[12px] sm:text-[14px] truncate'>
                        {houseListDetail.address}
                    </div>
                </div>
                <div className='flex flex-row flex-wrap justify-between text-[#757575] dark:text-[#AAAAAA] mt-1 items-center gap-2'>
                    <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                        <FaBed className='text-[12px]' />
                        {houseListDetail.rooms} خوابه
                    </div>
                    <div className='w-0.5 h-4 bg-[#AAAAAA] hidden sm:block'></div>
                    <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                        <FaCarSide className='text-[12px]' />
                        {houseListDetail.parking} پارکینگ
                    </div>
                    <div className='w-0.5 h-4 bg-[#AAAAAA] hidden sm:block'></div>
                    <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                        <MdHotTub className='mb-1 text-[12px]' />
                        {houseListDetail.bathrooms} حمام
                    </div>
                    <div className='w-0.5 h-4 bg-[#AAAAAA] hidden sm:block'></div>
                    <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                        <svg className='mb-1' width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.736 14.8353C15.3513 15.5533 14.606 16 13.7913 16H12C11.632 16 11.3333 15.702 11.3333 15.3333C11.3333 14.9647 11.632 14.6667 12 14.6667H13.7913C14.1187 14.6667 14.406 14.494 14.5607 14.206C14.7147 13.9173 14.6993 13.5827 14.5173 13.31C14.5033 13.2893 14.4907 13.268 14.4793 13.2453L12.9633 10.3053C12.8567 10.0987 12.8653 9.85134 12.9867 9.65267C13.108 9.454 13.3233 9.33334 13.556 9.33334H13.8253C13.8813 9.33334 13.9227 9.30867 13.9493 9.25934C13.976 9.21 13.9733 9.162 13.942 9.11467L12.0793 5.648C11.9687 5.44134 11.9747 5.19134 12.0947 4.99067C12.2147 4.79 12.432 4.66667 12.6667 4.66667C12.722 4.66667 12.764 4.642 12.79 4.594C12.812 4.55334 12.8147 4.514 12.798 4.47534L10.1373 1.37067C10.0793 1.31734 9.95067 1.282 9.82867 1.406L7.79533 3.76934C7.556 4.048 7.134 4.07934 6.85467 3.83934C6.576 3.59934 6.54467 3.178 6.78467 2.89934L8.85 0.501336C9.508 -0.169331 10.5227 -0.135331 11.118 0.467336C11.118 0.467336 13.8893 3.70134 13.9053 3.72667C14.198 4.18067 14.2193 4.75667 13.9613 5.23067C13.8687 5.40067 13.746 5.54734 13.602 5.66534L15.0847 8.42934C15.354 8.828 15.382 9.408 15.1253 9.888C14.9907 10.1393 14.7907 10.3413 14.552 10.476L15.6493 12.604C16.08 13.278 16.1147 14.1287 15.736 14.8353ZM10.6667 10.232V13C10.6667 14.654 9.32067 16 7.66667 16H3C1.346 16 0 14.654 0 13V10.232C0 9.2 0.466 8.244 1.27867 7.60667L3.27867 6.04134C4.488 5.094 6.178 5.09534 7.38733 6.04134L9.38733 7.60734C10.2 8.244 10.666 9.20067 10.666 10.2327L10.6667 10.232ZM9.33333 10.232C9.33333 9.61267 9.054 9.03867 8.566 8.65667L6.566 7.09134C6.20333 6.808 5.768 6.66534 5.33333 6.66534C4.89867 6.66534 4.46333 6.80734 4.10067 7.092L2.10067 8.65667C1.61333 9.03867 1.33333 9.61334 1.33333 10.232V13C1.33333 13.9193 2.08133 14.6667 3 14.6667H7.66667C8.58533 14.6667 9.33333 13.9193 9.33333 13V10.232ZM6 10H4.66667C4.29867 10 4 10.2987 4 10.6667V12C4 12.368 4.29867 12.6667 4.66667 12.6667H6C6.368 12.6667 6.66667 12.368 6.66667 12V10.6667C6.66667 10.2987 6.368 10 6 10Z" fill="#AAAAAA" />
                        </svg>
                        {houseListDetail.yard_type}
                    </div>
                </div>
                <div className='bg-[#444444] group-hover:bg-[#58893a] dark:group-hover:bg-[#8CFF45] transition-all duration-300 group-hover:text-[#363636] text-[#AAAAAA] text-[14px] sm:text-[16px] mt-3 w-full p-2 rounded-[12px]'>
                    <div className='flex flex-row justify-between p-1'>
                        <p>قیمت خرید:</p>
                        <div className='flex flex-row text-[#FFFFFF] group-hover:text-[#363636] transition-all duration-300'>
                            {houseListDetail.price}ت
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertisementList
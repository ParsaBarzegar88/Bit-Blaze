'use client'
import React, { FC } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import BuySellBuildingList from './BuySellBuildingList/BuySellBuildingList';
import ArrowTriangleGreenLeftSVG from '../../landingPageSVG/arrowTriangleGreenLeftSVG';
import { IHouses } from '@/core/types/LandingPage/IHouses';

interface IProps{
    house:IHouses;
}
const BuySellBuilding:FC<IProps> = ({house}) => {
    return (
        <div className='flex flex-col max-w-[98%] w-full m-auto justify-center items-center'>
            <div className='flex flex-row dark:fill-[#8CFF45] fill-[#58893a] justify-center lg:justify-start mb-1 max-w-[98%] w-full gap-3 mt-44 lg:mt-44 text-[#58893a] dark:text-[#8CFF45] items-center font-[500] text-[14px] lg:text-[16px]'>
                خونه از خودت میخوای !
                <div className='hidden lg:flex'>
                    <ArrowTriangleGreenLeftSVG/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center w-full mb-5 gap-4 lg:gap-0'>
                <div className='flex flex-row gap-5 items-center'>
                    <h2 className="dark:text-[#FFFFFF] text-black text-[20px] lg:text-[26px] font-[500] text-center lg:text-right">
                        <b className='text-[24px] lg:text-[30px]'>خرید و فروش ملک</b> در دلتا
                    </h2>
                </div>
                <div className='border dark:border-[#FFFFFF] border-black dark:text-[#FFFFFF] rounded-[12px] items-center justify-center gap-1 flex flex-row w-[130px] h-[36px] cursor-pointer hover:bg-[#000000] hover:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#000000] transition-all duration-300'>
                    مشاهده همه
                    <MdOutlineKeyboardArrowLeft />
                </div>
            </div>
            <div className='flex flex-row justify-between max-w-[98%] h-[500px] animate-fade mb-5 w-full'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 80
                        }
                    }}
                    rewind={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet"></span>`;
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper w-full"
                >
                    {house.houses.map((houses , index) => {
                        return(
                            <SwiperSlide key={index}>
                                    <BuySellBuildingList housesData={houses} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className="absolute left-[-98px] z-[1] transform -translate-y-1/2 w-[120px] h-[120px] lg:w-[218px] lg:h-[218px] blur-[50px] bg-[#8CFF45]/25  dark:bg-[#8CFF45]/15 rounded-full flex items-center justify-start p-4"></div>
        </div>
    )
}

export default BuySellBuilding
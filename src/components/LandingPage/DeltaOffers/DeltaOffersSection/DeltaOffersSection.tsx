'use client'
import React, { FC } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import DeltaOffersList from './DeltaOffersList/DeltaOffersList';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ClockSVG from '../../landingPageSVG/clockSVG';
import ArrowTriangleGreenLeftSVG from '../../landingPageSVG/arrowTriangleGreenLeftSVG';
import { IHouses } from '@/core/types/LandingPage/IHouses';

interface IProps{
    houses:IHouses;
}

const DeltaOffersSection:FC<IProps> = ({houses}) => {
    return (
        <div className='mt-20 lg:mt-32 mx-auto max-w-[95%] w-full flex flex-col justify-center items-center gap-5 relative px-4 lg:px-0'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row items-center justify-center gap-2 w-[140px] lg:w-[150px] h-[36px] lg:h-[40px] rounded-[16px] shadow-[0px_4px_12px_rgba(255,85,85,0.2)] bg-[#FF5555] text-[#FFFFFF] mr-5 z-[1]'>
                    <div className='mt-1 text-[14px] lg:text-[16px]'>
                        12:32:25
                    </div>
                    <ClockSVG/>
                </div>
                <div className='flex flex-col'>
                    <div className='bg-[#2D2D2D] relative w-full h-fit rounded-bl-[40px] rounded-br-[40px] rounded-tl-[40px] 
                                    before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] before:content-[""] 
                                    before:w-56 before:h-16 before:-translate-y-16 before:absolute before:top-0 
                                    before:right-0 before:rounded-tr-[20px] before:bg-[#2D2D2D] after:absolute 
                                    after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] after:transform-[rotate(11deg)] 
                                    after:top-[-1.2rem] after:right-[13.5rem] after:shadow-[6px_10px_0_0_rgba(45,45,45,1)]
                                    [&_.second-before]:absolute [&_.second-before]:content-[""] [&_.second-before]:w-[10.4rem] 
                                    [&_.second-before]:h-[2rem] [&_.second-before]:bg-transparent [&_.second-before]:rounded-[14px]
                                    [&_.second-before]:outline-[5px] [&_.second-before]:outline-[#2D2D2D]
                                    [&_.second-before]:top-[-3.8rem] [&_.second-before]:right-[0.4rem]
                                    '>
                        <div className='flex flex-col gap-5 mt-5 max-w-[98%] w-full mx-auto mb-6'>
                            <div className="second-before"></div>
                            <h3 className='text-[#8CFF45] text-[14px] lg:text-[16px] font-[500] flex flex-row gap-2 items-center justify-center lg:justify-start'>
                                بهترین تخفیف
                                <div className='hidden lg:flex'>
                                    <ArrowTriangleGreenLeftSVG/>
                                </div>
                            </h3>
                            <div className='flex flex-col lg:flex-row w-full justify-between items-center gap-4 lg:gap-0'>
                                <h2 className='font-[200] text-[24px] lg:text-[32px] text-[#FFFFFF] text-center lg:text-right'>
                                    <b className='font-[700] text-[24px] lg:text-[32px]'>پیشنهاد های ویژه</b> دلتا
                                </h2>
                                <div className='border border-[#FFFFFF] text-[#FFFFFF] rounded-[12px] items-center justify-center gap-1 flex flex-row w-[130px] h-[36px] cursor-pointer hover:bg-[#FFFFFF] hover:text-[#000000] transition-all duration-300'>
                                    مشاهده همه
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                            </div>
                            <div className='flex flex-row justify-between max-w-[98%] h-[500px] animate-fade w-full'>
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
                                    {houses.houses.map((house , index) => {
                                        return(
                                            <SwiperSlide key={index}>
                                                <DeltaOffersList houseData={house} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute right-[-50px] lg:right-[-109px] top-2 transform -translate-y-1/2 w-[120px] h-[120px] lg:w-[218px] lg:h-[218px] blur-[40px] lg:blur-[50px] bg-[#7569FF]/15 rounded-full"></div>
        </div>
    )
}

export default DeltaOffersSection
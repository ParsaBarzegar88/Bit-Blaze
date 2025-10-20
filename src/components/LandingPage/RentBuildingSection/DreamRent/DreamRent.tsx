'use client'
import React, { FC } from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DreamRentList from './DreamRentList/DreamRentList';
import ArrowTriangleGreenLeftSVG from '../../landingPageSVG/arrowTriangleGreenLeftSVG';
import ArrowTriangleGreenRightSVG from '../../landingPageSVG/arrowTriangleGreenRightSVG';
import { ILocations } from '@/core/types/LandingPage/ILocations';

interface IProps{
  locations:ILocations;
}
const DreamRent:FC<IProps> = ({locations}) => {
  return (
    <div className='flex flex-col max-w-[98%] w-full m-auto justify-center items-center gap-5 relative px-4 lg:px-0'>
      <div className='flex flex-row justify-center lg:justify-start gap-3 dark:fill-[#8CFF45] fill-[#58893a] text-[#58893a] dark:text-[#8CFF45] items-center font-[500] text-[14px] lg:text-[16px] mx-auto mt-20 lg:mt-44'>
        <div className='hidden lg:flex'>
          <ArrowTriangleGreenRightSVG/>
        </div>
        مقصد رویا ها
        <div className='hidden lg:flex'>
          <ArrowTriangleGreenLeftSVG/>
        </div>
      </div>
      <h2 className="dark:text-[#FFFFFF] text-black text-[20px] lg:text-[26px] font-[500] text-center">
        اجاره ویلا در <b className='text-[24px] lg:text-[30px]'>محبوب ترین مقاصد این ماه</b>
      </h2>
      <p className="dark:text-[#FFFFFF] text-black text-[14px] lg:text-[16px] font-[400] text-center max-w-[90%] lg:max-w-full">
        در اینجا می توانید محبوب ترین مقصد هارا از بین انتخاب کاربران مشاهده کنید و آن ها بررسی کنید !
      </p>
      <div className='flex flex-row justify-between max-w-[98%] h-[380px] animate-fade w-full'>
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
          {locations.data.map((location , index) => {
            return(
            <SwiperSlide key={index}>
                <DreamRentList locationData={location} />
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="absolute left-[-98px] z-[1] top-1/2 transform -translate-y-1/2 w-[120px] h-[120px] lg:w-[218px] lg:h-[218px] blur-[50px] bg-[#8CFF45]/25  dark:bg-[#8CFF45]/15 rounded-full"></div>
    </div>
  )
}

export default DreamRent
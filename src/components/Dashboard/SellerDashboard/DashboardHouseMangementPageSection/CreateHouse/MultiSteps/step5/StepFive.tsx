import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingApartment, PiTree } from "react-icons/pi";
import { TbCalendar, TbTag } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { useCookies } from 'next-client-cookies';
import { ICreateHouse } from '@/core/types/CreateHouse/CreateHouse';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

interface IProps {
  picturePreviews: string[]
}

const StepFive: FC<IProps> = ({ picturePreviews }) => {

  console.log(picturePreviews)
  const [houseData, setHouseData] = useState<ICreateHouse>()

  const cookie = useCookies()
  const GetHouseInfo = () => {
    const HouseData = cookie.get("House")
    if (HouseData) {
      try {
        const ParsedData: ICreateHouse = JSON.parse(HouseData)
        console.log(HouseData)
        setHouseData(ParsedData)
      } catch {
        return console.log("خطا در گرفتن اطلاعات")
      }
    }
  }

  useEffect(() => {
    GetHouseInfo()
  }, [])


  return (
    <div className='flex flex-col gap-6 md:gap-8'>
      <div className='flex flex-col lg:flex-row gap-6 md:gap-8'>
        <div className='flex-1'>
          <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-600'>
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
              {picturePreviews !== null ? picturePreviews?.map((img, index) => {
                if (img === "") {
                  return (
                    <SwiperSlide key={index}><div className='w-full h-full flex justify-center items-center bg-[#444444] rounded-[20px]'>عکسی وجود ندارد</div></SwiperSlide>
                  )
                }
                return (
                  <SwiperSlide key={index}>
                    <div className='w-full h-full flex justify-center items-center bg-[#444444] rounded-[20px]'>
                      <Image
                        src={img}
                        alt={`ملک ${index + 1}`}
                        fill
                        className='object-cover rounded-[20px]'
                        unoptimized
                      />
                    </div>
                  </SwiperSlide>
                )
              }) :
                <SwiperSlide><div className='w-full h-full flex justify-center items-center bg-[#444444] rounded-[20px]'>عکسی وجود ندارد</div></SwiperSlide>
              }
            </Swiper>

          </div>
        </div>

        <div className='flex-1 flex flex-col gap-4'>
          <div>
            <h1 className='text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2'>
              {houseData?.title}
            </h1>
            <p className='text-gray-600 dark:text-gray-300 text-justify leading-relaxed line-clamp-5 md:line-clamp-none'>
              {houseData?.caption}
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
        <div className='flex flex-col gap-4 md:gap-6'>
          <h2 className='text-lg md:text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2'>
            <PiBuildingApartment className="text-[#8CFF45]" />
            مشخصات ملک
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <CiLocationOn className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>موقعیت</span>
                <span className='text-gray-800 dark:text-white font-medium'>{houseData?.address}</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <IoHomeOutline className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>اتاق‌ها</span>
                <span className='text-gray-800 dark:text-white font-medium'>{houseData?.rooms} خوابه</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <PiBuildingApartment className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>سرویس بهداشتی</span>
                <span className='text-gray-800 dark:text-white font-medium'>{houseData?.bathrooms} حمام</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <PiBuildingApartment className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>پارکینگ</span>
                <span className='text-gray-800 dark:text-white font-medium'>{houseData?.parking} واحد</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <PiBuildingApartment className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>ظرفیت</span>
                <span className='text-gray-800 dark:text-white font-medium'>{houseData?.capacity} نفر</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <PiTree className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>حیاط</span>
                <span className='text-gray-800 dark:text-white font-medium'>{houseData?.yard_type}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 md:gap-4'>
          <h2 className='text-lg md:text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2'>
            <TbTag className="text-[#8CFF45]" />
            برچسب‌ها و قیمت
          </h2>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-wrap gap-2'>
              {houseData?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className=' bg-[#8CFF45] dark:text-white text-dark py-2 px-5 rounded-lg text-sm font-medium'
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className='flex items-center gap-3 p-4'>
              <RiMoneyEuroCircleLine className="text-[#8CFF45] text-2xl flex-shrink-0" />
              <div className='flex-1'>
                <span className='text-2xl font-bold  dark:text-white text-[#8CFF45]'>
                  {houseData?.price} <span className='text-sm font-normal text-[#8CFF45]'>ریال</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFive
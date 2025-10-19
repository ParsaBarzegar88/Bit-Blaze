"use client"
import React, { FC } from 'react'
import { LuHotel } from "react-icons/lu";
import Image from 'next/image';
import { IHousesData } from '@/core/types/LandingPage/IHouses';
import { useHouse } from '@/context/HouseContext';
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
interface IProps {
  value: IHousesData;
}

const calculateDiscountPercentage = (originalPrice: string, discountedPrice: string | null): number => {
  if (!discountedPrice) return 0;

  const original = parseFloat(originalPrice);
  const discounted = parseFloat(discountedPrice);

  if (original <= 0 || discounted <= 0 || discounted >= original) return 0;

  const percentage = ((original - discounted) / original) * 100;
  return Math.round(percentage);
}

const HouseCard: FC<IProps> = ({ value }) => {

  const discountPercentage = calculateDiscountPercentage(value.price, value.discounted_price);

  const { setLocation } = useHouse();

  const LocationHandle = (location: { lat: string; lng: string }) => {
    setLocation({
      lat: location.lat,
      lng: location.lng
    });
  }

  return (
    <div className="flex flex-col md:flex-row w-full items-start border-b-2 bg-transparent py-4 md:py-6 group justify-between hover:scale-[1.01] transition-all duration-200 border-[#3B3B3B] last:border-b-0">
      <div className='flex flex-col md:flex-row gap-4 w-full items-start'>
        <div className='relative w-full md:w-[180px] lg:w-[228px]'>
          <Image
            className='bg-secondary-light3 w-full h-[160px] md:h-[120px] lg:h-[144px] group-hover:shadow-[#8CFF451F] group-hover:shadow-xl group-hover:border group-hover:border-[#8CFF45] rounded-2xl object-cover'
            width={228}
            height={144}
            src={value.photos !== null && value.photos.length > 0 && value.photos[0].trim() !== '' ? value.photos[0] : "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg"}
            alt="housePicture"
            priority={false}
          />
          <button
            onClick={() => LocationHandle(value.location)}
            className='w-7 h-7 md:w-8 md:h-8 rounded-xl md:rounded-2xl bg-purple-500 absolute bottom-1 flex items-center justify-center right-2 hover:transform hover:-translate-y-1 hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out'
          >
            <CiLocationOn className='text-white text-sm md:text-base' />
          </button>
        </div>
        <div className='flex flex-col gap-3 md:gap-4 flex-1 justify-between w-full min-w-0'>
          <div className='max-w-[90px] w-full bg-[#7569FF] group-hover:shadow-[#7569FF] flex justify-center rounded-[8px] px-2 py-1'>
            <span className='text-white text-xs md:text-sm flex items-center flex-row-reverse gap-1 md:gap-2 whitespace-nowrap'>
              {value.rate ? value.rate : 0} ستاره
              {value.rate ? (<IoIosStar className="text-white" />) : (<IoIosStarOutline />)}
            </span>
          </div>
          <h3 className='font-[600] text-lg md:text-xl lg:text-[26px] text-white leading-tight line-clamp-2 min-w-0'>
            {value.title}
          </h3>

          <div className='flex items-center gap-2 w-full min-w-0'>
            <svg width="14" height="14" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <g clipPath="url(#clip0_1_1535)">
                <path d="M8.6403 4C8.11288 4 7.59731 4.1564 7.15878 4.44941C6.72025 4.74243 6.37846 5.15891 6.17662 5.64618C5.97479 6.13345 5.92198 6.66962 6.02487 7.18691C6.12777 7.70419 6.38174 8.17935 6.75468 8.55229C7.12762 8.92523 7.60278 9.1792 8.12006 9.28209C8.63734 9.38499 9.17352 9.33218 9.66079 9.13035C10.1481 8.92851 10.5645 8.58672 10.8576 8.14819C11.1506 7.70966 11.307 7.19408 11.307 6.66667C11.307 5.95942 11.026 5.28115 10.5259 4.28105C10.0258 4.28095 9.34755 4 8.6403 4ZM8.6403 8C8.37659 8 8.11881 7.9218 7.89954 7.77529C7.68028 7.62878 7.50938 7.42055 7.40846 7.17691C7.30754 6.93328 7.28114 6.66519 7.33259 6.40655C7.38403 6.14791 7.51102 5.91033 7.69749 5.72386C7.88396 5.53739 8.12154 5.4104 8.38018 5.35895C8.63882 5.30751 8.90691 5.33391 9.15055 5.43483C9.39418 5.53574 9.60242 5.70664 9.74893 5.92591C9.89544 6.14517 9.97363 6.40296 9.97363 6.66667C9.97363 7.02029 9.83316 7.35943 9.58311 7.60948C9.33306 7.85952 8.99392 8 8.6403 8Z" fill="#AAAAAA" />
                <path d="M8.64083 15.9994C8.07946 16.0023 7.52557 15.8706 7.02554 15.6154C6.52551 15.3602 6.0939 14.989 5.76683 14.5327C3.22617 11.028 1.9375 8.39338 1.9375 6.70138C1.9375 4.92355 2.64374 3.21853 3.90086 1.96141C5.15798 0.704289 6.863 -0.00195312 8.64083 -0.00195312C10.4187 -0.00195312 12.1237 0.704289 13.3808 1.96141C14.6379 3.21853 15.3442 4.92355 15.3442 6.70138C15.3442 8.39338 14.0555 11.028 11.5148 14.5327C11.1878 14.989 10.7562 15.3602 10.2561 15.6154C9.75609 15.8706 9.2022 16.0023 8.64083 15.9994ZM8.64083 1.45338C7.24911 1.45497 5.91484 2.00853 4.93075 2.99263C3.94665 3.97673 3.39309 5.31099 3.3915 6.70271C3.3915 8.04272 4.6535 10.5207 6.94417 13.68C7.13863 13.9479 7.39375 14.1659 7.68864 14.3162C7.98354 14.4665 8.30983 14.5449 8.64083 14.5449C8.97183 14.5449 9.29813 14.4665 9.59302 14.3162C9.88792 14.1659 10.143 13.9479 10.3375 13.68C12.6282 10.5207 13.8902 8.04272 13.8902 6.70271C13.8886 5.31099 13.335 3.97673 12.3509 2.99263C11.3668 2.00853 10.0326 1.45497 8.64083 1.45338Z" fill="#AAAAAA" />
              </g>
            </svg>
            <span className='text-[#AAAAAA] text-xs md:text-sm flex-shrink-0'>آدرس:</span>
            <span className='text-white text-xs md:text-sm line-clamp-1 min-w-0'>{value.address}</span>
          </div>

          <div className='flex items-center gap-2 w-full min-w-0'>
            <svg width="14" height="14" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <g clipPath="url(#clip0_1_1560)">
                <path d="M8.64063 0C7.05838 0 5.51166 0.469192 4.19607 1.34824C2.88047 2.22729 1.85509 3.47672 1.24959 4.93853C0.644091 6.40034 0.485665 8.00887 0.794346 9.56072C1.10303 11.1126 1.86495 12.538 2.98377 13.6569C4.10259 14.7757 5.52806 15.5376 7.07991 15.8463C8.63175 16.155 10.2403 15.9965 11.7021 15.391C13.1639 14.7855 14.4133 13.7602 15.2924 12.4446C16.1714 11.129 16.6406 9.58225 16.6406 8C16.6383 5.87897 15.7947 3.84547 14.295 2.34568C12.7952 0.845886 10.7617 0.00229405 8.64063 0ZM8.64063 14.6667C7.32209 14.6667 6.03315 14.2757 4.93683 13.5431C3.8405 12.8106 2.98602 11.7694 2.48143 10.5512C1.97685 9.33305 1.84483 7.99261 2.10206 6.6994C2.3593 5.40619 2.99423 4.21831 3.92658 3.28596C4.85893 2.35361 6.04682 1.71867 7.34003 1.46143C8.63323 1.2042 9.97368 1.33622 11.1919 1.8408C12.41 2.34539 13.4512 3.19987 14.1838 4.2962C14.9163 5.39253 15.3073 6.68146 15.3073 8C15.3054 9.76752 14.6024 11.4621 13.3525 12.7119C12.1027 13.9617 10.4081 14.6647 8.64063 14.6667Z" fill="#AAAAAA" />
                <path d="M8.64026 4C8.46345 4 8.29388 4.07024 8.16886 4.19526C8.04384 4.32029 7.9736 4.48986 7.9736 4.66667V7.55L5.72626 8.958C5.57597 9.05189 5.46914 9.20163 5.42925 9.37429C5.38937 9.54695 5.41971 9.72838 5.5136 9.87867C5.60748 10.029 5.75723 10.1358 5.92989 10.1757C6.10254 10.2156 6.28397 10.1852 6.43426 10.0913L8.99426 8.49133C9.09099 8.43073 9.17053 8.34631 9.22528 8.24616C9.28002 8.146 9.30814 8.03347 9.30693 7.91933V4.66667C9.30693 4.48986 9.23669 4.32029 9.11167 4.19526C8.98664 4.07024 8.81708 4 8.64026 4Z" fill="#AAAAAA" />
              </g>
            </svg>
            <span className='text-[#AAAAAA] text-xs md:text-sm flex-shrink-0'>ظرفیت:</span>
            <span className='text-white text-xs md:text-sm'>{value.capacity}</span>
          </div>
        </div>
        <div className='flex flex-row md:flex-col justify-between items-start md:items-end gap-3 md:gap-4 w-full md:w-auto mt-2 md:mt-0'>
          {value.discounted_price !== null ? (
            <div className='flex flex-row items-center gap-2 md:gap-4 order-2 md:order-1 whitespace-nowrap'>
              <p className='line-through text-[#AAAAAA] text-xs md:text-sm'>{value.price} ت</p>
              <span className='bg-red-500 w-8 md:w-11 py-1 rounded-[6px] md:rounded-[8px] flex text-white items-center justify-center text-xs'>{discountPercentage}%</span>
            </div>
          ) : ""
          }
          <h2 className={`${value.discounted_price === null ? "mt-10" : ""} text-[#8CFF45] text-base md:text-lg lg:text-2xl font-bold whitespace-nowrap order-1 md:order-2`}>
            {value.discounted_price ? value.discounted_price : value.price} ت
          </h2>
          <button className='text-[#8CFF45] cursor-pointer rounded-[12px] md:rounded-[14px] flex flex-row-reverse whitespace-nowrap items-center justify-center w-full md:w-[140px] lg:w-[175px] h-[36px] md:h-[44px] border border-[#8CFF45] bg-transparent group-hover:text-black group-hover:bg-[#8CFF45] transition-all duration-300 font-medium px-3 md:px-4 text-sm md:text-base order-3'>
            بررسی و رزرو هتل
            <LuHotel className='text-[#8CFF45] ml-1 md:ml-2 group-hover:text-black flex-shrink-0 text-sm md:text-base' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
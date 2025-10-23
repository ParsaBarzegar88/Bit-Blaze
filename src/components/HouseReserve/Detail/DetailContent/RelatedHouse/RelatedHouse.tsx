'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { BiSolidBuildings } from 'react-icons/bi';
import Link from 'next/link';
import { FC } from 'react';
import { IHouses } from '@/core/types/LandingPage/IHouses';
import RelatedHouseList from './RelatedHouseList/RelatedHouseList';

interface IProps{
    housesList:IHouses
}
const RelatedHouse:FC<IProps> = ({housesList}) => {
return (
    <div className='flex flex-col gap-6 mt-12'>
                <div className='flex flex-row justify-between h-[42px] rounded-[12px] dark:bg-[#393939] bg-white dark:shadow-none shadow-[0_0px_16px_rgba(0,0,0,0.27)]'>
                    <span className='flex flex-row gap-2 items-center text-black dark:text-white mr-2'>
                        <BiSolidBuildings size={17} />
                        <div>آگهی های مشابه</div>
                    </span>
                    <Link href={'/house-reserve'} className='flex flex-row gap-2 text-[#66b436] dark:text-[#8CFF45] items-center ml-2'>
                        <div>مشاهده همه</div>
                        <MdOutlineKeyboardArrowLeft />
                    </Link>
                </div>
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
                    className="mySwiper w-full h-[500px]"
                >
                    {housesList.houses.map((houses, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <RelatedHouseList houseListDetail={houses} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
  )
}

export default RelatedHouse
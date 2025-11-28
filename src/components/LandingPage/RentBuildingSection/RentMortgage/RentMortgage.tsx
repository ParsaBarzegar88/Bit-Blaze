'use client'
import { getHousesByRentAndMortgage } from '@/core/api/LandingPage/houses'
import { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSWR from 'swr'
import ArrowTriangleGreenLeftSVG from '../../landingPageSVG/arrowTriangleGreenLeftSVG'
import RentMortgageList from './RentMortgageList/RentMortgageList'
import Link from 'next/link'
const RentMortgage = () => {
    const [activeTab, setActiveTab] = useState<string>('rental');
    const { data } = useSWR([activeTab], getHousesByRentAndMortgage)
    return (
        <div className='flex flex-col max-w-[98%] w-full m-auto gap-1 relative px-4 lg:px-0'>
            <div className='flex flex-row gap-3 mx-auto lg:mx-0 dark:fill-[#8CFF45] fill-[#58893a] dark:text-[#8CFF45] text-[#58893a] items-center font-[500] text-[14px] lg:text-[16px] mt-24 lg:mt-24 mb-7'>
                مقصد رویا ها
                <div className='hidden lg:flex'>
                    <ArrowTriangleGreenLeftSVG />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>
                <div className='flex flex-col lg:flex-row gap-5 items-center'>
                    <h2 className="dark:text-[#FFFFFF] text-black text-[20px] lg:text-[26px] font-[500] text-center lg:text-right">
                        <b className='text-[24px] lg:text-[30px]'>رهن و اجاره ملک</b> در دلتا
                    </h2>
                    <div className='w-[3px] h-4 rounded-[3px] bg-[#AAAAAA] hidden lg:block'></div>
                    <div className='flex flex-row gap-7 bg-[#393939] w-full lg:w-fit p-1 rounded-[12px]'>
                        <button
                            onClick={() => setActiveTab('rental')}
                            className={`text-[14px] cursor-pointer lg:text-[16px] font-[400] p-2 rounded-[10px] w-1/2 lg:w-auto transition-all duration-300 ${activeTab === 'rental'
                                ? 'text-[#363636] bg-[#8CFF45]'
                                : 'text-[#AAAAAA] hover:text-[#FFFFFF]'
                                }`}
                        >
                            اجاره ملک
                        </button>
                        <button
                            onClick={() => setActiveTab('mortgage')}
                            className={`text-[14px] cursor-pointer lg:text-[16px] font-[400] p-2 rounded-[10px] w-1/2 lg:w-auto transition-all duration-300 ${activeTab === 'mortgage'
                                ? 'text-[#363636] bg-[#8CFF45]'
                                : 'text-[#AAAAAA] hover:text-[#FFFFFF]'
                                }`}
                        >
                            رهن خونه
                        </button>
                    </div>
                </div>
                <Link href={'/mortgage-rent'} className='border dark:border-[#FFFFFF] border-black dark:text-[#FFFFFF] rounded-[12px] items-center justify-center gap-1 flex flex-row w-[130px] h-[36px] cursor-pointer hover:bg-[#000000] hover:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#000000] transition-all duration-300'>
                    مشاهده همه
                    <MdOutlineKeyboardArrowLeft />
                </Link>
            </div>
            <div className='flex flex-row justify-between max-w-[98%] h-[500px] animate-fade mb-5'>
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

                    {data?.houses.map((house, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <RentMortgageList housesData={house} type={activeTab} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className="absolute right-[-109px] top-20 transform w-[120px] h-[120px] lg:w-[218px] lg:h-[218px] blur-[50px] dark:bg-[#7569FF]/15 rounded-full"></div>
        </div>
    )
}

export default RentMortgage
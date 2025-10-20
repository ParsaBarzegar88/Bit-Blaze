'use client'
import React, { FC } from 'react'
import { FaArrowLeftLong, FaStar } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ILocationData } from '@/core/types/LandingPage/ILocations'
import Image from 'next/image'

interface IProps{
    locationData:ILocationData;
}
const DreamRentList:FC<IProps> = ({locationData}) => {
    return (
        <div className='w-full max-w-full mt-5 group mx-auto'>
            <div className='flex flex-col relative'>
                <div className='flex flex-row justify-between items-center relative'>
                    <div className='bg-[#FFFFFF] text-black transition-colors duration-300 group-hover:bg-[#2D2D2D] group-hover:text-[#FFFFFF] shadow-[0px_4px_12px_rgba(255,255,255,0.2)] z-[1] mr-3 translate-y-2 flex flex-row gap-1.5 items-center justify-center rounded-[10px] w-[67px] h-[32px]'>
                        <div className='mt-1 font-[700] text-[16px]'>
                            4.5
                        </div>
                        <FaStar />
                    </div>
                    <FaArrowLeftLong className='w-[45px] h-[22px] rounded-[8px] bg-[#393939] text-[#FFFFFF] group-hover:bg-[#58893a] dark:group-hover:bg-[#8CFF45] group-hover:text-[#363636] transition-all duration-300' size={25} />
                </div>
                <div className='bg-[#393939] group-hover:bg-[#58893a] group-hover:after:shadow-[6px_10px_0_0_rgba(88,137,58,1)] dark:group-hover:bg-[#8CFF45] dark:group-hover:after:shadow-[6px_10px_0_0_rgba(140,255,69,1)]
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
                            <SwiperSlide>
                                <div className='w-full h-full flex justify-center items-center bg-[#444444] rounded-[20px]'>
                                    <Image className='rounded-[20px]' src={'https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg'} fill alt='DefaultVillaPic'/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <h3 className='dark:text-[#FFFFFF] text-black font-[500] text-[14px] sm:text-[16px] mt-5 mr-1'>اجاره ویلا در {locationData.dataValues.area_name} ( {locationData.dataValues.id} مورد )</h3>
                </div>
            </div>
        </div>
    )
}

export default DreamRentList
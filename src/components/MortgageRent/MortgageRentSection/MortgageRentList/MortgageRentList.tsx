import React, { FC } from 'react'
import { FaBed, FaCarSide, FaStar } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { MdHotTub, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { IHousesData } from '@/core/types/MortgageRent/IHouses'
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
const MortgageRentList: FC<IProps> = ({ houseData }) => {
    const discountPercentage = calculateDiscountPercentage(houseData.price, houseData.discounted_price);

    return (
        <div className='bg-[#393939] group hover:scale-[1.01] hover:shadow-[0px_1px_10px_rgba(140,255,69,0.5)]
                  before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative max-[850px]:w-full w-[49%] h-fit mt-10 rounded-tl-[16px] rounded-bl-[16px] rounded-br-[16px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-5 before:rounded-tr-[17px] before:w-40 before:absolute before:-translate-y-5 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(20deg)] after:top-[-1.1rem] after:right-[9rem] after:shadow-[6px_10px_0_0_rgba(57,57,57,1)]'>
            <div className="absolute top-[-1rem] right-[5px] w-[7.6rem] h-[2rem] rounded-[14px] 
                        outline-[5px] outline-[#393939]
                        transition-all duration-300
                        "></div>

            <div className='flex flex-row z-[10] mt-3 mb-3 mr-3 ml-3'>
                <div className='flex flex-row max-[1300px]:flex-col justify-between w-full'>
                    <div className='flex lg:flex-row flex-col gap-6'>
                        <div className='w-full max-[850px]:h-[210px]  h-[200px] lg:w-[190px] lg:h-[150px] z-[10] relative'>
                            <Image className='rounded-[16px] group-hover:border group-hover:border-[#8CFF45] transition-all duration-300 w-full h-full' src={houseData.photos !== null && houseData.photos.length > 0 && houseData.photos[0].trim() !== '' ? houseData.photos[0]:"https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg"} fill alt='DefaultVillaPic' />
                        </div>
                        <div className='flex flex-col gap-5 justify-between'>
                            <div className='flex flex-row text-[#FFFFFF] text-[14px] font-[500] items-center justify-center gap-1 rounded-[8px] bg-[#7569FF] shadow-[0px_8px_16px_rgba(115,103,255,0.2)] w-[82px] h-[28px]'>
                                <FaStar />
                                {houseData.rate !== null ? houseData.rate : "4"} ستاره
                            </div>
                            <h2 className='text-[20px] font-[600] text-[#FFFFFF]'>{houseData.title}</h2>
                            <span className='flex flex-row gap-1 items-center text-[#AAAAAA]'>
                                <IoLocationOutline /> آدرس :
                                <p className='text-[#FFFFFF] max-w-[160px] truncate'>{houseData.address}</p>
                            </span>
                            <div className='flex flex-row flex-wrap w-fit justify-between text-[#AAAAAA] items-center gap-2'>
                                <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                    <FaBed className='text-[12px]' />
                                    {houseData.rooms} خوابه
                                </div>
                                <div className='w-0.5 h-4 bg-[#AAAAAA] hidden sm:block'></div>
                                <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                    <FaCarSide className='text-[12px]' />
                                    {houseData.parking} پارکینگ
                                </div>
                                <div className='w-0.5 h-4 bg-[#AAAAAA] hidden sm:block'></div>
                                <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                    <MdHotTub className='mb-1 text-[12px]' />
                                    {houseData.bathrooms} حمام
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col h-full items-center justify-end gap-4'>
                        {houseData.discounted_price !== null ? (
                            <div className='flex flex-row gap-2 max-[1300px]:mt-5'>
                                <div className='flex flex-row gap-3'>
                                    <p className='line-through text-[#AAAAAA] text-[16px] font-[600]'>{houseData.discounted_price} ت</p>
                                    <div className='bg-[#FF5555] text-[16px] font-[700] w-[50px] h-[28px] items-center rounded-[8px] flex justify-center text-[#FFFFFF]'>{discountPercentage}%</div>
                                </div>
                            </div>
                        ) : ""}
                        <div className={`${houseData.discounted_price === null ? "mt-16" : ""} text-[#8CFF45] text-[20px] font-[60]'`}>
                            {houseData.price} ت
                        </div>
                        <Link href='/mortgage-rent' className='group-hover:bg-[#8CFF45] w-[144px] group-hover:text-[#000000] transition duration-300 border border-[#8CFF45] rounded-[14px] h-[40px] justify-center text-[#8CFF45] flex flex-row gap-1 items-center text-[16px] font-[500]'>
                            مشاهده لینک
                            <MdOutlineKeyboardArrowLeft />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MortgageRentList
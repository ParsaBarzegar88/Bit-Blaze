import React, { FC } from 'react'
import SellerInformation from '../SellerInformation/SellerInformation';
import Image from 'next/image';
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';

interface IProps{
    houseData:IHousesDetail
}
const MortgageRentDetailImage:FC<IProps> = ({houseData}) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-8'>
            <div className='flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-8'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 w-full'>
                    {houseData.photos !== null ? (
                        <div className='w-full lg:max-w-full rounded-2xl lg:rounded-4xl overflow-hidden'>
                            <Image src={houseData.photos[0] === "" ? "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg" : houseData.photos[0]} alt='Image'
                                width={675} height={368} className='object-cover w-full h-full' />
                        </div>
                    ) : (
                        <div className='w-full lg:max-w-[675px] lg:w-2/3 h-full flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-2xl lg:rounded-4xl'>عکسی وجود ندارد</div>
                    )}

                    <div className='flex flex-col lg:flex-col gap-4 w-full'>
                        {houseData.photos !== null ? (
                            <div className='w-full sm:h-full h-[172px] rounded-2xl lg:rounded-4xl overflow-hidden'>
                                <Image src={houseData.photos && houseData.photos.length >= 2 ? houseData.photos[1] : "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg"} alt='Image'
                                    width={675} height={368} className='object-cover w-full h-full' />
                            </div>
                        ) : (
                            <div className='w-full  sm:h-full h-[172px] flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-2xl lg:rounded-4xl'>عکسی وجود ندارد</div>
                        )}
                        <div className='w-full hidden md:flex  sm:h-full h-[172px] bg-[#AAAAAA] rounded-2xl lg:rounded-4xl'></div>
                    </div>
                </div>
                <div className='lg:w-fit w-full h-full'>
                    <SellerInformation sellerInfo={houseData} />
                </div>
            </div>
        </div>
    )
}

export default MortgageRentDetailImage
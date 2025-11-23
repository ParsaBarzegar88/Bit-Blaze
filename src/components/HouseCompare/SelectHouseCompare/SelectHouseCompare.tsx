'use client'
import { getAllHouses } from '@/core/api/HouseCompare/HouseCompare';
import { IHouses } from '@/core/types/LandingPage/IHouses';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

interface IProps {
    closeSelectHouse: Dispatch<SetStateAction<boolean>>;
}
const SelectHouseCompare: FC<IProps> = ({ closeSelectHouse }) => {
    const [Houses, setHouses] = useState<IHouses>()
    const router = useRouter()
    const searchParam = useSearchParams()
    const handleSelectHouse = (id: string) => {
        const currentIds = searchParam.get('id')
        let newIds: string[] = []
        if (currentIds) {
            newIds = currentIds.split(',')
            if (!newIds.includes(id)) {
                newIds.push(id)
            }
        } else {
            newIds = [id]
        }
        const newIdsString = newIds.join(',')
        router.push(`/compare?id=${newIdsString}`)
        closeSelectHouse(false)
    }
    useEffect(() => {
        const fetchHouses = async () => {
            const res = await getAllHouses()
            setHouses(res)
        }
        fetchHouses()
    }, [])
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-4xl mx-4 
                flex flex-col max-h-[90vh]'>
                <div className='flex max-[800px]:flex-col-reverse max-[800px]:gap-3.5 justify-between items-center p-6 border-dashed border-gray-300 dark:border-gray-600'>
                    <h2 className='text-3xl max-[800px]:text-[19px] font-bold text-gray-800 dark:text-white'>
                        انتخاب خانه
                    </h2>
                    <button
                        onClick={() => closeSelectHouse(false)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
                    >
                        <LiaTimesSolid size={20} />
                        <span className='text-md'>بستن</span>
                    </button>
                </div>
                <div className='max-h-[400px] overflow-y-auto w-full custom-scrollbar'>
                    <div className='flex max-[550px]:flex-col flex-row flex-wrap w-full justify-between'>
                        {Houses?.houses?.map((house, index) => (
                            <div key={index} className='flex flex-col max-[550px]:w-full w-[50%] px-2 py-2 cursor-pointer' onClick={() => handleSelectHouse(String(house.id))}>
                                <Image
                                    className="bg-secondary-light3 w-full h-[160px] md:h-[120px] lg:h-[144px] dark:group-hover:shadow-[#8CFF451F] group-hover:shadow-[#8CFF451F] group-hover:shadow-2xl group-hover:border group-hover:border-[#8CFF45] rounded-2xl object-cover"
                                    width={228}
                                    height={144}
                                    src={house.photos !== null && house.photos.length > 0 && house.photos[0].trim() !== '' ? house.photos[0] : "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg"}
                                    alt="housePicture"
                                    priority={false}
                                />
                                <div className='flex flex-row justify-center items-center'>
                                    <h3 className='dark:text-[#FFFFFF] text-black font-[500] text-[14px] sm:text-[16px] mt-5 mr-1'>{house.title}</h3>
                                </div>
                                <div className='flex flex-row justify-center gap-2 text-[#757575] dark:text-[#AAAAAA] mt-1 items-center'>
                                    <div className='mt-1 text-[12px] sm:text-[14px] truncate'>
                                        {house.address}
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap text-[#757575] dark:text-[#AAAAAA] mt-1 justify-center items-center gap-3'>
                                    <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                        {house.rooms} خوابه
                                    </div>
                                    <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                        {house.parking} پارکینگ
                                    </div>

                                    <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                        {house.bathrooms} حمام
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectHouseCompare
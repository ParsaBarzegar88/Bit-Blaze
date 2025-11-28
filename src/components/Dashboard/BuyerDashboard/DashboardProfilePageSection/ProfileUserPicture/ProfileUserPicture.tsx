'use client'
import React, { FC, useState } from 'react'
import { IoIosCamera } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";
import SelectedProfilePicture from './SelectedProfilePicture/SelectedProfilePicture';
import Image from 'next/image';
import { IUserDetail } from '@/core/types/Dashboard/IDashboard';

interface IProps {
    userInfo: IUserDetail
}
const ProfileUserPicture:FC<IProps> = ({userInfo}) => {
    const [openSelectedPicture, setOpenSelectedPicture] = useState(false)
    const handleOpenSelectedPicture = () => {
        setOpenSelectedPicture(!openSelectedPicture)
    }
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col gap-5 lg:flex-row  justify-between'>
                <div className='flex flex-col gap-2 w-full'>
                    <h2 className='text-[20px] font-[900] text-black dark:text-white'>عکس نمایه شما</h2>
                    <p className='text-[16px] font-[400]'>میتوانید عکس نمایه خود را تغییر دهید</p>
                </div>
                <div className='flex max-[800px]:justify-center justify-start w-full'>
                    <div className='relative w-[120px] h-[120px] rounded-full bg-[#D9D9D9]'>
                        {userInfo.user.profilePicture ? (
                            <Image
                                src={userInfo.user.profilePicture}
                                alt="پیش‌ نمایش پروفایل"
                                width={225}
                                height={225}
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : ""}
                        <div onClick={handleOpenSelectedPicture} className='absolute px-1 py-1 top-2 cursor-pointer right-0 border-2 rounded-full border-white bg-[#8CFF45] flex justify-center items-center'>
                            <IoIosCamera className='text-black' size={20} />
                        </div>
                        <div className='absolute px-1 py-1 bottom-2 cursor-pointer right-0 border-2 rounded-full border-white bg-[#FF5555] flex justify-center items-center'>
                            <FaRegTimesCircle className='text-black' size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300"></div>
            {openSelectedPicture === true ? (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <SelectedProfilePicture closeSelectedPicture={setOpenSelectedPicture} />
                </div>
            ) : ""}
        </div>
    )
}

export default ProfileUserPicture
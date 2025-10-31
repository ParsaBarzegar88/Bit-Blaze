'use client'
import React, { FC } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import ToggleLightAndDark from '@/components/ToggleTheme/ToggoleTheme'
import Image from 'next/image';
import { IUserDetail } from '@/core/types/Dashboard/IDashboard';
import { usePathname } from 'next/navigation';

interface IProps{
    userInfo:IUserDetail
}
const DashboardItems:FC<IProps> = ({userInfo}) => {
    const pathName = usePathname()
    const getPath = () => {
        if(pathName === '/dashboard') return 'داشبورد'
        if(pathName === '/dashboard/profile') return 'اطلاعات کاربری'
        if(pathName === '/dashboard/payments') return 'پرداخت ها'
        if(pathName === '/dashboard/reserve-management') return 'مدیریت رزرو ها'
        if(pathName === '/dashboard/favorites') return 'علاقه مندی ها'
        if(pathName === '/dashboard/announcements') return 'اعلان ها'
    }
    return (
        <div className='flex flex-row justify-between max-w-[96%] mx-auto w-full'>
            <h2 className='tracking-[0.2em] font-[800] text-[25px] dark:text-white text-black'>
                {getPath()}
            </h2>
            <div className='flex flex-row gap-2 items-center '>
                <ToggleLightAndDark />
                <div className='w-[1px] h-[32px] bg-[#9C9C9C]'></div>
                <IoIosNotificationsOutline className='w-6 h-6' />
                <div className='flex flex-row items-center cursor-pointer gap-1.5'>
                    <Image src={userInfo.user.profilePicture} className='rounded-[8px]' alt='img' width={37} height={37} />
                    <div className='flex flex-col justify-between ml-2'>
                        <h3 className='font-[400] text-[14px] dark:text-white text-black'>{`${userInfo.user.firstName} ${userInfo.user.lastName}`}</h3>
                        <span className='font-[400] text-[12px] text-[#888888]'>{userInfo.user.role === 'buyer' ? 'خریدار' : ""}</span>
                    </div>
                    <MdOutlineKeyboardArrowDown size={18} />
                </div>
            </div>
        </div>
    )
}

export default DashboardItems
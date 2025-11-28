'use client'
import React, { FC, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import ToggleLightAndDark from '@/components/ToggleTheme/ToggoleTheme'
import Image from 'next/image';
import { IUserDetail } from '@/core/types/Dashboard/IDashboard';
import { usePathname } from 'next/navigation';
import { IoMenu } from 'react-icons/io5';
import ResponsiveHeaderBuyer from '../../BuyerDashboard/DashboardMenu/ResponsiveHeaderBuyer/ResponsiveHeaderBuyer';
import ResponsiveHeaderSeller from '../../SellerDashboard/DashboardMenu/ResponsiveHeaderSeller/ResponsiveHeaderSeller';

interface IProps {
    userInfo: IUserDetail
}
const DashboardItems: FC<IProps> = ({ userInfo }) => {
    const pathName = usePathname()
    const [openSubMenu, setOpenSubMenu] = useState(false)
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const getPath = () => {
        if (pathName === '/seller/dashboard') return 'داشبورد'
        if (pathName === '/dashboard') return 'داشبورد'
        if (pathName === '/dashboard-profile') return 'اطلاعات کاربری'
        if (pathName === '/seller/dashboard-profile') return 'اطلاعات کاربری'
        if (pathName === '/seller/dashboard-house-management') return 'مدیریت املاک'
        if (pathName === '/dashboard-payments') return 'پرداخت ها'
        if (pathName === '/seller/dashboard-payments') return 'پرداخت ها'
        if (pathName === '/dashboard-reserves') return 'مدیریت رزرو ها'
        if (pathName === '/seller/dashboard-reserves-management') return 'مدیریت رزرو ها'
        if (pathName === '/seller/dashboard-financial-management') return 'مدیریت مالی'
        if (pathName === '/dashboard-favorites') return 'علاقه مندی ها'
        if (pathName === '/seller/dashboard-comments-management') return 'مدیریت نظرات'
        if (pathName === '/dashboard-announcements') return 'اعلان ها'
        if (pathName === '/seller/dashboard-announcements') return 'اعلان ها'
    }
    const handleOpenSubMenu = () => {
        setOpenSubMenu(!openSubMenu)
    }
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <div className='flex flex-row justify-between max-w-[96%] mx-auto w-full relative items-center'>
            <h2 className='tracking-[0.2em] max-[800px]:text-[17px] font-[800] text-[25px] dark:text-white text-black flex flex-row gap-1.5 items-center'>
                <button
                    className="lg:hidden flex w-8 mr-3 h-full items-center justify-center text-[#565656] dark:text-[#AAAAAA] cursor-pointer"
                    onClick={handleOpenMenu}
                    aria-label={openMenu ? "بستن منو" : "باز کردن منو"}
                >
                    <IoMenu className="w-full h-full" />
                </button>
                {getPath()}
            </h2>
            <div className='flex flex-row gap-2 items-center '>
                <ToggleLightAndDark />
                <div className='w-[1px] h-[32px] bg-[#9C9C9C] max-[800px]:hidden'></div>
                <IoIosNotificationsOutline className='w-6 h-6 max-[800px]:hidden' />
                <div className='flex flex-row items-center cursor-pointer gap-1.5' onClick={handleOpenSubMenu}>
                    <Image src={userInfo?.user.profilePicture} className='rounded-[8px]' alt='img' width={37} height={37} />
                    <div className='flex flex-col justify-between ml-2'>
                        <h3 className='font-[400] text-[14px] dark:text-white text-black'>{`${userInfo.user.firstName} ${userInfo.user.lastName}`}</h3>
                        <span className='font-[400] text-[12px] text-[#888888]'>{userInfo.user.role === 'buyer' ? 'خریدار' : userInfo.user.role === 'seller' ? 'فروشنده' : 'ادمین'}</span>
                    </div>
                    <MdOutlineKeyboardArrowDown className={`${openSubMenu === true ? 'rotate-[180deg]' : "rotate-[0deg] transition-all"} transition-all`} size={18} />
                </div>
            </div>
            {pathName.startsWith('/seller') ? (
                <ResponsiveHeaderSeller open={openMenu} setOpen={setOpenMenu} />

            ) : (
                <ResponsiveHeaderBuyer open={openMenu} setOpen={setOpenMenu} />

            )}

        </div>
    )
}

export default DashboardItems
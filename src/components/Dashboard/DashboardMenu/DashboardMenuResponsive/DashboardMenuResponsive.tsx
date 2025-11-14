'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsCreditCard } from 'react-icons/bs'
import { FiHome, FiUser } from 'react-icons/fi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdFavoriteBorder } from 'react-icons/md'
import { TbCash } from 'react-icons/tb'
import DashboardWalletItem from '../DashboardWalletItem/DashboardWalletItem'
import { usePathname } from 'next/navigation'

const DashboardMenuResponsive = () => {
    const [openWalletItem, setOpenWalletItem] = useState<boolean>(false)
    const pathName = usePathname()
    const handleOpenWalletItem = () => {
        setOpenWalletItem(!openWalletItem)
    }
    return (
        <div className='max-[800px]:flex hidden bg-[#dbdbdb] dark:bg-[#2e2e2e] fixed bottom-0 w-full shadow-2xl'>
            <div className='flex flex-row max-w-[95%] w-full items-center mx-auto'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <Link href={'/dashboard'} className={`flex items-center  ${pathName === '/dashboard' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""} px-3 py-2 dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <FiHome size={24} className='w-5 h-5' />
                    </Link>
                    <Link href={'/dashboard-profile'} className={`flex items-center ${pathName === '/dashboard-profile' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""}  px-3 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <FiUser size={24} className='w-5 h-5' />
                    </Link>
                    <Link href={'/dashboard-reserves'} className={`flex items-center ${pathName === '/dashboard-reserves' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""} px-3 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <IoMdAddCircleOutline size={24} className='w-5 h-5' />
                    </Link>
                    <Link href={'/dashboard-favorites'} className={`flex items-center ${pathName === '/dashboard-favorites' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""}  px-3 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <MdFavoriteBorder size={24} className='w-5 h-5' />
                    </Link>
                    <Link href={'/dashboard-payments'} className={`flex items-center ${pathName === '/dashboard-payments' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""}  px-3 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <TbCash size={24} className='w-5 h-5' />
                    </Link>
                    <Link href={'/dashboard-announcements'} className={`flex items-center ${pathName === '/dashboard-announcements' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""} px-3 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-dot min-w-5 min-h-5 h-5 w-5" aria-hidden="true">
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"></path>
                            <circle cx="18" cy="8" r="3"></circle>
                        </svg>
                    </Link>
                    <BsCreditCard onClick={handleOpenWalletItem} size={19} />
                </div>
            </div>
            {openWalletItem === true ? (
                <DashboardWalletItem />
            ) : ""}
        </div>
    )
}

export default DashboardMenuResponsive
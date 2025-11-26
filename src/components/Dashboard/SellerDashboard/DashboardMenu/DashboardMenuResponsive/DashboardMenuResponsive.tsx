'use client'
import Link from 'next/link'
import React from 'react'
import { BsChatDots, BsChatLeftDots } from 'react-icons/bs'
import { FiHome, FiUser } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { GrSettingsOption } from 'react-icons/gr'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { HiClipboardDocumentList } from 'react-icons/hi2'

const DashboardMenuResponsive = () => {
    const pathName = usePathname()
    return (
        <div className='max-[800px]:flex hidden bg-[#dbdbdb] dark:bg-[#2e2e2e] fixed bottom-0 w-full shadow-2xl'>
            <div className='flex flex-row max-w-[95%] w-full items-center mx-auto'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <Link href={'/seller/dashboard'} className={`flex items-center  ${pathName === '/seller/dashboard' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""} px-2 py-2 dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <FiHome size={24} className='w-4 h-4' />
                    </Link>
                    <Link href={'/seller/dashboard-profile'} className={`flex items-center ${pathName === '/seller/dashboard-profile' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""}  px-2 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <FiUser size={24} className='w-4 h-4' />
                    </Link>
                    <Link href={'/seller/dashboard-house-management'} className={`flex items-center ${pathName === '/seller/dashboard-reserves' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""} px-2 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <GrSettingsOption size={24} className='w-4 h-4' />
                    </Link>
                    <Link href={'/seller/dashboard-reserves-management'} className={`flex items-center ${pathName === '/seller/dashboard-favorites' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""}  px-2 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <IoMdAddCircleOutline size={24} className='w-4 h-4' />
                    </Link>
                    <Link href={'/seller/dashboard-financial-management'} className={`flex items-center ${pathName === '/seller/dashboard-payments' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""}  px-2 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <HiClipboardDocumentList size={24} className='w-4 h-4' />
                    </Link>
                    <Link href={'/seller/dashboard-comments-management'} className={`flex items-center ${pathName === '/seller/dashboard-payments' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""}  px-2 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <BsChatLeftDots size={24} className='w-4 h-4' />
                    </Link>
                    <Link href={'/seller/dashboard-announcements'} className={`flex items-center ${pathName === '/seller/dashboard-announcements' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""} px-2 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-dot min-w-4 min-h-4 h-4 w-4" aria-hidden="true">
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"></path>
                            <circle cx="18" cy="8" r="3"></circle>
                        </svg>
                    </Link>
                    <Link href={'/seller/dashboard-chats'} className={`flex items-center ${pathName === '/seller/dashboard-chats' ? 'bg-[#bdbdbd] dark:bg-[#a08cff]' : ""}  px-2 py-2 flex-row  dark:text-white  text-black transition-colors hover:bg-[#bdbdbd] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                        <BsChatDots size={24} className='w-4 h-4' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardMenuResponsive
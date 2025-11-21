'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineLogin } from "react-icons/ai";
import { BsChatLeftDots, BsCreditCard } from "react-icons/bs";
import { FiHome, FiUser } from 'react-icons/fi';
import { GrSettingsOption } from "react-icons/gr";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { IoMdAddCircleOutline } from "react-icons/io";

const DashboardMenu = () => {
    const pathName = usePathname()
    const [open, setOpen] = useState<boolean>(true)
    const setMenuOpen = () => {
        setOpen(!open)
    }
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.innerWidth >= 1200) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        };

        window.addEventListener('resize', toggleVisibility);
        return () => window.removeEventListener('resize', toggleVisibility);
    }, [])

    return (
        <div className={`bg-[#ffffff] dark:bg-[#363636] max-[800px]:hidden transition-all mt-2 items-center flex flex-col ${open === true ? 'min-w-[230px]' : 'min-w-fit pr-6 pl-6 justify-center'}  min-w mb-2 shadow-[0_0px_10px_rgba(0,0,0,0.27)] rounded-[12px]`}>
            <div className='flex flex-col h-full justify-between max-w-[90%] w-full mx-auto'>
                <div className='flex flex-col gap-10 w-full'>
                    <div className='flex flex-row justify-between mt-4 items-center w-full'>
                        <Link href={'/'} className={`font-[900] dark:text-white text-black text-[32px] ${open === true ? '' : 'hidden'}`}>
                            دلتا
                        </Link>
                        <AiOutlineLogin onClick={setMenuOpen} size={24} className={`hover:text-[#5d3bff] cursor-pointer transition-colors  ${open === true ? '' : 'rotate-[180deg] w-full'}`} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link href={'/seller/dashboard'} className={`flex items-center ${pathName === '/seller/dashboard' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                            <FiHome size={24} className='w-5 h-5' />
                            <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>داشبورد</span>
                        </Link>
                        <Link href={'/seller/dashboard-profile'} className={`flex items-center ${pathName === '/seller/dashboard-profile' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                            <FiUser size={24} className='w-5 h-5' />
                            <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>اطلاعات کاربری</span>
                        </Link>
                        <Link href={'/seller/dashboard-house-management'} className={`flex items-center ${pathName === '/seller/dashboard-house-management' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                            <GrSettingsOption size={24} className='w-5 h-5' />
                            <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>مدیریت املاک</span>
                        </Link>
                        <Link href={'/seller/dashboard-reserves-management'} className={`flex items-center ${pathName === '/seller/dashboard-reserves-management' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                            <IoMdAddCircleOutline size={24} className='w-5 h-5' />
                            <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>مدیریت رزروها</span>
                        </Link>
                        <Link href={'/seller/dashboard-financial-management'} className={`flex items-center ${pathName === '/seller/dashboard-financial-management' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                            <HiClipboardDocumentList size={24} className='w-5 h-5' />
                            <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>مدیریت مالی</span>
                        </Link>
                        <Link href={'/seller/dashboard-comments-management'} className={`flex items-center ${pathName === '/seller/dashboard-comments-management' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                            <BsChatLeftDots size={24} className='w-5 h-5' />
                            <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>مدیریت نظرات</span>
                        </Link>
                        <Link href={'/seller/dashboard-announcements'} className={`flex items-center ${pathName === '/seller/dashboard-announcements' ? 'bg-[#E0E0E0] dark:bg-[#a08cff]' : ""} ${open === true ? 'w-full ' : "w-fit pl-2"} pr-2 px-3 py-2 flex-row gap-1.5 dark:text-white  text-black transition-colors hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] rounded-[8px] cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-dot min-w-5 min-h-5 h-5 w-5" aria-hidden="true">
                                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"></path>
                                <circle cx="18" cy="8" r="3"></circle>
                            </svg>
                            <span className={`text-black mt-0.5 font-[400] dark:text-white ${open === true ? "" : 'hidden'}`}>اعلان‌ها</span>
                        </Link>
                    </div>
                </div>
                {open === true ? (
                    <div className='w-full relative'>
                        <div className='w-full border-2 border-dashed border-[rgba(136,136,136,0.5)] rounded-[12px] flex flex-row gap-3 mb-5 cursor-pointer h-[60px] py-10 items-center'>
                            <BsChatLeftDots size={24} className='mr-2' />
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-[20px]'>نظرات جدید</h2>
                                <div className='text-[#888888] text-[14px]'>5 نظر</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='w-full relative'>
                        <BsChatLeftDots size={24} className='mr-2 mb-5' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default DashboardMenu
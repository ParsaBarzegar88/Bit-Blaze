import React, { useState } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { IoMdAddCircleOutline } from 'react-icons/io'
import LogoutSection from './LogoutSection/LogoutSection'
import NotificationSettings from './NotoficationSettings/NotoficationSettings'

const DashboardItemSubMenu = () => {
    const [logout, setLogout] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)
    const handleOpenLogout = () => {
        setLogout(!logout)
    }
    const handleOpenNotification = () => {
        setOpenNotification(!openNotification)
    }
    return (
        <>
            <div className='absolute top-12 -left-2 bg-white w-max dark:bg-[#363636] rounded-[12px] min-w-[180px] px-1.5 py-1.5 border dark:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.27)] flex flex-col'>
                <div className="flex flex-row gap-2 items-center py-2 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                    <IoMdAddCircleOutline size={20} />
                    <span className='dark:text-white text-black text-[14px] font-[400]'>شارژ کردن کیف پول</span>
                </div>
                <div onClick={handleOpenNotification} className="flex flex-row gap-2 items-center py-2 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="min-w-5 min-h-5 h-5 w-5" aria-hidden="true">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                        <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"></path>
                        <circle cx="18" cy="8" r="3"></circle>
                    </svg>
                    <span className='dark:text-white text-black text-[14px] font-[400]'>تنظیمات نوتیفیکیشن</span>
                </div>
                <div onClick={handleOpenLogout} className="flex flex-row gap-2 items-center py-2 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                    <AiOutlineLogin className='text-[#D32F2F]' size={20} />
                    <span className='text-[#D32F2F] text-[14px] font-[400]'>خروج</span>
                </div>
            </div>
            {logout === true ? (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <LogoutSection onClose={setLogout}/>
                </div>
            ):(
                ""
            )}
            {openNotification === true ? (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <NotificationSettings onClose={setOpenNotification}/>
                </div>
            ):(
                ""
            )}
        </>
    )
}

export default DashboardItemSubMenu
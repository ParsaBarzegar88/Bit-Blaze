import React, { useState } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { IoMdAddCircleOutline } from 'react-icons/io'
import DashboardPaymentDetail from './DashboardPaymentDetail/DashboardPaymentDetail'

const DashboardWalletItem = () => {
    const [openUserPayments, setOpenUserPayments] = useState<boolean>(false)
    const handleOpenUserPayments = () => {
        setOpenUserPayments(!openUserPayments)
    }
    return (
        <>
            <div className="flex flex-row gap-2 items-center py-2 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <IoMdAddCircleOutline size={20} />
                <span className='dark:text-white text-black text-[14px] font-[400]'>شارژ کردن کیف پول</span>
            </div>
            <div onClick={handleOpenUserPayments} className="flex flex-row gap-2 items-center py-2 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <AiOutlineLogin size={20} />
                <span className='dark:text-white text-black text-[14px] font-[400]'>لیست تراکنش ها</span>
            </div>
            <div className="flex flex-row gap-2 items-center py-2 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <AiOutlineLogin size={20} />
                <span className='dark:text-white text-black text-[14px] font-[400]'>برداشت وجه</span>
            </div>
            {openUserPayments && (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <DashboardPaymentDetail closePayment={setOpenUserPayments} />
                </div>
            )}
        </>
    )
}

export default DashboardWalletItem
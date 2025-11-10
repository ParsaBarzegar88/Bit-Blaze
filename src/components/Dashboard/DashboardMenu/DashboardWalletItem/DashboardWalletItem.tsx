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
            <div className='absolute -top-30 left-3 bg-white w-max dark:bg-[#363636] rounded-[12px] min-w-[180px] px-1.5 py-1.5 border dark:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.27)] flex flex-col'>
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
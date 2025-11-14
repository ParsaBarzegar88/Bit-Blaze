import React, { FC } from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LiaTimesCircle } from "react-icons/lia";
import { IoCard } from "react-icons/io5";
import { DeleteUserReserve } from '@/core/api/Dashboard/Reserve';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
interface IProps {
    openHouseDetailFunction: () => void;
    reserveId: string
}
const ReserveMoreSection: FC<IProps> = ({ openHouseDetailFunction, reserveId }) => {
    const router = useRouter()
    const handleDeleteReserve = async (id: string) => {
        const res = await DeleteUserReserve(id)
        if (res.message === 'Booking deleted successfully') {
            toast.success('رزرو شما با موفقیت حذف شد', {
                position: 'top-center',
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
            });
            router.refresh()
        }
        else{
            toast.error('مشکلی در حذف کردن رزرو شما به وجود آمده است', {
                position: 'top-center',
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
            });
            router.refresh()
        }
    }
    return (
        <div className='absolute -top-6 left-3 bg-white w-max dark:bg-[#363636] rounded-[12px] min-w-full px-1.5 py-1.5 border dark:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.27)] flex flex-col'>
            <div className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <IoCard size={20} />
                <Link href={`dashboard-payment/${reserveId}`} className='dark:text-white text-black text-[14px] font-[400]'>پرداخت</Link>
            </div>
            <div onClick={openHouseDetailFunction} className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <IoIosInformationCircleOutline size={20} />
                <span className='dark:text-white text-black text-[14px] font-[400]'>جزئیات</span>
            </div>
            <div onClick={() => handleDeleteReserve(reserveId)} className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <LiaTimesCircle size={20} />
                <span className='dark:text-white text-black text-[14px] font-[400]'>حذف</span>
            </div>

        </div>

    )
}

export default ReserveMoreSection
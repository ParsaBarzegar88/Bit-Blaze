import React, { FC } from 'react'
import { LiaTimesCircle } from "react-icons/lia";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RemoveFavoriteHouse } from '@/core/api/Dashboard/Favorite';
import Link from 'next/link';

interface IProps {
    reserveId:string;
    // houseId: string;
}
const FavoriteMoreSection: FC<IProps> = ({ reserveId  }) => {
    const router = useRouter()
    const handleDeleteReserve = async (id: string) => {
        const res = await RemoveFavoriteHouse(id)
        if (res.message === "Favorite removed successfully") {
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
        else {
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
        <div className='absolute -top-10 left-3 bg-white w-max dark:bg-[#363636] rounded-[12px] min-w-full px-1.5 py-1.5 border dark:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.27)] flex flex-col'>
            <Link href={`/house-reserve/${reserveId}#house-date`} className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <IoIosAddCircleOutline size={20} />
                <span className='dark:text-white text-black text-[14px] font-[400]'>رزرو</span>
            </Link>
            <div onClick={() => handleDeleteReserve(reserveId)} className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <LiaTimesCircle size={20} />
                <span className='dark:text-white text-black text-[14px] font-[400]'>حذف</span>
            </div>

        </div>

    )
}

export default FavoriteMoreSection
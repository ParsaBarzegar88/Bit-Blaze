import { DeleteUserReserve } from '@/core/api/Dashboard/Reserve';
import { AcceptUserReserve, CancelUserReserve } from '@/core/api/SellerDashboard/ReserveManagement';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LiaTimesCircle } from "react-icons/lia";
import { TbCancel } from "react-icons/tb";
import { toast } from 'react-toastify';

interface IProps {
    openHouseDetailFunction: () => void;
    reserveId: string
}
const ReserveMoreSection: FC<IProps> = ({ openHouseDetailFunction, reserveId }) => {
    const router = useRouter()
    const AcceptReserve = async (id: string) => {
        const res = await AcceptUserReserve(id)
        if (res.message === "Booking continued successfully") {
            toast.success('رزرو شما با موفقیت تایید شد', {
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
            toast.error('مشکلی در تایید کردن رزرو شما به وجود آمده است', {
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
    const handleDeleteReserve = async (id: string) => {
        const res = await DeleteUserReserve(id)
        if (res.message === 'Booking continued successfully') {
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
    const CancelReserve = async (id: string) => {
        const res = await CancelUserReserve(id)
        if (res.message === 'Booking canceled successfully') {
            toast.success('رزرو شما با موفقیت لغو شد', {
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
            toast.error('مشکلی در لغو کردن رزرو شما به وجود آمده است', {
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
        <div className='absolute -top-6 left-3 bg-white w-max dark:bg-[#363636] rounded-[12px] z-[900] min-w-full px-1 py-1 border dark:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.27)] flex flex-col'>
            <div onClick={() => AcceptReserve(reserveId)} className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <FaRegCheckCircle size={20} />
                <div className='dark:text-white text-black text-[14px] font-[400]'>تایید رزرو</div>
            </div>
            <div onClick={() => CancelReserve(reserveId)} className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <TbCancel size={20} />
                <div className='dark:text-white text-black text-[14px] font-[400]'>لغو رزرو</div>
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
import { markAllAsRead } from '@/core/api/Dashboard/Announcement';
import { useRouter } from 'next/navigation';
import React, { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify';

interface IProps {
    closeMarkAsRead: Dispatch<SetStateAction<boolean>>;
}
const MarkAsReadButton: FC<IProps> = ({ closeMarkAsRead }) => {
    const router = useRouter()
    const handleMarkAllAsRead = async () => {
        const response = await markAllAsRead()
        closeMarkAsRead(false)
        if (response.message === 'All notifications marked as read') {
            toast.success("عملیات با موفقیت انجام شد", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            router.refresh();
        } else {
            toast.error("مشکلی در عملیات به وجود آمده است", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            router.refresh();
        }
    }
    return (
        <>
            <span onClick={handleMarkAllAsRead} className='text-black text-[14px] font-[400] cursor-pointer bg-[#F79000] px-4 py-2 rounded-[12px] '>موافقت</span>
        </>
    )
}

export default MarkAsReadButton
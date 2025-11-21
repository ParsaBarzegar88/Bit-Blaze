'use client'
import React, { FC, useState } from 'react'
import { LiaTimesCircle } from "react-icons/lia";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RemoveFavoriteHouse } from '@/core/api/Dashboard/Favorite';
import { MdEdit } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import LogoutSection from './LogoutSection/LogoutSection';
import UpdateHouse from './UpdateHouse/UpdateHouse';

interface IProps {
    HouseId: string;
}

const HouseManagementMoreSection: FC<IProps> = ({ HouseId }) => {
    const [isSure, setIsSure] = useState(false)
    const [modal, setModal] = useState(false)
    const handleOpenLogout = () => {
        setIsSure(!isSure)
    }
    const handleOpenModal = () => {
        setModal(!modal)
    }
    const router = useRouter()
    const handluReserve = async (id: string) => {
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
        <>
            <div className='bg-white w-48 dark:bg-[#363636] rounded-[12px] px-1.5 py-1.5 border dark:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.27)] flex flex-col'>
                <div
                    onClick={handleOpenModal}
                    className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors"
                >
                    <MdEdit size={20} />
                    <span className='dark:text-white text-black text-[14px] font-[400]'>ویرایش ملک</span>
                </div>
                <div
                    onClick={handleOpenLogout}
                    className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors"
                >
                    <LiaTimesCircle size={20} />
                    <span className='dark:text-white text-black text-[14px] font-[400]'>حذف</span>
                </div>
            </div>
            {isSure === true ? (
                <div className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'>
                    <LogoutSection onClose={setIsSure} Id={HouseId} />
                </div>
            ) : (
                ""
            )}
            {modal === true ? (
                <div className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'>
                    <UpdateHouse onClose={() => setModal(false)} Id={HouseId} />
                </div>
            ) : (
                ""
            )}
        </>

    )
}

export default HouseManagementMoreSection
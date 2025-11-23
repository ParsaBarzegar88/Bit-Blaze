'use client'
import { addHouseToFavorite } from '@/core/api/MortgageRent/MortgageRentDetail/MortgageRentDetail';
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { FC } from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoLocationOutline, IoShareSocialOutline } from 'react-icons/io5'
import { MdCompare } from 'react-icons/md';
import { toast } from 'react-toastify';
interface IProps {
    houseData: IHousesDetail;
    userId: string | undefined;
}
const MortgageRentDetailTotal: FC<IProps> = ({ houseData, userId }) => {
    const AddToFavorite = async () => {
        const result = await addHouseToFavorite(houseData.id, userId)
        if (result.message === 'Invalid token') {
            toast.error('لطفا ابتدا وارد حساب کاربری خود شوید', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
            setTimeout(() => {
                redirect('/login')
            }, 3300);
        }
        else if (result.message === "This house is already in favorites") {
            toast.error('این خانه قبلا به علاقه مندی های شما افزوده شده است', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
        }
        else {
            toast.success('عملیات با موفقیت انجام شد', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
        }
    }
    const handleSharePage = async () => {
        if (!navigator.share) {
            toast.error('قابلیت به اشتراک گذاری در مرورگر شما وجود ندارد', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
            return
        }
        const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
        try {
            await navigator.share({
                title: houseData.title,
                text: houseData.caption,
                url: shareUrl,
                
            });
        } catch {
            toast.error('مشکلی در اشتراک گذاری به وجود آمده است', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
        }
    }
    return (
        <div className='flex flex-col w-full gap-3 mt-5'>
            <div className='flex sm:flex-row-reverse flex-col items-start sm:gap-0 gap-3 sm:items-center w-full justify-between'>
                <div className='flex flex-row gap-2'>
                    <Link href={`/compare?id=${houseData.id}`} className='dark:bg-[#393939] bg-[#999999] dark:text-[#AAAAAA]  hover:scale-[1.1] duration-300 cursor-pointer
                        text-white w-[36px] h-[36px] flex items-center justify-center rounded-[12px]'>
                        <MdCompare />
                    </Link>
                    <span onClick={handleSharePage} className='dark:bg-[#393939] bg-[#999999] dark:text-[#AAAAAA]  hover:scale-[1.1] duration-300 cursor-pointer
                        text-white w-[36px] h-[36px] flex items-center justify-center rounded-[12px]'>
                        <IoShareSocialOutline />
                    </span>
                    <span onClick={AddToFavorite} className='dark:bg-[#393939] bg-[#999999] dark:text-[#AAAAAA] duration-300 hover:scale-[1.1] cursor-pointer
                        text-white w-[36px] h-[36px] flex items-center justify-center rounded-[12px]'>
                        <IoIosHeartEmpty />
                    </span>
                </div>
                <h2 className='dark:text-white  text-black text-[28px] font-[600]'>{houseData.title}</h2>
            </div>
            <div className='flex flex-row gap-2 dark:text-[#AAAAAA]'>
                <IoLocationOutline size={20} />
                <p>آدرس : {houseData.address}</p>
            </div>
        </div>
    )
}

export default MortgageRentDetailTotal
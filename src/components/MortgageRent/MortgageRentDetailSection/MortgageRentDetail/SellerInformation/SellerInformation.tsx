import React, { FC } from 'react'
import CallSVG from '../../../MortgageRentSVG/callSVG';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { BsChatRightTextFill } from "react-icons/bs";
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';

interface IProps {
    sellerInfo: IHousesDetail;
}
const SellerInformation:FC<IProps> = ({sellerInfo}) => {
    return (
        <div className='min-w-[250px] h-full w-full lg:w-fit dark:bg-[#393939] border-2 dark:border-[#565656] bg-white dark:shadow-none shadow-[0_0px_16px_rgba(0,0,0,0.2)] rounded-3xl'>
            <div className='flex flex-col w-full justify-center items-center'>
                <h3 className='dark:bg-[#565656] bg-[#ebebeb] w-[80%] h-[36px] flex justify-center dark:fill-white fill-black dark:text-white
                            text-black text-[16px] font-[500] items-center mx-auto flex-row gap-1.5 rounded-b-4xl'>
                    <CallSVG />
                    اطلاعات تماس
                </h3>
                <div className='flex flex-col gap-2 justify-center items-center  mt-5'>
                    <span className='dark:bg-[#565656] bg-[#afafaf] rounded-2xl w-[48px] h-[48px]'></span>
                    <span>{sellerInfo.sellerName}</span>
                    <span className='dark:text-[#AAAAAA] text-[13px] flex flex-row gap-2'>
                        <FaRegCalendarAlt />
                        12 مرداد - 1401 / 12:33
                    </span>
                </div>
                <div className='mt-5 flex flex-col gap-2'>
                    <div className='flex flex-row justify-center items-center'>
                        <span className='flex flex-row justify-center items-center gap-1 dark:text-[#AAAAAA] text-[13px] ml-1'>
                            <HiOutlineCurrencyDollar size={17} />
                            قیمت رهن از :
                        </span>
                        <span className='dark:text-[#8CFF45] text-[#66b436] text-[16px]'>
                            {sellerInfo.discounted_price ? sellerInfo.discounted_price : sellerInfo.price} ت
                        </span>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <span className='flex flex-row justify-center items-center gap-1 dark:text-[#AAAAAA] text-[13px] ml-1'>
                            <HiOutlineCurrencyDollar size={17} />
                            قیمت رهن از :
                        </span>
                        <span className='dark:text-[#8CFF45] text-[#66b436] text-[16px]'>
                            {sellerInfo.discounted_price ? sellerInfo.discounted_price : sellerInfo.price} ت
                        </span>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 mt-16 mb-2 w-[80%]'>
                    <button className='dark:bg-[#8CFF45] bg-[#66b436] h-[32px] w-full rounded-[10px] cursor-pointer hover:scale-[1.01] duration-300'>
                        <span className='flex flex-row items-center justify-center text-[13px] gap-2 dark:fill-black fill-white dark:text-black text-white'>
                            <CallSVG />
                            <span>تماس با 09xxxxxxxxx</span>
                        </span>
                    </button>
                    <button className='dark:border-white border-black border h-[32px] w-full rounded-[10px] cursor-pointer hover:scale-[1.01] duration-300'>
                        <span className='flex flex-row items-center justify-center text-[13px] gap-2 dark:text-white text-black'>
                            <BsChatRightTextFill size={14} />
                            <span>گفتگو با فروشنده</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SellerInformation
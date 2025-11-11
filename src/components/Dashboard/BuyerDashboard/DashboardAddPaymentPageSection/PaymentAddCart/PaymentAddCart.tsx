'use client'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { HiBuildingStorefront } from "react-icons/hi2";
import { IoCashOutline } from "react-icons/io5";
import { FaShopLock } from "react-icons/fa6";
import Link from 'next/link';
import { IUserReserve } from '@/core/types/Dashboard/IReserve';

interface IProps{
    houseInfo:IUserReserve
}
const PaymentAddCart:FC<IProps> = ({houseInfo}) => {
    const [cardNumber, setCardNumber] = useState('');

    const formatCardNumber = (value: string) => {
        const digits = value.replace(/\D/g, '');
        const limited = digits.slice(0, 16);
        const formatted = limited
            .replace(/(\d{4})(?=\d)/g, '$1 ')
            .trim();

        return formatted;
    };
    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const formattedValue = formatCardNumber(rawValue);

        setCardNumber(formattedValue);
    };
    return (
        <div className='flex flex-col gap-2 py-3 px-3 mx-auto -mt-10 max-w-[75%] '>
            <div className='flex flex-row justify-center sm:justify-between py-3 px-3 items-center shadow-[0_5px_10px_rgba(0,0,0,0.1)] bg-white rounded-[16px]'>
                <div className='w-[100px] h-fit sm:flex hidden'>
                    <Image src={'/assets/payment/SepLogo.png'} alt='Shaparak' width={110} height={100} className='w-full h-full object-contain' />
                </div>
                <span className='text-[20px] font-[800]'>درگاه پرداخت اینترنتی سپ</span>
                <div className='w-[100px] h-fit p-3 sm:flex hidden'>
                    <Image src={'/assets/payment/Shaparak-Logo.png'} alt='Shaparak' width={100} height={100} className='w-full h-full object-contain' />
                </div>
            </div>
            <div className='flex lg:flex-row flex-col-reverse gap-2.5 w-full mt-3'>
                <div className='flex flex-col gap-2 w-[100%] px-3 py-3 bg-white rounded-[16px] shadow-[0_5px_10px_rgba(0,0,0,0.1)]'>
                    <span className='text-[#0076DB] text-[17px] bg-[#becdda] px-3 py-3 rounded-[12px]'>اطلاعات کارت خود را وارد کنید</span>
                    <div className='flex flex-col gap-10 lg:max-w-[75%] w-full mx-auto mt-4'>
                        <div className='flex flex-col gap-1.5'>
                            <label className='text-[#4e4e4e]'>شماره کارت</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder='---- ---- ---- ----'
                                maxLength={19}
                                className='
                                  bg-[#e4e4e4]
                                  placeholder:text-center 
                                  text-center 
                                  px-2 py-2
                                  border border-[#d3d3d3]
                                  rounded-md 
                                  outline-none 
                                  text-[15px] 
                                  font-mono 
                                  tracking-wider
                                  transition-all
                                '
                                dir='ltr'
                            />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label className='text-[#4e4e4e]'>شماره شناسایی دوم (CVV2)</label>
                            <input
                                type="text"
                                placeholder='CVV2'
                                className='
                                bg-[#e4e4e4]
                                  placeholder:text-center 
                                  text-center 
                                  px-2 py-2
                                  border border-[#d3d3d3]
                                  rounded-md 
                                  outline-none 
                                  text-[15px] 
                                  font-mono 
                                  tracking-wider
                                  transition-all
                                  '
                                dir='ltr'
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='text-[#4e4e4e] mb-1.5 mt-1.5'>تاریخ انقضا</label>
                            <div className='flex flex-row  gap-4.5 w-full'>
                                <div className='flex flex-col gap-1.5 w-full'>
                                    <input
                                        type="text"
                                        placeholder='ماه'
                                        maxLength={2}
                                        className='
                                        w-full
                                  bg-[#e4e4e4]
                                  placeholder:text-center 
                                  text-center 
                                  px-2 py-2
                                  border border-[#d3d3d3]
                                  rounded-md 
                                  outline-none 
                                  text-[15px] 
                                  font-mono 
                                  tracking-wider
                                  transition-all
                                '
                                        dir='ltr'
                                    />
                                </div>
                                <div className='flex flex-col gap-1.5 w-full'>
                                    <input
                                        type="text"
                                        placeholder='سال'
                                        maxLength={2}
                                        className='
                                        w-full
                                  bg-[#e4e4e4]
                                  placeholder:text-center 
                                  text-center 
                                  px-2 py-2
                                  border border-[#d3d3d3]
                                  rounded-md 
                                  outline-none 
                                  text-[15px] 
                                  font-mono 
                                  tracking-wider
                                  transition-all
                                '
                                        dir='ltr'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label className='text-[#4e4e4e]'>رمز دوم</label>
                            <input
                                type="password"
                                placeholder='رمز دوم'
                                className='
                                bg-[#e4e4e4]
                                  placeholder:text-center 
                                  text-center 
                                  px-2 py-2
                                  border border-[#d3d3d3]
                                  rounded-md 
                                  outline-none 
                                  text-[15px] 
                                  font-mono 
                                  tracking-wider
                                  transition-all
                                  '
                                dir='ltr'
                            />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label className='text-[#4e4e4e]'>کد امنیتی</label>
                            <input
                                type="password"
                                placeholder='رمز دوم'
                                className='
                                bg-[#e4e4e4]
                                  placeholder:text-center 
                                  text-center 
                                  px-2 py-2
                                  border border-[#d3d3d3]
                                  rounded-md 
                                  outline-none 
                                  text-[15px] 
                                  font-mono 
                                  tracking-wider
                                  transition-all
                                  '
                                dir='ltr'
                            />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label className='text-[#4e4e4e]'>توضیحات (اختیاری)</label>
                            <textarea
                                placeholder='توضیحات'
                                className='
                                bg-[#e4e4e4]
                                  placeholder:text-right 
                                  text-right 
                                  px-2 py-2
                                  border border-[#d3d3d3]
                                  rounded-md 
                                  outline-none 
                                  text-[15px] 
                                  font-mono 
                                  tracking-wider
                                  transition-all
                                  '
                            />
                        </div>
                        <div className='flex flex-row items-center gap-1.5'>
                            <input
                                type="checkbox"
                                id='saveCart'
                                className='
                                cursor-pointer
                                bg-[#e4e4e4]
                                  placeholder:text-center 
                                  checked:bg-[#0076DB]
                                  w-[15px]
                                  h-[15px]
                                  text-center 
                                  px-2 py-2
                                  border border-[#d3d3d3]
                                  rounded-md 
                                  outline-none 
                                  text-[15px] 
                                  font-mono 
                                  tracking-wider
                                  transition-all
                                  '
                                dir='ltr'
                            />
                            <label className='text-[#4e4e4e] cursor-pointer' htmlFor='saveCart'>شماره کارت در درگاه ثبت شود</label>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <button className='w-full border-[16px] bg-[#76fc76] px-2 py-2 rounded-[9px] cursor-pointer border-none'>پرداخت {houseInfo.houseDetail.price} تومان</button>
                            <Link href={'/dashboard-reserves'} className='w-full text-center border-[16px] px-2 py-2 rounded-[9px] cursor-pointer border-none text-red-600'>انصراف</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 lg:max-w-[55%] w-full h-fit px-3 py-3 bg-white rounded-[16px] shadow-[0_5px_10px_rgba(0,0,0,0.1)]'>
                    <div className='text-[#0076DB] text-[17px] bg-[#becdda] px-3 py-3 rounded-[12px] flex flex-row justify-between'>
                        <span>زمان باقی مانده : </span>
                        <span>09:24</span>
                    </div>
                    <div className='flex flex-row gap-3 text-[#999999] items-center'>
                        <HiBuildingStorefront size={30}/>
                        <div className='flex flex-col gap-1.5 text-[#999999] '>
                            <span className='text-[18px]'>پذیرنده</span>
                            <span className='font-[700] text-[18px] text-[#464646]'>BitBlaze</span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 text-[#999999] items-center'>
                        <IoCashOutline size={30}/>
                        <div className='flex flex-col gap-1.5 text-[#999999] '>
                            <span className='text-[18px]'>مبلغ</span>
                            <span className='font-[700] text-[18px] text-[#464646]'>{houseInfo.houseDetail.price}</span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 text-[#999999] items-center'>
                        <FaShopLock size={30}/>
                        <div className='flex flex-col gap-1.5 text-[#999999] '>
                            <span className='text-[18px]'>شماره پذیرنده / ترمینال</span>
                            <span className='font-[700] text-[18px] text-[#464646]'>123456 / 123456</span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 text-[#999999] items-center'>
                        <FaShopLock size={30}/>
                        <div className='flex flex-col gap-1.5 text-[#999999] '>
                            <span className='text-[18px]'>سایت پذیرنده</span>
                            <span className='font-[700] text-[18px] text-[#464646]'>BitBlaze.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentAddCart
"use client";
import React, { FC, useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import dynamic from "next/dynamic";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { LucideCircleDollarSign } from "lucide-react";
import { IHousesDetail } from "@/core/types/HouseReserveDetail/IHousesDetail";
import { useCookies } from 'next-client-cookies';
import { redirect } from "next/navigation";
const DatePicker = dynamic(() => import("react-multi-date-picker"), {
  ssr: false,
});

const calculateDiscountPercentage = (originalPrice: string, discountedPrice: string | null): number => {
  if (!discountedPrice) return 0;

  const original = parseFloat(originalPrice);
  const discounted = parseFloat(discountedPrice);

  if (original <= 0 || discounted <= 0 || discounted >= original) return 0;

  const percentage = ((original - discounted) / original) * 100;
  return Math.round(percentage);
}

interface IProps {
  info: IHousesDetail;
}

const ReserveHouse: FC<IProps> = ({ info }) => {
  const cookieStore = useCookies()
  const discountPercentage = calculateDiscountPercentage(info.price, info.discounted_price);
  const [selectedDepartureDay, setSelectedDepartureDay] = useState<DateObject | null>(null);
  const [selectedReturnDay, setSelectedReturnDay] = useState<DateObject | null>(null);
  const [guestCount, setGuestCount] = useState(2);
  const increaseGuests = () => {
    setGuestCount(prev => prev + 1);
  };

  const decreaseGuests = () => {
    setGuestCount(prev => (prev > 1 ? prev - 1 : 1));
  };
  const bookHouse = () => {
    const data = {
      info,
      selectedDepartureDay,
      selectedReturnDay,
      guestCount
    }
    cookieStore.set('book', JSON.stringify(data))
    redirect('/booking-house')
  }
  return (
    <div className="flex flex-col items-center px-4 max-w-[100%] w-full  bg-[#fcfcfc] dark:bg-[#393939] dark:shadow-none shadow-[0_0px_16px_rgba(0,0,0,0.2)] rounded-4xl border dark:border-[#565656] border-none">
      <div className="w-[80%] h-12 flex-row-reverse dark:bg-[#565656] bg-[#ebebeb] flex gap-3 rounded-br-4xl rounded-bl-4xl items-center justify-center">
        <div className="dark:text-white text-[13px] sm:text-[17px] md:text-[15px] text-black font-[600]">
          رزرو خونه برای :
        </div>
        <BiBuildingHouse className="dark:text-white text-black w-5 h-5" />
      </div>

      <div className="flex flex-col items-center gap-5 mt-5 w-full">
        <div className="w-full group  flex flex-col">
          <label className="block dark:group-hover:text-[#FFFFFF] group-hover:text-[#363636] dark:text-[#AAAAAA] text-black font-[400] text-xs sm:text-[13px] mb-1">
            تاریخ رفت :
          </label>
          <DatePicker
            key="departure"
            value={selectedDepartureDay}
            onChange={(date: DateObject | null) => {
              setSelectedDepartureDay(date);
            }}
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ رفت "
            calendarPosition="bottom-right"
            format="YYYY/MM/DD"
            inputClass="w-full h-[44px] sm:h-[50px] px-3 dark:bg-[#353535] border border-[#AAAAAA] dark:border-[#AAAAAA] placeholder:text-gray-500 text-black bg-white rounded-xl sm:rounded-2xl dark:group-hover:border-[#FFFFFF] dark:text-[#AAAAAA] dark:group-hover:text-[#FFFFFF] dark:placeholder:text-[#AAAAAA] dark:hover:bg-[#353535] dark:focus:outline-none dark:focus:border-[#FFFFFF] dark:focus:text-[#FFFFFF] text-right text-sm sm:text-base box-border"
          />
        </div>
        <div className="w-full group  flex flex-col">
          <label className="block dark:group-hover:text-[#FFFFFF] group-hover:text-[#363636] dark:text-[#AAAAAA] text-black font-[400] text-xs sm:text-[13px] mb-1">
            تاریخ برگشت :
          </label>
          <DatePicker
            key="return"
            value={selectedReturnDay}
            onChange={(date: DateObject | null) => {
              setSelectedReturnDay(date);
            }}
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ برگشت "
            calendarPosition="bottom-right"
            format="YYYY/MM/DD"
            inputClass="w-full h-[44px] sm:h-[50px] px-3 dark:bg-[#353535] border border-[#AAAAAA] dark:border-[#AAAAAA] placeholder:text-gray-500 text-black bg-white rounded-xl sm:rounded-2xl dark:group-hover:border-[#FFFFFF] dark:text-[#AAAAAA] dark:group-hover:text-[#FFFFFF] dark:placeholder:text-[#AAAAAA] dark:hover:bg-[#353535] dark:focus:outline-none dark:focus:border-[#FFFFFF] dark:focus:text-[#FFFFFF] text-right text-sm sm:text-base box-border"
          />
        </div>
        <div className="w-full group flex flex-col">
          <label className="block dark:group-hover:text-[#FFFFFF] group-hover:text-[#363636] dark:text-[#AAAAAA] text-black font-[400] text-xs sm:text-[13px] mb-1">
            تعداد نفرات :
          </label>
          <div className="relative flex items-center">
            <input
              type="number"
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
              className="w-full h-[44px] sm:h-[50px] px-3 dark:bg-[#353535] border border-[#AAAAAA] dark:border-[#AAAAAA] placeholder:text-gray-500 text-black bg-white rounded-xl sm:rounded-2xl dark:group-hover:border-[#FFFFFF] dark:text-[#AAAAAA] dark:group-hover:text-[#FFFFFF] dark:placeholder:text-[#AAAAAA] dark:hover:bg-[#353535] dark:focus:outline-none dark:focus:border-[#FFFFFF] dark:focus:text-[#FFFFFF] text-right text-sm sm:text-base pr-12 box-border appearance-none"
              placeholder="2 نفر"
              min="1"
              style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
            />
            <div className="absolute left-2 flex flex-row items-center gap-2">
              <button
                type="button"
                onClick={increaseGuests}
                className="bg-green-500 text-white rounded-[8px] w-6 h-6 flex items-center justify-center hover:bg-green-600 focus:outline-none"
              >
                <FaPlus size={12} />
              </button>
              <div className="dark:text-white text-black text-sm min-w-[20px] text-center">{guestCount}</div>
              <button
                type="button"
                onClick={decreaseGuests}
                className="bg-green-500 text-white rounded-[8px] w-6 h-6 flex items-center justify-center hover:bg-green-600 focus:outline-none"
              >
                <FaMinus size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-3 w-full">
        <div className="w-full h-1 bg-[#d8d8d8] dark:bg-[#565656] rounded-2xl"></div>
        <div className="w-[80%] h-9 flex-row-reverse dark:bg-[#565656] bg-[#d8d8d8] flex gap-3 rounded-br-4xl rounded-bl-4xl items-center justify-center">
          <div className="dark:text-white text-[14px] md:text-[16px] text-black font-[400]">
            رزرو خونه برای :
          </div>
          <LucideCircleDollarSign className="dark:text-white text-black w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-3 w-full">
        <div className="w-full h-1 bg-[#d8d8d8] dark:bg-[#565656] rounded-2xl"></div>
        <div className="flex md:flex-row flex-col justify-center gap-5 items-center w-full mt-3">
          {info.discounted_price !== null ? (
            <div className='flex flex-row md:flex-col-reverse items-center gap-2 md:gap-4 order-2 md:order-1 whitespace-nowrap'>
              <p className='line-through dark:text-[#AAAAAA] text-[#AAAAAA] text-xs md:text-sm'>{info.price} ت</p>
              <span className='bg-red-500 w-8 md:w-11 py-1 rounded-[6px] md:rounded-[8px] flex text-white items-center justify-center text-xs'>{discountPercentage}%</span>
            </div>
          ) : ""
          }
          <h2 className={`${info.discounted_price === null ? "m-1 md:mt-10 flex items-center" : ""} dark:text-[#8CFF45] text-[#66b436] items-center flex text-base md:text-lg lg:text-2xl font-bold whitespace-nowrap order-1 md:order-2`}>
            {info.discounted_price ? info.discounted_price : info.price} ت
          </h2>
        </div>
      </div>
      <div className="w-full mt-5 mb-3">
        <button
          onClick={bookHouse}
          type='submit'
          className='cursor-pointer dark:text-black text-white flex rounded-[12px] flex-row justify-center items-center font-[600] text-[16px] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] bg-[#8CFF45] w-full h-[44px] gap-4'
        >
          همین الان رزرو کن
          <MdKeyboardArrowLeft className='dark:text-black text-white' />
        </button>
      </div>
    </div>
  );
};

export default ReserveHouse;
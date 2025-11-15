'use client'
import { IUserReserve } from '@/core/types/Dashboard/IReserve';
import { formatToPersianDate } from '@/utils/date';
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia';
import ReserveTravelerList from './ReserveTravelerList/ReserveTravelerList';

interface IProps {
  closeReserversLists: Dispatch<SetStateAction<boolean>>;
  reserversDetail: IUserReserve;
}
const ReserveReserversLists: FC<IProps> = ({ closeReserversLists, reserversDetail }) => {
  const [openTravelersList, setOpenTravelersList] = useState<boolean>(false)
  const handleOpenTravelersList = () => {
    setOpenTravelersList(!openTravelersList)
  }
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-2xl mx-4 
          flex flex-col max-h-[90vh]'>
        <div className='flex justify-between items-center p-6'>
          <h2 className='text-[24px] font-[400] text-gray-800 dark:text-white'>
            لیست رزرو ها
          </h2>
          <button
            onClick={() => closeReserversLists(false)}
            className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
          >
            <LiaTimesSolid size={20} />
            <span className='text-md'>بستن</span>
          </button>
        </div>
        <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
        <div className='flex flex-col gap-1.5 w-[96%] justify-center'>
          <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-2 py-2 px-2 rounded-[10px] mx-4 ">
            <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px] pr-2">
              تاریخ
            </div>
            <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px]"></div>
          </div>
          <div className="w-full items-center grid grid-cols-2  py-2 px-2 rounded-[10px] mx-4 mb-1.5">
            <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px] pr-2">
              {formatToPersianDate(reserversDetail.reservedDates[0].value)}
            </div>
            <div onClick={handleOpenTravelersList} className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px] cursor-pointer">
              اطلاعات مسافر ها
            </div>
          </div>
        </div>
      </div>
      {openTravelersList && (
        <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
          <ReserveTravelerList closeTravelersList={setOpenTravelersList} travelersDetail={reserversDetail} />
        </div>
      )}
    </div>
  )
}

export default ReserveReserversLists
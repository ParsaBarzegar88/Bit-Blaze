import { IUserReserve } from '@/core/types/Dashboard/IReserve';
import { formatToPersianDate } from '@/utils/date';
import React, { Dispatch, FC, SetStateAction } from 'react'
import { LiaTimesSolid } from 'react-icons/lia';

interface IProps {
    closeTravelersList: Dispatch<SetStateAction<boolean>>;
    travelersDetail: IUserReserve;
}
const ReserveTravelerList: FC<IProps> = ({ closeTravelersList, travelersDetail }) => {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-2xl mx-4 
              flex flex-col max-h-[90vh]'>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='text-[24px] font-[400] text-gray-800 dark:text-white'>
                        لیست مسافر ها
                    </h2>
                    <button
                        onClick={() => closeTravelersList(false)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
                    >
                        <LiaTimesSolid size={20} />
                        <span className='text-md'>بستن</span>
                    </button>
                </div>
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                <div className='flex flex-col gap-1.5 w-[96%] justify-center'>
                    <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-4 py-2 px-2 rounded-[10px] mx-4 ">
                        <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px]">
                            نام
                        </div>
                        <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px]">
                            کد ملی
                        </div>
                        <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px]">
                            جنسیت
                        </div>
                        <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px]">
                            تاریخ تولد
                        </div>
                    </div>
                    {travelersDetail.traveler_details?.map((item , index) => (
                        <div key={index} className="w-full items-center grid grid-cols-4  py-2 px-2 rounded-[10px] mx-4 mb-1.5">
                            <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px]">
                                {item.firstName}
                            </div>
                            <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px]">
                                {item.nationalId}
                            </div>
                            <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px]">
                                {item.gender === 'male' ? 'مرد' : 'زن'}
                            </div>
                            <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px] pr-2">
                                {formatToPersianDate(item.birthDate)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReserveTravelerList
'use client'
import { getReservePayment } from '@/core/api/Dashboard/Reserve';
import { IUserPayments } from '@/core/types/Dashboard/IPayment';
import { formatToPersianDate } from '@/utils/date';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';

interface IProps {
    closePayment: Dispatch<SetStateAction<boolean>>;
    bookingId: number;
}
const ReservePaymentDetail: FC<IProps> = ({ closePayment, bookingId }) => {
    const [userPaymentsInfo, setUserPaymentsInfo] = useState<IUserPayments>()
    useEffect(() => {
        const fetchPayments = async () => {
            const getUserPayments = await getReservePayment()
            setUserPaymentsInfo(getUserPayments)
        }
        if (bookingId) {
            fetchPayments();
        }
    }, [bookingId])

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-2xl mx-4 
                        flex flex-col max-h-[90vh]'>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='text-[24px] font-[400] text-gray-800 dark:text-white'>
                        لیست پرداختی ها
                    </h2>
                    <button
                        onClick={() => closePayment(false)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
                    >
                        <LiaTimesSolid size={20} />
                        <span className='text-md'>بستن</span>
                    </button>
                </div>
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                <div className='flex flex-col gap-1.5 w-[96%] justify-center'>
                    <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-4  py-2 px-2 rounded-[10px] mx-4 ">
                        <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px] pr-2">
                            تاریخ
                        </div>
                        <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px]">
                            شماره پیگیری
                        </div>
                        <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px]">
                            مبلغ
                        </div>
                        <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px]"></div>
                    </div>
                    {(() => {
                        if (!userPaymentsInfo) {
                            return <div className="text-center py-12 text-gray-500">در حال بارگذاری...</div>;
                        }
                        const paymentFilter = userPaymentsInfo?.payments?.filter((item) => item.bookingId === String(bookingId)) || []
                        if (paymentFilter.length === 0) {
                            return (
                                <div className="text-center py-12 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-[#444] rounded-xl">
                                    هیچ پرداختی برای این رزرو ثبت نشده
                                </div>
                            );
                        }
                        return paymentFilter.map((item) => (
                            <div key={item.id} className="w-full items-center grid grid-cols-4  py-2 px-2 rounded-[10px] mx-4 mb-1.5">
                                <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[16px] pr-2">
                                    {formatToPersianDate(item.createdAt)}
                                </div>
                                <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px]">
                                    {item.transactionId ? item.transactionId : item.id}
                                </div>
                                <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px]">
                                    {item.amount}
                                </div>
                                <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[16px] cursor-pointer">
                                    مشاهده رسید
                                </div>
                            </div>
                        ));
                    })()}
                </div>
            </div>
        </div>
    )
}

export default ReservePaymentDetail
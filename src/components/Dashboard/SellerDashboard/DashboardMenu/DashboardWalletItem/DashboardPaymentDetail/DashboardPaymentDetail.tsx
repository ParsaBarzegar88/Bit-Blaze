'use client'
import { getAllPayments } from '@/core/api/Dashboard/Payment';
import { IUserPayment, IUserPayments } from '@/core/types/Dashboard/IPayment';
import { formatToPersianDate } from '@/utils/date';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia';
import PaymentReceipt from './PaymentReceipt/PaymentReceipt';

interface IProps {
    closePayment: Dispatch<SetStateAction<boolean>>;
}
const DashboardPaymentDetail: FC<IProps> = ({ closePayment }) => {
    const [OpenPaymentReceipt, setOpenPaymentReceipt] = useState<string | null>(null)
    const [PaymentsInfo, setPaymentsInfo] = useState<IUserPayments>()
    useEffect(() => {
        const fetchPayments = async () => {
            const getUserPayments = await getAllPayments()
            setPaymentsInfo(getUserPayments)
        }
        fetchPayments()
    }, [])
    const handleOpenPaymentReceipt = (id: string) => {
        setOpenPaymentReceipt(prev => prev === id ? null : id)
    }
    const FindPaymentById = PaymentsInfo?.payments.find(item => item.id === OpenPaymentReceipt)

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-4xl mx-auto 
                        flex flex-col max-h-[90vh] min-w-[300px]'>
                <div className='flex justify-between items-center p-4 sm:p-6'>
                    <h2 className='text-[18px] sm:text-[24px] font-[400] text-gray-800 dark:text-white'>
                        لیست تراکنش های شما
                    </h2>
                    <button
                        onClick={() => closePayment(false)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition text-sm sm:text-md'
                    >
                        <LiaTimesSolid size={18} className='sm:w-[20px]' />
                        <span className='hidden sm:block'>بستن</span>
                    </button>
                </div>
                <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
                <div className='flex flex-col gap-1.5 w-full px-2 sm:px-4 overflow-x-auto custom-scrollbar'>
                    <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-4 min-w-[500px] py-3 sm:py-2 px-3 sm:px-2 rounded-[10px]">
                        <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[14px] sm:text-[16px] pr-2">
                            تاریخ
                        </div>
                        <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[14px] sm:text-[16px]">
                            شماره پیگیری
                        </div>
                        <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[14px] sm:text-[16px]">
                            مبلغ
                        </div>
                        <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[14px] sm:text-[16px]">
                            عملیات
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 min-w-[500px]'>
                        {PaymentsInfo?.totalCount ? PaymentsInfo?.payments.map((item: IUserPayment) => (
                            <div key={item.id} className="w-full items-center grid grid-cols-4 py-3 sm:py-2 px-3 sm:px-2 rounded-[10px] hover:bg-gray-100 dark:hover:bg-[#444444] transition-colors duration-300">
                                <div className="col-span-1 text-right font-[400] text-gray-700 dark:text-white text-[14px] sm:text-[16px] pr-2">
                                    {formatToPersianDate(item.createdAt)}
                                </div>
                                <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[14px] sm:text-[16px] truncate px-1">
                                    {item.transactionId ? item.transactionId : item.id}
                                </div>
                                <div className="col-span-1 text-center font-[400] text-gray-700 dark:text-white text-[14px] sm:text-[16px]">
                                    {item.amount.toLocaleString()} ت
                                </div>
                                <div onClick={() => handleOpenPaymentReceipt(String(item.id))} className="col-span-1 text-center font-[400] text-blue-600 dark:text-blue-400 text-[14px] sm:text-[16px] cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                                    مشاهده رسید
                                </div>
                            </div>
                        )) : (
                            <div className="text-center py-12 text-gray-500 dark:text-gray-400 min-w-full">پرداختی وجود ندارد</div>
                        )}
                    </div>
                </div>
            </div>
            {OpenPaymentReceipt !== null && FindPaymentById && (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <PaymentReceipt paymentId={String(FindPaymentById?.id)} closePaymentReceipt={setOpenPaymentReceipt} />
                </div>
            )}
        </div>
    )
}

export default DashboardPaymentDetail
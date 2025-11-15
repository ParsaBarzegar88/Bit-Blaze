'use client'
import React, { FC, useState } from 'react'
import { formatToPersianDate } from '@/utils/date';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import PaymentReceipt from './PaymentReceipt/PaymentReceipt';
import { ICustomerPayments } from '@/core/types/SellerDashboard/IFinancialManagement';
import { AcceptUserPayment } from '@/core/api/SellerDashboard/FinancialManagement';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
interface IProps {
    userPaymentInfo: ICustomerPayments;
}
const PaymentList: FC<IProps> = ({ userPaymentInfo }) => {
    const [OpenPaymentReceipt, setOpenPaymentReceipt] = useState<string | null>(null)
    const router = useRouter()
    const handleOpenPaymentReceipt = (id: string) => {
        setOpenPaymentReceipt(prev => prev === id ? null : id)
    }
    const FindPaymentById = userPaymentInfo.data?.find(item => item.id === OpenPaymentReceipt)
    const handleAcceptPayment = async (id: string) => {
        const res = await AcceptUserPayment(id)
        if (res.message === "Payment verified successfully") {
            toast.success('پرداخت با موفقیت تایید شد', {
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
            toast.error('مشکلی در تایید کردن پرداخت به وجود آمده است', {
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
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="w-full flex flex-col gap-3 sm:gap-2 min-w-[800px]">
                <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-7 gap-2 py-3 px-2 rounded-[10px]">
                    <div className="col-span-1 sm:col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        تاریخ
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        شماره پیگیری
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        مبلغ
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        وضعیت پرداخت
                    </div>
                    <div className="sm:block col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        نوع تراکنش
                    </div>
                    <div className="sm:block col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm"></div>
                    <div className="sm:block col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm"></div>
                </div>

                <div className="flex flex-col gap-6">
                    {userPaymentInfo?.data?.length > 0 ? (
                        userPaymentInfo.data.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-7 gap-2 items-center py-2 px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300"
                            >
                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {formatToPersianDate(item.createdAt)}
                                </div>
                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.transactionId ? item.transactionId : item.id}
                                </div>
                                <div className="col-span-1 text-right flex justify-start">
                                    <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200">
                                        {item.amount.toLocaleString()}
                                    </span>
                                </div>
                                <div className="col-span-1 text-right flex justify-start items-center">
                                    <div
                                        className={`flex flex-row gap-1 sm:gap-2 items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm 
                                        ${item.status === 'pending'
                                                ? "bg-[#FAC100] text-gray-800"
                                                : item.status === 'canceled'
                                                    ? "bg-[#FF989A] text-gray-800"
                                                    : "bg-[#8CFF45] text-gray-800"
                                            }
                                        `}

                                    >
                                        {item.status === 'pending' ? (
                                            <IoRemoveCircleOutline size={20} className="text-gray-800 text-xs sm:text-sm" />
                                        ) : item.status === 'canceled' ? (
                                            <FaTimes className="text-gray-800 text-xs sm:text-sm" />
                                        ) : (
                                            <FaCheckCircle className="text-gray-800 text-xs sm:text-sm" />
                                        )}
                                        <span className="whitespace-nowrap">
                                            {item.status === 'pending' ? 'در حال انتظار' : item.status === 'canceled' ? 'تایید نشده' : 'تایید شده'}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.description}
                                </div>
                                <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    <span
                                        onClick={() => handleOpenPaymentReceipt(String(item.id))}
                                        className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                                    >
                                        مشاهده رسید
                                    </span>
                                </div>
                                <div className='col-span-1 text-center items-center mx-auto font-[600] text-[#8CFF45] dark:text-[#8CFF45] text-xs sm:text-sm pr-2 line-clamp-1"'>
                                    {item.status === 'pending' ? (
                                        <div onClick={() => handleAcceptPayment(item.id)} className='py-2 px-3 w-fit flex cursor-pointer justify-center items-center border border-[#8CFF45] rounded-[10px]'>
                                            {item.status === 'pending' ? "تایید" : ""}
                                        </div>
                                    ) : ""}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm min-w-full">
                            هیچ پرداختی یافت نشد
                        </div>
                    )}
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

export default PaymentList
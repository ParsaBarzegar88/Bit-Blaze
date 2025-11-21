'use client'
import { getPaymentsById } from '@/core/api/Dashboard/Payment';
import { IUserPayment } from '@/core/types/Dashboard/IPayment';
import { formatToPersianDate } from '@/utils/date';
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { toPng } from 'html-to-image';
import { toast } from 'react-toastify';
interface IProps {
    paymentId: string;
    closePaymentReceipt: Dispatch<SetStateAction<string | null>>;
}
const PaymentReceipt: FC<IProps> = ({ paymentId, closePaymentReceipt }) => {
    const [paymentInfo, setPaymentInfo] = useState<IUserPayment>()
    const invoiceRef = useRef(null);


    const handleDownloadAndContinue = async () => {
        if (!invoiceRef.current) return;
        await new Promise(resolve => setTimeout(resolve, 500));
        const dataUrl = await toPng(invoiceRef.current);
        const link = document.createElement('a');
        link.download = `فاکتور-${paymentInfo?.id || 'payment'}.png`;
        link.href = dataUrl;
        link.click();
        toast.success('دانلود فاکتور با موفقیت انجام شد', {
            position: "top-center",
            autoClose: 2400,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
        });
        await new Promise(resolve => setTimeout(resolve, 1500));
    };

    useEffect(() => {
        const fetchPayment = async () => {
            const res = await getPaymentsById(paymentId);
            setPaymentInfo(res);
        };

        if (paymentId) {
            fetchPayment();
        }
    }, [paymentId]);
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-4xl flex flex-col gap-8 items-center 
      justify-center mx-auto dark:bg-[#363636]'>
                <div className='w-full flex flex-col gap-5.5 rounded-lg bg-gray-700 text-white px-3 py-3' ref={invoiceRef}>
                    <h3 className='font-bold text-[20px] text-center'>رسید پرداخت</h3>
                    <div className='w-full border-t border-dashed border-white'></div>
                    <div className='flex flex-row justify-between'>
                        <span>مبلغ : </span>
                        <span>{paymentInfo?.amount}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span>توضیحات : </span>
                        <span className='max-w-[100px] truncate'>{paymentInfo?.description}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span>وضعیت : </span>
                        <span>{paymentInfo?.status === 'completed' ? 'تکمیل شده' : 'در انتظار تایید'}</span>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span>تاریخ : </span>
                        <span>{formatToPersianDate(paymentInfo?.createdAt ? paymentInfo?.createdAt : "")}</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between w-full'>
                    <button className='bg-green-600 px-2 py-1 rounded-[10px] text-white cursor-pointer' onClick={handleDownloadAndContinue}>دانلود رسید پرداخت</button>
                    <button className='bg-red-500 px-5 py-1 rounded-[10px] text-white cursor-pointer' onClick={() => closePaymentReceipt(null)}>خروج</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentReceipt
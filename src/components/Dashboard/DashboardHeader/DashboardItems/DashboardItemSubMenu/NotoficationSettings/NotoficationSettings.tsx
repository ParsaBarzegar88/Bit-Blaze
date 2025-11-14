import React, { Dispatch, FC, SetStateAction } from 'react'
import { FaTimes } from 'react-icons/fa';
import { Switch } from "@/components/ui/switch"
interface IProps {
    onClose: Dispatch<SetStateAction<boolean>>;
}
const NotificationSettings: FC<IProps> = ({ onClose }) => {
    return (
        <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-4xl flex flex-col gap-8 items-center 
      justify-center mx-auto dark:bg-[#363636]'>
            <div className="flex flex-row justify-between w-full items-center">
                <h3>تنظیمات نوتیفیکیشن</h3>
                <div onClick={() => onClose(false)} className="flex flex-row gap-1.5 cursor-pointer items-center border border-[#FF4242] text-[#FF4242] py-1 px-2 rounded-[20px]">
                    <FaTimes />
                    <span
                        className="cursor-pointer"
                    >
                        بستن
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-5.5 w-full'>
                <div className='flex flex-row justify-between items-center'>
                    <span>نوتیفیکیشن رزرو</span>
                    <Switch dir='ltr'/>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span>نوتیفیکیشن پرداخت</span>
                    <Switch dir='ltr'/>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span>نوتیفیکیشن تخفیف</span>
                    <Switch dir='ltr' />
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span>نوتیفیکیشن سیستمی</span>
                    <Switch dir='ltr'/>
                </div>
            </div>
        </div>
    )
}

export default NotificationSettings
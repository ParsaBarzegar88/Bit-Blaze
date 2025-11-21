import Image from 'next/image'
import React, { Dispatch, FC, SetStateAction } from 'react'
import MarkAsReadButton from './MarkAsReadButton';

interface IProps{
    onClose: Dispatch<SetStateAction<boolean>>;
}
const MarkAsReadAnnouncement:FC<IProps> = ({onClose}) => {
    return (
        <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-4xl flex flex-col gap-8 items-center 
      justify-center mx-auto dark:bg-[#363636]'>
            <Image src={'/assets/Dashboard/WarningIcon.png'} alt='Warning' width={90} height={100} />
            <div className='text-[24px] text-center dark:text-white text-black font-[900]'>
                آیا مطمئن هستید که میخواهید همه مطالب سایت را به عنوان خوانده شده علامت بزنید؟
            </div>
            <div className='flex flex-row gap-5'>
                <span className='text-black dark:text-white text-[14px] font-[400] cursor-pointer px-4 py-2 ' onClick={() => onClose(false)}>انصراف</span>
                <MarkAsReadButton closeMarkAsRead={onClose} />
            </div>
        </div>
    )
}

export default MarkAsReadAnnouncement
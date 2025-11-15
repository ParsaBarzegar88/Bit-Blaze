import { DeleteHouseBySeller } from '@/core/api/SellerDashboard/MyHouse';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify';

interface IProps{
    onClose:Dispatch<SetStateAction<boolean>>;
    Id: String
}
const LogoutSection:FC<IProps> = ({onClose, Id}) => {
        const router = useRouter()
        const handleDeleteReserve = async (id: string) => {
            const res = await DeleteHouseBySeller(id)
            if (res.message === "House and all related data deleted successfully") {
                toast.success('ملک شما با موفقیت حذف شد', {
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
                toast.error('مشکلی در حذف کردن ملک شما به وجود آمده است', {
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
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-4xl flex flex-col gap-8 items-center 
      justify-center mx-auto dark:bg-[#363636]'>
            <Image src={'/assets/Dashboard/WarningIcon.png'} alt='Warning' width={90} height={100}/>
            <div className='text-[24px] max-[400px]:items-center w-fit max-[450px]:text-[17px] dark:text-white text-black font-[900]'>
                آیا از حذف ملک مطمئن هستید؟
            </div>
            <div className='flex flex-row gap-5'>
                <span className='text-black dark:text-white text-[14px] font-[400] cursor-pointer px-4 py-2 ' onClick={() => onClose(false)}>انصراف</span>
                <button onClick={() => handleDeleteReserve(String(Id))}>
                    حذف
                </button>
            </div>
        </div>
    </div>
  )
}

export default LogoutSection
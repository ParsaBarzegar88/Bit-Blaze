import { SendProfileImage } from '@/core/api/Dashboard/Profile';
import Image from 'next/image';
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify';

interface IProps {
  closeSelectedPicture: Dispatch<SetStateAction<boolean>>
}
const SelectedProfilePicture: FC<IProps> = ({ closeSelectedPicture }) => {
  const [selectedPicture, setSelectedPicture] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setSelectedPicture(file)
    }
  };
  const handleSendImage = async () => {
    if (!selectedPicture) {
      return;
    }
    const ImageData = new FormData()
    ImageData.append('picture', selectedPicture)
    const result = await SendProfileImage(ImageData)
    if (result.message = "Profile picture uploaded successfully") {
      closeSelectedPicture(false)
      toast.success('عکس با موفقیت ذخیره شد', {
        position: 'top-center',
        autoClose: 2400,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
      });
    } else {
      toast.error('مشکلی در ذخیره کردن عکس به وجود آمده است', {
        position: 'top-center',
        autoClose: 2400,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
      });
    }
  }
  return (
    <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-4xl flex flex-col gap-8 items-center 
      justify-center mx-auto dark:bg-[#363636]'>
      <div className='flex flex-row justify-between w-full items-center'>
        <h3>انتخاب پروفایل</h3>
        <div className='flex flex-row gap-1.5 cursor-pointer items-center border border-[#FF4242] text-[#FF4242] py-1 px-2 rounded-[20px]'>
          <FaTimes />
          <span className='cursor-pointer' onClick={() => closeSelectedPicture(false)}>بستن</span>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='relative w-[225px] h-[225px] rounded-full bg-[#D9D9D9]'>
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="پیش‌نمایش پروفایل"
              width={225}
              height={225}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className='flex flex-row gap-2'>
        <button className='px-3 py-2 rounded-[12px] bg-[#d8d8d8] cursor-pointer text-[#888888]' onClick={() => setPreviewUrl('')}>حذف تصویر</button>
        <label className='px-3 py-2 rounded-[12px] bg-[#8CFF45] cursor-pointer' onClick={() => {
          if (previewUrl) {
            handleSendImage()
          }
        }}>
          {previewUrl ? (
            'ارسال تصویر'
          ) : (
            <>
              <input type="file" className='hidden' onChange={handleFileChange} />
              انتخاب
            </>
          )}
        </label>
      </div>
    </div>
  )
}

export default SelectedProfilePicture
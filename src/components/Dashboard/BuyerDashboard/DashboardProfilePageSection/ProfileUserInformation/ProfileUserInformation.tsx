'use client'
import { UpdateProfileInformation } from '@/core/api/Dashboard/Profile';
import { IUserDetail } from '@/core/types/Dashboard/IDashboard'
import React, { FC, useState } from 'react'
import { toast } from 'react-toastify';
interface IProps {
    userInfo: IUserDetail
    userId: string | undefined;
}
const ProfileUserInformation: FC<IProps> = ({ userInfo, userId }) => {
    const [FirstName, setFirstName] = useState<string>(userInfo.user?.firstName || '')
    const [LastName, setLastName] = useState<string>(userInfo.user?.lastName || '')
    const handleUpdateProfileInfo = async () => {
        console.log(String(userId), FirstName, LastName, userInfo.user.email, userInfo.user.phoneNumber)
        const res = await UpdateProfileInformation(String(userId), FirstName, LastName , userInfo.user.email, userInfo.user.phoneNumber)
        console.log(res)
        if (res.ok) {
            toast.success('اطلاعات شما با موفقیت بروزرسانی شد', {
                position: 'top-center',
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
            });
        } else {
            toast.error('مشکلی در بروزرسانی کردن اطاعات شما به وجود آمده است', {
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
        <div className='flex flex-col'>
            <div className='flex max-[1280px]:flex-col gap-5 flex-row justify-between'>
                <div className='flex flex-col gap-4.5 w-full'>
                    <h2 className='text-[20px] font-[900] text-black dark:text-white'>اطلاعات فردی</h2>
                    <p className='text-[16px] font-[400]'>میتوانید اطلاعات فردی خود را تغییر دهید</p>
                    <div className='flex flex-row gap-2.5'>
                        <button className='px-3 py-2 rounded-[12px] bg-[#d8d8d8] cursor-pointer text-[#888888]'>انصراف</button>
                        <button className='px-3 py-2 rounded-[12px] bg-[#8CFF45] cursor-pointer' onClick={handleUpdateProfileInfo}>اعمال تغییرات</button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-start w-full'>
                    <fieldset className='border border-[#AAAAAA] w-full rounded-[16px] h-[56px] max-w-[100%] lg:max-w-[50%]'>
                        <legend className='mr-4 text-[#AAAAAA] text-[16px]'>نام :</legend>
                        <input onChange={(e) => setFirstName(e.target.value)} type="text" value={FirstName} placeholder='نام خود را وارد کنید' className='w-full rounded-[16px] text-[#888888] outline-none focus:outline-none pr-2' />
                    </fieldset>
                    <fieldset className='border border-[#AAAAAA] w-full rounded-[16px] h-[56px] max-w-[100%] lg:max-w-[50%]'>
                        <legend className='mr-4 text-[#AAAAAA] text-[16px]'>نام خانوادگی :</legend>
                        <input onChange={(e) => setLastName(e.target.value)} value={LastName} type="text" placeholder='نام خانوادگی خود را وارد کنید' className='w-full text-[#888888] rounded-[16px] outline-none focus:outline-none pr-2' />
                    </fieldset>
                    <fieldset className='border border-[#AAAAAA] w-full rounded-[16px] h-[56px] max-w-[100%] lg:max-w-[50%]'>
                        <legend className='mr-4 text-[#AAAAAA] text-[16px]'>ایمیل :</legend>
                        <input value={userInfo?.user?.email} disabled type="text" placeholder='ایمیل خود را وارد کنید' className='w-full rounded-[16px] text-[#888888] outline-none focus:outline-none pr-2' />
                    </fieldset>
                    <fieldset className='border border-[#AAAAAA] w-full rounded-[16px] h-[56px] max-w-[100%] lg:max-w-[50%]'>
                        <legend className='mr-4 text-[#AAAAAA] text-[16px]'>شماره موبایل :</legend>
                        <input value={userInfo?.user?.phoneNumber} disabled type="text" placeholder='شماره موبایل خود را وارد کنید' className='w-full rounded-[16px] text-[#888888] outline-none focus:outline-none pr-2' />
                    </fieldset>
                </div>
            </div>
            <div className="w-full mt-8 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300"></div>
        </div>
    )
}

export default ProfileUserInformation
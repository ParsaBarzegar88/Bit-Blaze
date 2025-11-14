'use client'
import { ProfileChangePassword } from '@/core/api/Dashboard/Profile'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ProfileUserSecurity = () => {
    const [currentPassword, setCurrentPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const handleChangePassword = async () => {
        if (newPassword === '' || currentPassword === '') {
            return toast.error('رمز عبور نمیتواند خالی باشد', {
                position: 'top-center',
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
            });
        }
        const res = await ProfileChangePassword(currentPassword, newPassword)
        if (res.message === 'Password changed successfully') {
            toast.success('رمز شما با موفقیت تغییر کرد', {
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
                    <h2 className='text-[20px] font-[900] text-black dark:text-white'>امنیت</h2>
                    <p className='text-[16px] font-[400]'>میتوانید در این بخش رمز خود را تغییر دهید</p>
                    <div className='flex flex-row gap-2.5'>
                        <button className='px-3 py-2 rounded-[12px] bg-[#d8d8d8] cursor-pointer text-[#888888]'>انصراف</button>
                        <button className='px-3 py-2 rounded-[12px] bg-[#8CFF45] dark:text-black cursor-pointer' onClick={handleChangePassword}>اعمال تغییرات</button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-start w-full'>
                    <fieldset className='border border-[#AAAAAA] w-full rounded-[16px] h-[56px] max-w-[100%] lg:max-w-[50%]'>
                        <legend className='mr-4 text-[#AAAAAA] text-[16px]'>رمزعبور قبلی :</legend>
                        <input onChange={(e) => setCurrentPassword(e.target.value)} type="text" placeholder='رمزعبور قبلی خود را وارد کنید' className='w-full rounded-[16px] text-[#888888] outline-none focus:outline-none pr-2' />
                    </fieldset>
                    <fieldset className='border border-[#AAAAAA] w-full rounded-[16px] h-[56px] max-w-[100%] lg:max-w-[50%]'>
                        <legend className='mr-4 text-[#AAAAAA] text-[16px]'>رمزعبور جدید :</legend>
                        <input onChange={(e) => setNewPassword(e.target.value)} type="text" placeholder='رمزعبور جدید خود را وارد کنید' className='w-full text-[#888888] rounded-[16px] outline-none focus:outline-none pr-2' />
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserSecurity
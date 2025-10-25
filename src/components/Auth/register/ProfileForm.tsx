"use client"
import React, { FC, useActionState, useEffect, useState } from 'react'
import LeftSide from '../leftSide/leftSide'
import Image from 'next/image'
import UserWhiteSVG from '../authSVG/userWhiteSVG'
import LinearRSVG from '../authSVG/linearRSVG'
import LinearLSVG from '../authSVG/linearLSVG'
import { useAuth } from '@/context/AuthContext'
import { IProfileResponse } from '@/app/(public)/(auth)/register/profile/page'
import ButtonSubmit from './ButtonSubmit'
import { useRouter } from 'next/navigation'
import { BsPersonPlus } from 'react-icons/bs'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { toast } from 'react-toastify'
interface IProps {
  action: (prevState: IProfileResponse,
    formData: FormData
  ) => Promise<IProfileResponse>;
}

const ProfileForm: FC<IProps> = ({ action }) => {
  const initialState: IProfileResponse = { message: "", user: {}, success: false };
  const [state, formAction] = useActionState(action, initialState);
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const router = useRouter()
  const { userId } = useAuth()

  useEffect(() => {
    if (state.success) {
      toast.success("ثبت نام شدید", {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          fontFamily: 'IRANSansXFaNum',
          textAlign: 'right',
        },
      })
      router.push("/register/verify");
    }
  }, [router, state]);


  const togglePassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div
      style={{ padding: "0" }}
      className='flex flex-col sm:flex-row-reverse items-center gap-2 sm:gap-4 md:gap-30 justify-center w-full max-w-full sm:max-w-[1376px] m-auto px-2 sm:px-4 py-4'>
      <LeftSide />
      <div className="w-full max-w-[590.75px] min-h-[200px] sm:min-h-[300px] md:min-h-[600px] h-auto overflow-hidden flex flex-col">
        <div className="flex flex-col gap-3 sm:gap-5">
          <h1 className="text-2xl md:text-[32px] font-[300] whitespace-nowrap text-center md:text-right dark:text-white text-black">
            به خانواده دلتا ، خوش برگشتی !
          </h1>
          <p className="text-sm md:text-[16px] font-[500] text-center md:text-right dark:text-white text-black">
            با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون خبر بگیرید !
          </p>
        </div>
        <div className='flex flex-col gap-8 mt-10'>
          <div className="flex flex-col">
            <div className="max-w-[588.25px] w-full h-auto bg-[#303030] flex flex-row justify-between rounded-2xl gap-2 p-1 sm:p-2">
              <div className="flex max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                <p className='font-[600] text-[16px] text-[#AAAAAA] flex'>ورود</p>
                <UserWhiteSVG />
              </div>
              <div className="flex bg-[#8CFF45] shadow-[0_0_10px_3px_rgba(140,255,69,0.3)] max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                <p className='font-[600] text-[16px] dark:text-[#363636] text-[#f3eeee] flex'>ثبت نام</p>
                <BsPersonPlus className='dark:text-[#363636] text-white' />
              </div>
            </div>
          </div>
          <div className='flex flex-row max-w-[588px] w-full items-center justify-between gap-4'>
            <div className='flex bg-[#8CFF45] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2'>
              <p className='font-[600] text-[16px] dark:text-[#363636] text-[#f3eeee] flex'>ورود با حساب گوگل</p>
              <Image src={'/assets/authImages/GoogleIcon.png'} width={24} height={24} alt='Google' />
            </div>
            <div className='flex bg-[#444444] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2'>
              <p className='font-[600] text-[16px] text-[#AAAAAA] flex'>ورود با حساب اپل</p>
              <Image src={'/assets/authImages/Apple-icone.png'} width={24} height={24} alt='Apple' />
            </div>
          </div>
          <div className="flex max-w-[558px] h-[20px] w-full items-center mr-auto ml-auto rounded-full">
            <LinearLSVG />
            <span className="text-lg font-semibold dark:text-[#AAAAAA] text-[#857474] leading-8 px-8 py-3 whitespace-nowrap">یا میتونید</span>
            <LinearRSVG />
          </div>
          <form className='flex gap-4 flex-col' action={formAction}>
            <div className="flex flex-row gap-2 sm:gap-4 items-center">
              <fieldset className="border dark:border-[#AAAAAA] border-black p-1 sm:p-2 rounded-2xl min-w-[150px] sm:min-w-[200px] w-full">
                <legend className="dark:text-[#AAAAAA] text-black text-[16px] font-[400] px-2">
                  شماره تلفن <span className="text-red-500">*</span> :
                </legend>
                <input
                  type="text"
                  name="phoneNumber"
                  className="w-full outline-0 dark:text-[#AAAAAA] dark:placeholder:text-[#AAAAAA] placeholder:text-black text-black mr-1 sm:mr-2"
                  placeholder="مثال : dakjsbd@email.com"
                  style={{ maxWidth: '200px' }}
                />
              </fieldset>
              <fieldset className="relative border dark:border-[#AAAAAA] border-black p-1 sm:p-2 rounded-2xl min-w-[150px] sm:min-w-[200px] w-full">
                <legend className="dark:text-[#AAAAAA] text-black text-[16px] font-[400] px-2">
                  کلمه عبور <span className="text-red-500">*</span> :
                </legend>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="w-full outline-0 dark:placeholder:text-[#AAAAAA] placeholder:text-black text-black mr-1 sm:mr-2"
                  style={{ maxWidth: '200px' }}
                />
                {showPassword ? (<FiEye onClick={togglePassword} className='dark:text-[#AAAAAA] cursor-pointer absolute top-1 left-4 text-black h-5 w-5' />) : (<FiEyeOff onClick={togglePassword} className='dark:text-[#AAAAAA]cursor-pointer absolute top-1 left-4 text-white h-5 w-5' />)}
              </fieldset>
              <input type="hidden" name='userId' value={userId} />
            </div>
            <ButtonSubmit />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm
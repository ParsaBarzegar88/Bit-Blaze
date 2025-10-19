"use client"
import React, { FC, useActionState, useEffect, useState } from 'react';
import LeftSide from '../leftSide/leftSide';
import Image from 'next/image';
import UserBlackSVG from '../authSVG/userBlackSVG';
import UserbPlusSVG from '../authSVG/userbPlusSVG';
import LinearRSVG from '../authSVG/linearRSVG';
import LinearLSVG from '../authSVG/linearLSVG';
import { useRouter } from 'next/navigation';
import { ILoginResponse } from '@/app/(public)/(auth)/login/page';
import ButtonSubmit from '../register/ButtonSubmit';
import Link from 'next/link';
import { toast } from 'react-toastify';

interface IProps {
  action: (prevState: ILoginResponse,
    formData: FormData
  ) => Promise<ILoginResponse>;
}

const LoginForm: FC<IProps> = ({ action }) => {

  const initialState: ILoginResponse = { accessToken: "", refreshToken: "" };
  const [state, formAction] = useActionState(action, initialState);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false)


  useEffect(() => {
    if (state.error) {
      toast.error(state.error, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (state.accessToken && state.refreshToken) {
      toast.success('با موفقیت وارد شدید!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push("/");
    }
  }, [state, router]);;

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{ padding: "0" }}
      className="flex flex-col sm:flex-row-reverse items-center gap-2 sm:gap-4 md:gap-30 justify-center w-full max-w-full sm:max-w-[1376px] m-auto px-2 sm:px-4 py-4">
      <LeftSide />
      <div className="w-full max-w-[590.75px] min-h-[200px] sm:min-h-[300px] md:min-h-[600px] h-auto overflow-hidden flex flex-col">
        <div className="flex flex-col gap-3 sm:gap-5">
          <h1 className="text-2xl md:text-[32px] font-[300] whitespace-nowrap text-center md:text-right">
            به خانواده دلتا ، خوش برگشتی !
          </h1>
          <p className="text-sm md:text-[16px] font-[500] text-center md:text-right">
            با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون خبر بگیرید !
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-8 mt-4 sm:mt-10">
          <div className="flex flex-col">
            <div className="max-w-[588.25px] w-full h-auto bg-[#303030] flex flex-row rounded-2xl gap-2 p-1 sm:p-2">
              <div className="flex bg-[#8CFF45] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                <p className="font-[600] text-[16px] text-[#363636] flex">ورود با پسورد</p>
                <UserBlackSVG />
              </div>
              <div className="flex max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                <p className="font-[600] text-[16px] text-[#AAAAAA] flex">ورود با شماره</p>
                <UserbPlusSVG />
              </div>
            </div>
          </div>
          <div className="flex flex-row max-w-[588px] w-full items-center justify-between gap-2 sm:gap-4">
            <div className="flex bg-[#8CFF45] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2">
              <p className="font-[600] text-[16px] text-[#363636] flex">ورود با حساب گوگل</p>
              <Image src={'/assets/authImages/GoogleIcon.png'} width={24} height={24} alt="Google" />
            </div>
            <div className="flex bg-[#444444] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2">
              <p className="font-[600] text-[16px] text-[#AAAAAA] flex">ورود با حساب اپل</p>
              <Image src={'/assets/authImages/Apple-icone.png'} width={24} height={24} alt="Apple" />
            </div>
          </div>
          <div className="flex max-w-[558px] h-[20px] w-full items-center  mr-auto ml-auto  rounded-full">
            <LinearLSVG />
            <span className="text-lg font-semibold text-[#AAAAAA] leading-8 px-4 sm:px-8 py-2 sm:py-3 whitespace-nowrap">یا میتونید</span>
            <LinearRSVG />
          </div>
          <form className="flex gap-2 sm:gap-4 flex-col" action={formAction}>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 items-center">
              <fieldset className="border border-[#AAAAAA] p-1 sm:p-2 rounded-2xl min-w-[150px] sm:min-w-[200px] w-full">
                <legend className="text-[#AAAAAA] text-[16px] font-[400] px-2">
                  ایمیل شما <span className="text-red-500">*</span> :
                </legend>
                <input
                  type="email"
                  name='email'
                  className="w-full outline-0 text-[#AAAAAA] mr-1 sm:mr-2"
                  placeholder="مثال : dakjsbd@email.com"
                  style={{ maxWidth: '200px' }}
                />
              </fieldset>
              <fieldset className="border border-[#AAAAAA] p-1 sm:p-2 rounded-2xl min-w-[150px] sm:min-w-[200px] w-full relative">
                <legend className="text-[#AAAAAA] text-[16px] font-[400] px-1 sm:px-2">
                  کلمه عبور <span className="text-red-500">*</span> :
                </legend>
                <input
                  type="password"
                  name='password'
                  className="w-full outline-0 text-[#AAAAAA] mr-1 sm:mr-2"
                  style={{ maxWidth: '200px' }}
                />
                <Image width={24} height={24} onClick={togglePassword} src={showPassword ? '/assets/authImages/hide.png' : '/assets/authImages/visible.png'} alt="hide adn show picture" className="cursor-pointer absolute top-1 left-4 w-6" />
              </fieldset>
            </div>
            <div className='flex flex-row-reverse justify-between w-full'>
              <Link href={"/resetPassword"} className="flex justify-end gap-2 sm:gap-3 ml-5 sm:ml-10 items-center">
                رمز عبور خود را فراموش کردم
                <Image src={'/assets/authImages/iconsleftarrow-50.png'} alt="arrow" width={25} height={25} />
              </Link>
              <Link href={"/register"} className="flex justify-end gap-2 sm:gap-3 mr-5 sm:mr-10 items-center">
                حساب کاربری ندارید ؟
              </Link>
            </div>
            <ButtonSubmit />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
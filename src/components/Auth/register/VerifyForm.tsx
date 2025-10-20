"use client"
import React, { FC, useActionState, useEffect, useState } from 'react'
import LeftSide from '../leftSide/leftSide'
import Image from 'next/image'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { IVerifyResponse } from '@/app/(public)/(auth)/register/verify/page'
import LinearRSVG from '../authSVG/linearRSVG'
import Link from 'next/link'
import LinearLSVG from '../authSVG/linearLSVG'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { PostUserEmail } from '@/core/api/auth/postEmail'
import ClockSVG from '../authSVG/clockSVG'
import ButtonSubmit from './ButtonSubmit'
import { toast } from 'react-toastify'
import { BsPersonPlus } from 'react-icons/bs'
import { LuRefreshCw } from "react-icons/lu";

interface IProps {
    action: (prevState: IVerifyResponse, formData: FormData) => Promise<IVerifyResponse>;
}

const VerifyForm: FC<IProps> = ({ action }) => {
    const initialState: IVerifyResponse = { message: "", userId: "" };
    const [state, formAction] = useActionState(action, initialState)
    const [otpValue, setOtpValue] = useState("")
    const [time, setTime] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const { email, setTempUserId, tempUserId, setUserId } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsResendDisabled(false);
        }
    }, [time]);

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
            })
        }
        else if (state.userId) {
            toast.success("کد به ایمیل شما با موفقیت ارسال شد", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setTimeout(() => {
                toast.success("در حال رفتن به مرحله بعدی", {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                setTimeout(() => {
                    if (state.userId) {
                        setUserId(state.userId);
                        router.push("/register/profile");
                    }
                }, 2800)
            }, 3000);
        }
    }, [state, router, setUserId]);

    const handleResendEmail = async () => {
        if (!isResendDisabled && email) {
            setIsResendDisabled(true);
            setTime(60);
            const response = await PostUserEmail(undefined, undefined, email);
            if (response.tempUserId) {
                setTempUserId(response.tempUserId);
            } else {
                setIsResendDisabled(false);
                setTime(0);
            }
        }
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
                        کد تأیید ارسالی به ایمیل را وارد کنید
                    </p>
                </div>
                <div className='flex flex-col gap-8 mt-10'>
                    <div className="flex flex-col">
                        <div className="max-w-[588.25px] w-full h-auto bg-[#303030] flex flex-row justify-between rounded-2xl gap-2 p-1 sm:p-2">
                            <div className="flex max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                                <p className='font-[600] text-[16px] text-[#AAAAAA] flex'>ورود</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 8C8.79113 8 9.56448 7.76541 10.2223 7.32588C10.8801 6.88635 11.3928 6.26164 11.6955 5.53074C11.9983 4.79983 12.0775 3.99556 11.9231 3.21964C11.7688 2.44372 11.3878 1.73098 10.8284 1.17157C10.269 0.612165 9.55629 0.231202 8.78036 0.0768607C8.00444 -0.0774802 7.20017 0.00173314 6.46927 0.304484C5.73836 0.607234 5.11365 1.11992 4.67412 1.77772C4.2346 2.43552 4 3.20888 4 4C4.00106 5.06054 4.42283 6.07734 5.17274 6.82726C5.92266 7.57718 6.93946 7.99894 8 8ZM8 1.33334C8.52742 1.33334 9.04299 1.48973 9.48152 1.78275C9.92005 2.07577 10.2618 2.49224 10.4637 2.97951C10.6655 3.46678 10.7183 4.00296 10.6154 4.52024C10.5125 5.03753 10.2586 5.51268 9.88562 5.88562C9.51268 6.25856 9.03752 6.51254 8.52024 6.61543C8.00296 6.71832 7.46678 6.66551 6.97951 6.46368C6.49224 6.26185 6.07577 5.92005 5.78275 5.48152C5.48973 5.04299 5.33333 4.52742 5.33333 4C5.33333 3.29276 5.61428 2.61448 6.11438 2.11438C6.61448 1.61429 7.29276 1.33334 8 1.33334Z" fill="#AAAAAA" />
                                    <path d="M8 9.33301C6.40924 9.33477 4.88414 9.96748 3.75931 11.0923C2.63447 12.2172 2.00176 13.7423 2 15.333C2 15.5098 2.07024 15.6794 2.19526 15.8044C2.32029 15.9294 2.48986 15.9997 2.66667 15.9997C2.84348 15.9997 3.01305 15.9294 3.13807 15.8044C3.2631 15.6794 3.33333 15.5098 3.33333 15.333C3.33333 14.0953 3.825 12.9083 4.70017 12.0332C5.57534 11.158 6.76232 10.6663 8 10.6663C9.23768 10.6663 10.4247 11.158 11.2998 12.0332C12.175 12.9083 12.6667 14.0953 12.6667 15.333C12.6667 15.5098 12.7369 15.6794 12.8619 15.8044C12.987 15.9294 13.1565 15.9997 13.3333 15.9997C13.5101 15.9997 13.6797 15.9294 13.8047 15.8044C13.9298 15.6794 14 15.5098 14 15.333C13.9982 13.7423 13.3655 12.2172 12.2407 11.0923C11.1159 9.96748 9.59076 9.33477 8 9.33301Z" fill="#AAAAAA" />
                                </svg>
                            </div>
                            <div className="flex bg-[#8CFF45] shadow-[0_0_10px_3px_rgba(140,255,69,0.3)] max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                                <p className='font-[600] text-[16px] dark:text-[#363636] text-white flex'>ثبت نام</p>
                                <BsPersonPlus className='dark:text-[#363636] text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row max-w-[588px] w-full items-center justify-between gap-4'>
                        <div className='flex bg-[#8CFF45] shadow-[0_0_10px_3px_rgba(140,255,69,0.3)] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2'>
                            <p className='font-[600] text-[16px] text-[#363636] flex'>ورود با حساب گوگل</p>
                            <Image src={'/assets/authImages/GoogleIcon.png'} width={24} height={24} alt='Google' />
                        </div>
                        <div className='flex bg-[#444444] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2'>
                            <p className='font-[600] text-[16px] text-[#AAAAAA] flex'>ورود با حساب اپل</p>
                            <Image src={'/assets/authImages/Apple-icone.png'} width={24} height={24} alt='Apple' />
                        </div>
                    </div>
                    <div className="flex justify-center max-w-[558px] h-[20px] w-full mr-auto ml-auto items-center rounded-full">
                        <LinearLSVG />
                        <span className="text-lg font-semibold text-[#AAAAAA] leading-8 px-8 py-3 whitespace-nowrap">یا میتونید</span>
                        <LinearRSVG />
                    </div>
                    <form className="flex gap-11 flex-col justify-between" action={formAction}>
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 max-w-[585px] w-full justify-between items-center mx-auto'>
                            <InputOTP
                                onChange={(value) => setOtpValue(value)}
                                maxLength={6}
                                className="flex justify-center bg-white dark:bg-gray-900 p-2 rounded-lg w-full max-w-[350px] sm:max-w-[400px]"
                                style={{ gap: '1rem', display: "flex", justifyContent: "center" }}
                            >
                                <InputOTPGroup>
                                    {[...Array(6)].map((_, index) => (
                                        <InputOTPSlot
                                            key={index}
                                            index={index}
                                            className="w-12 h-12 text-center text-foreground border-2 dark:border-gray-600 rounded-lg focus:border-primary focus:outline-none bg-white dark:bg-[#232323]"
                                            style={{ borderColor: 'var(--border)', marginRight: "13px" }}
                                        />
                                    ))}
                                </InputOTPGroup>
                            </InputOTP>
                            <input type="hidden" name='verifyNumber' value={otpValue} />
                            <input type="hidden" name='tempUserId' value={tempUserId} />
                            <div className='max-w-[226px] flex justify-between flex-row w-full p-1 items-center bg-[#7569FF] h-[34px] rounded-[12px]'>
                                <button
                                    type="button"
                                    disabled={isResendDisabled}
                                    onClick={handleResendEmail}
                                    className={`flex cursor-pointer flex-row bg-white w-[130px] h-[30px] gap-3 items-center justify-center rounded-[10px] ${isResendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <span className='text-[13px] font-[600] text-[#303030]'>ارسال دوباره رمز</span>
                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.32422 8L2.04439 6.00515C1.13374 5.20833 1.13374 3.79167 2.04439 2.99485L4.32422 1" stroke="#303030" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className='flex flex-row items-center justify-center ml-3 gap-1'>
                                    <span className='text-white mt-1'>{time}</span>
                                    <ClockSVG />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse max-w-[588px] w-full items-center justify-between gap-4 mt-8'>
                            <ButtonSubmit />
                            <Link href={"/register"} className='border dark:border-white border-black flex max-w-[275px] w-full flex-row-reverse justify-center items-center pt-[8px] pr-[16px] pb-[8px] pl-[16px] rounded-[12px] space-x-2'>
                                <span className='font-[600] dark:text-white text-black text-[16px] flex'>تغییر ایمیل شما</span>
                                <LuRefreshCw className='dark:text-white text-black w-6' />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyForm
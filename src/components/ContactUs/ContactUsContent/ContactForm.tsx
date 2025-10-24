"use client"
import React, { FC, useActionState, useEffect } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { InfinitySpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { IContactResponse } from './ContactUsContent';

interface IProps {
    action: (prevState: IContactResponse,
        formData: FormData
    ) => Promise<IContactResponse>;
}

const ContactForm: FC<IProps> = ({ action }) => {
    const initioanlState: IContactResponse = { error: "", success: false };
    const [state, formAction, pending] = useActionState(action, initioanlState)

    useEffect(() => {
        if (state.error) {
            toast.error(state.error, {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (state.success) {
            toast.success('عملیات با موفقیت انجام شد', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [state]);

    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <div className='max-w-[100%] w-full flex flex-col mx-auto items-center justify-center'>
                <div className='max-w-[60%] h-5 w-full dark:bg-[#3B3B3B] bg-[#c2c2c2] rounded-tr-full rounded-tl-full'>
                </div>
                <div className='max-w-[80%] h-5 w-full dark:bg-[#2D2D2D] bg-[#dddddd] rounded-tr-full rounded-tl-full '>
                </div>
                <div className='max-w-[100%] w-full flex flex-col lg:flex-row items-center justify-center dark:bg-[#1C1C1C] bg-[#f7f7f7] rounded-4xl px-6 py-6 gap-8'>
                    <form className='flex flex-col gap-6 w-full' action={formAction}>
                        <div className='flex flex-col sm:flex-row gap-5'>
                            <fieldset className="border dark:border-[#363636] border-black p-2 sm:p-3 rounded-2xl w-full">
                                <legend className="dark:text-white text-black text-sm sm:text-[16px] font-[400] px-2">
                                    نام و نام خانوادگی :
                                </legend>
                                <input
                                    type="text"
                                    className="w-full outline-0 dark:text-white text-black dark:placeholder:text-white placeholder:text-black mr-1 sm:mr-2 bg-transparent"
                                    placeholder="وارد کنید ...."
                                />
                            </fieldset>
                            <fieldset className="border dark:border-[#363636] border-black p-2 sm:p-3 rounded-2xl w-full">
                                <legend className="dark:text-white text-[#363636] text-sm sm:text-[16px] font-[400] px-2">
                                    ایمیل شما :
                                </legend>
                                <input
                                    type="email"
                                    className="w-full outline-0 dark:text-white text-black dark:placeholder:text-white placeholder:text-black mr-1 sm:mr-2 bg-transparent"
                                    placeholder="....@gmail.com"
                                    name='title'
                                />
                            </fieldset>
                        </div>
                        <div>
                            <fieldset className="border dark:border-[#363636] border-black p-2 sm:p-3 rounded-2xl w-full h-[150px]">
                                <legend className="dark:text-white text-black dark:placeholder:text-white placeholder:text-black text-sm sm:text-[16px] font-[400] px-2">
                                    پیام شما :
                                </legend>
                                <input
                                    type="text"
                                    className="w-full outline-0 dark:text-white text-black mr-1 sm:mr-2 bg-transparent"
                                    placeholder="...."
                                    name='message'
                                />
                            </fieldset>
                        </div>
                        <button type='submit' disabled={pending} className='cursor-pointer flex rounded-[12px] flex-row justify-center items-center font-[600] text-[16px] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] bg-[#8CFF45] w-full text-[#363636] h-[44px] gap-4'>
                            {pending ? (<InfinitySpin width="100" color='#4fa94d' />) : "ارسال پیام"}
                            <MdKeyboardArrowLeft />
                        </button>
                    </form>
                </div>
                <div className='max-w-[80%] h-5 w-full dark:bg-[#2D2D2D] bg-[#dddddd] rounded-br-full rounded-bl-full '>
                </div>
                <div className='max-w-[60%] h-5 w-full dark:bg-[#3B3B3B] bg-[#c2c2c2] rounded-br-full rounded-bl-full'>
                </div>
            </div>
        </div >
    )
}

export default ContactForm
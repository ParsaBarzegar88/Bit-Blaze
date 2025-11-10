'use client'
import React, { FC, useActionState, useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Style from '../HouseCommentsTab.module.css'
import { FaStar } from 'react-icons/fa6';
import { ISendCommentsResponse } from '@/app/(public)/mortgage-rent/[id]/page';
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';
import { toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';
import { redirect, useSearchParams, useRouter } from 'next/navigation';
import { IComments } from '@/core/types/MortgageRent/IComments';

interface IProps {
    action: (prevState: ISendCommentsResponse,
        formData: FormData
    ) => Promise<ISendCommentsResponse>;
    houseData: IHousesDetail;
    userId: string | undefined;
    housesComments: IComments;
}

const FormComment: FC<IProps> = ({ action, houseData, userId, housesComments }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const param = new URLSearchParams(searchParams)
    const initialState: ISendCommentsResponse = { error: "", success: false }
    const [state, formAction, pending] = useActionState(action, initialState)
    const [rangeValue, setRangeValue] = useState<string>("0")

    const calculateProgress = (value: string) => {
        const numValue = parseFloat(value);
        return (numValue / 5) * 100;
    }
    useEffect(() => {
        if (state.success) {
            const newParams = new URLSearchParams(searchParams)
            newParams.delete('parentId')
            router.replace(`?${newParams.toString()}`, { scroll: false })
        }
    }, [state.success, searchParams, router])
    useEffect(() => {
        if (state.error) {
            if (state.error === 'Invalid token') {
                toast.error('لطفا ابتدا وارد حساب کاربری خود شوید', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                        fontFamily: 'IRANSansXFaNum',
                        textAlign: 'right',
                    },
                });
                setTimeout(() => {
                    redirect('/login')
                }, 3300);
            }
            else {
                toast.error(state.error, {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                        fontFamily: 'IRANSansXFaNum',
                        textAlign: 'right',
                    },
                });
            }
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
                style: {
                    fontFamily: 'IRANSansXFaNum',
                    textAlign: 'right',
                },
            });
        }
    }, [state]);
    return (
        <form className='flex flex-col gap-3 md:gap-5 w-full' action={formAction}>
            <input type="hidden" name="houseId" value={houseData.id} />
            <input type="hidden" name="userId" value={userId} />
            {param.get('parentId') ? (
                <input type="hidden" name="parentId" value={String(param.get('parentId'))} />
            ) : ""}
            <div className='flex flex-col lg:flex-row gap-3 md:gap-5 w-full'>
                <fieldset className='border w-full lg:w-1/3 dark:border-white border-black rounded-[12px] md:rounded-[16px] h-[50px] md:h-[56px] px-2'>
                    <legend className='mr-2 pr-1 pl-1 text-sm md:text-base'>نام و نام خانوادگی:</legend>
                    <input
                        type="text"
                        name="title"
                        placeholder="وارد کنید ..."
                        className='mr-3 pb-2 focus:outline-none w-full bg-transparent text-sm md:text-base'
                    />
                </fieldset>
                <fieldset className='border w-full lg:w-1/3 dark:border-white border-black rounded-[12px] md:rounded-[16px] h-[50px] md:h-[56px] px-2'>
                    <legend className='mr-2 pr-1 pl-1 text-sm md:text-base'>ایمیل شما:</legend>
                    <input
                        type="email"
                        name="email"
                        placeholder="وارد کنید ..."
                        className='mr-3 pb-2 focus:outline-none w-full bg-transparent text-sm md:text-base'
                    />
                </fieldset>
                <fieldset className='border w-full lg:w-1/3 dark:border-white border-black rounded-[12px] md:rounded-[16px] h-[50px] md:h-[56px] px-2'>
                    <legend className='mr-2 pr-1 pl-1 text-sm md:text-base'>
                        {param.get('parentId') ? 'برای نظر:' : 'امتیاز شما:'}
                    </legend>
                    <div className='w-full gap-2 md:gap-3 flex flex-row items-center justify-between relative'>
                        {param.get('parentId') ? (
                            <input type="text" disabled value={housesComments.data.find(item => item.id === param.get('parentId'))?.caption} />
                        ) : (
                            <>
                                <input
                                    type="range"
                                    min={0}
                                    max={5}
                                    value={rangeValue}
                                    step={0.5}
                                    name="rating"
                                    className={`focus:outline-none cursor-pointer w-full appearance-none h-[8px] md:h-[12px] rounded-full ${Style.sliderRangeShape}`}
                                    onChange={(e) => setRangeValue(e.target.value)}
                                    style={{
                                        '--range-progress': `${calculateProgress(rangeValue)}%`
                                    } as React.CSSProperties}
                                />
                                <div className='dark:text-white text-black flex flex-row gap-1 md:gap-2 justify-center items-center text-sm md:text-base min-w-[50px]'>
                                    {rangeValue}
                                    <FaStar className="text-yellow-500 text-sm md:text-base" />
                                </div>
                            </>
                        )}
                    </div>
                </fieldset>
            </div >
            <div className='flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-3 md:gap-5'>
                <fieldset className='border w-full sm:flex-1 dark:border-white border-black rounded-[12px] md:rounded-[16px] h-[50px] md:h-[56px] px-2'>
                    <legend className='mr-2 pr-1 pl-1 text-sm md:text-base'>پیام شما:</legend>
                    <input
                        type="text"
                        name="caption"
                        placeholder="وارد کنید ..."
                        className='mr-3 pb-2 focus:outline-none w-full bg-transparent text-sm md:text-base'
                    />
                </fieldset>

                <button
                    type="submit"
                    disabled={pending}
                    className='dark:bg-[#8CFF45] bg-[#4f9623] px-3 md:px-4 cursor-pointer dark:text-black gap-1 md:gap-2 h-[40px] md:h-[36px] text-white w-full sm:w-auto flex flex-row items-center justify-center rounded-[8px] md:rounded-[10px] disabled:opacity-50 text-sm md:text-base font-medium'
                >
                    {pending ? (
                        <div className='flex items-center justify-center'>
                            <InfinitySpin width="80" color='#4fa94d' />
                        </div>
                    ) : (
                        <>
                            ارسال پیام
                            <MdKeyboardArrowLeft className="text-lg" />
                        </>
                    )}
                </button>
            </div>
        </form >
    )
}

export default FormComment
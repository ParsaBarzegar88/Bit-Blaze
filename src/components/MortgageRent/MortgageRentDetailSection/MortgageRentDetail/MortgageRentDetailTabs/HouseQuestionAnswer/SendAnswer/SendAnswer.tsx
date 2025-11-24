import { sendAnswer } from '@/core/api/HouseReserve/Detail/Detail';
import { redirect, useRouter } from 'next/navigation';
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia';
import { toast } from 'react-toastify';

interface IProps {
    questionId: number | null;
    setQuestionId: Dispatch<SetStateAction<number | null>>;
}
const SendAnswer: FC<IProps> = ({ questionId, setQuestionId }) => {
    const [answer, setAnswer] = useState<string>('')
    const [Loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const handleSendQuestion = async (questionId: string) => {
        if (answer === '') {
            toast.error('پرسش شما نمیتواند خالی باشد', {
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
            return
        }
        setLoading(true)
        const response = await sendAnswer(questionId, answer)
        if (response.res.message === 'Invalid token') {
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
            setAnswer('')
            setTimeout(() => {
                redirect('/login')
            }, 3300);
            setLoading(false)
            setQuestionId(null)
        }
        else if (response.ok) {
            toast.success('پاسخ شما با موفقیت ثبت شد', {
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
            setAnswer('')
            router.refresh()
            setLoading(false)
            setQuestionId(null)
        } else {
            toast.error('خطا در انجام عملیات', {
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
            setAnswer('')
            router.refresh()
            setLoading(false)
            setQuestionId(null)
        }
    }
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-4xl mx-4 
                flex flex-col max-h-[90vh]'>
                <div className='flex max-[800px]:flex-col-reverse max-[800px]:gap-3.5 justify-between items-center p-6 border-b border-dashed border-gray-300 dark:border-gray-600'>
                    <h2 className='text-3xl max-[800px]:text-[19px] font-bold text-gray-800 dark:text-white'>
                        پاسخ به سوال
                    </h2>
                    <button
                        onClick={() => setQuestionId(null)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
                    >
                        <LiaTimesSolid size={20} />
                        <span className='text-md'>بستن</span>
                    </button>
                </div>
                <div className='flex flex-col gap-2.5 w-full max-w-[98%] mx-auto mt-2 mb-1'>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="answer" className='dark:text-white text-black'>پاسخ خود را وارد کنید</label>
                        <textarea value={answer} name="answer" id="answer" onChange={(e) => setAnswer(e.target.value)}
                            placeholder='مثال : آیا این خانه انباری سر پوشیده دارد ؟'
                            className='min-h-[55px] max-h-[90px] placeholder:text-right text-right px-2 py-2 dark:text-white text-black border dark:border-[#d3d3d3]
                                  border-black rounded-md outline-none text-[15px] font-mono tracking-wider transition-all'/>
                    </div>
                    <button disabled={Loading === true ? true : false} onClick={() => handleSendQuestion(String(questionId))} className='dark:bg-[#8CFF45] dark:text-[#363636] text-white bg-[#66b436] rounded-[8px] py-2 cursor-pointer mb-5'>{Loading === true ? "در حال ارسال ..." : "ثبت پاسخ"}</button>
                </div>
            </div>
        </div>
    )
}

export default SendAnswer
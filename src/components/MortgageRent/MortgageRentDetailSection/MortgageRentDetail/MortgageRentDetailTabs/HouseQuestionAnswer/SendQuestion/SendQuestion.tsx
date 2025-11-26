import { sendQuestion } from '@/core/api/MortgageRent/MortgageRentDetail/MortgageRentDetail'
import { redirect, useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { toast } from 'react-toastify'

interface IProps {
    houseId: string
}
const SendQuestion: FC<IProps> = ({ houseId }) => {
    const [question, setQuestion] = useState<string>('')
    const [Loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const handleSendQuestion = async (houseId: string) => {
        if (question === '') {
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
        const response = await sendQuestion(houseId, question)
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
            setQuestion('')
            setTimeout(() => {
                redirect('/login')
            }, 3300);
            setLoading(false)
        }
        else if (response.ok) {
            toast.success('پرسش شما با موفقیت ثبت شد', {
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
            setQuestion('')
            router.refresh()
            setLoading(false)
        }else{
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
            setQuestion('')
            router.refresh()
            setLoading(false)
        }
    }
    return (
        <div className='flex flex-col w-full gap-2.5'>
            <div className='flex flex-col gap-1.5'>
                <label htmlFor="question" className='dark:text-white text-black'>پرسش خود را مطرح کنید</label>
                <textarea value={question} name="question" id="question" onChange={(e) => setQuestion(e.target.value)}
                    placeholder='مثال : آیا این خانه انباری سر پوشیده دارد ؟'
                    className='min-h-[55px] max-h-[90px] placeholder:text-right text-right px-2 py-2 dark:text-white text-black border dark:border-[#d3d3d3]
                                  border-black rounded-md outline-none text-[15px] font-mono tracking-wider transition-all'/>
            </div>
            <button disabled={Loading === true ? true : false} onClick={() => handleSendQuestion(houseId)} className='dark:bg-[#8CFF45] dark:text-[#363636] text-white bg-[#66b436] rounded-[8px] py-2 cursor-pointer mb-5'>{Loading === true ? "در حال ارسال ..." : "ثبت پرسش"}</button>
        </div>
    )
}

export default SendQuestion
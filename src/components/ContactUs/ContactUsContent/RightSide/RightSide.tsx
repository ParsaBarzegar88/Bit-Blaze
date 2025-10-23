import { AtSign } from 'lucide-react'
import React from 'react'
import PhoneSVG from '../../ContactSVG/PhoneSVG'

const RightSide = () => {
    return (
        <div className='w-full flex flex-col gap-20 overflow-hidden'>
            <p className='dark:text-white text-black'>هر ساعت از شبانه روز که باشه تیم پیشتیبانی دلتا پاسخگوی سوالات و انتقادات شما هستند تا در اسرع وقت مشکلتان را حل کنیم !</p>
            <div className='flex flex-col gap-15'>
            <div className='w-fit px-4 py-4 flex flex-row-reverse items-center justify-center bg-[#ecdddd] dark:bg-[#303030] gap-3 rounded-2xl'>
                <span>09229167194 - 098541612310</span>
                <PhoneSVG />
            </div>
            <div className='w-fit px-4 py-4 flex items-center justify-center flex-row-reverse bg-[#ecdddd] dark:bg-[#303030] gap-3 rounded-2xl'>
                <span>Delta@gmail.com</span>
                <AtSign />
            </div>
            <div className='w-fit px-4 items-center justify-center py-4 flex flex-row-reverse bg-[#ecdddd] dark:bg-[#303030] gap-3 rounded-2xl'>
                <span>گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</span>
                <AtSign />
            </div>
            </div>
        </div>
    )
}

export default RightSide
import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const StepFour = () => {
  return (
    <div className='flex flex-col gap-15'>
      <div className='flex flex-col gap-2'>
        <span className='text-[#888888]'>آدرس ملک</span>
        <div className='flex flex-row'>
          <span className='text-[#8CFF45] text-[20px] font-[600]'>یک تصویر بهتر از هزار کلمه</span>
          <span className='text-[20px] font-[600]'>. با قرار دادن عکس شانس دیده شدن ملک‌تان را ۵ برابر کنید.</span>
        </div>
      </div>
      <div className='w-full flex flex-row gap-1.5 items-center justify-center'>
        <div className='flex flex-col border-2 border-dashed text-[#8CFF45] cursor-pointer border-[#8CFF45] rounded-[12px] w-[189px] h-[189px] items-center justify-center gap-3.5'>
          <IoIosAddCircleOutline size={40}/>
          <span className='font-[700] text-[19px]'>افزودن عکس</span>
        </div>
      </div>
    </div>
  )
}

export default StepFour
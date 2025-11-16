import React from 'react'

const StepThree = () => {
  return (
    <div className='flex flex-col w-full gap-10.5 '>
      <div className='flex flex-col md:flex-row  justify-between w-full gap-15'>
        <fieldset className='w-full border rounded-[16px] border-[#AAAAAA] items-center flex pb-2'>
          <legend className='mr-2 pr-2 pl-2 text-[#AAAAAA]'>تعداد اتاق : </legend>
          <input type="text" className='w-full max-w-[98%] text-black mx-auto outline-none border-none' />
        </fieldset>
        <fieldset className='w-full border rounded-[16px] border-[#AAAAAA] items-center flex pb-2'>
          <legend className='mr-2 pr-2 pl-2 text-[#AAAAAA]'>تعداد حمام : </legend>
          <input type="text" className='w-full max-w-[98%] text-black mx-auto outline-none border-none' />
        </fieldset>
      </div>
      <div className='flex flex-col md:flex-row justify-between w-full gap-15'>
        <fieldset className='w-full border rounded-[16px] border-[#AAAAAA] items-center flex pb-2'>
          <legend className='mr-2 pr-2 pl-2 text-[#AAAAAA]'>تعداد پارکینگ : </legend>
          <input type="text" className='w-full max-w-[98%] text-black mx-auto outline-none border-none' />
        </fieldset>
        <fieldset className='w-full border rounded-[16px] border-[#AAAAAA] items-center flex pb-2'>
          <legend className='mr-2 pr-2 pl-2 text-[#AAAAAA]'>نوع حیاط : </legend>
          <input type="text" className='w-full max-w-[98%] text-black mx-auto outline-none border-none' />
        </fieldset>
      </div>
      <fieldset className='w-full border rounded-[16px] border-[#AAAAAA] items-center flex pb-2'>
          <legend className='mr-2 pr-2 pl-2 text-[#AAAAAA]'>برچسب ها : </legend>
          <input type="text" className='w-full max-w-[98%] text-black mx-auto outline-none border-none' />
        </fieldset>
    </div>
  )
}

export default StepThree
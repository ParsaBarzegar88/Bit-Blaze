import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const StepFive = () => {
  return (
<div className='max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] w-full mx-auto items-center flex flex-col gap-4 md:gap-6 px-4'>
  <Image
    width={180}
    height={180}
    className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-cover"
    src="/assets/bookingHouse/checktrue.png"
    alt="picture"
    priority
  />
  <h1 className='dark:text-white text-black text-xl sm:text-2xl md:text-3xl text-center font-bold leading-8 md:leading-10'>
    رزرو بلیط شما با موفقیت انجام شد !
  </h1>
  <div className='flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-[320px] justify-center sm:max-w-none'>
    <button className='border flex-row-reverse cursor-pointer duration-200 p-2 transition-all border-black dark:border-white flex items-center justify-center w-full sm:w-[180px] md:w-[200px] gap-2 py-3 rounded-4xl whitespace-nowrap font-medium text-sm sm:text-base hover:scale-[1.02]'>
      <MdKeyboardArrowLeft className="dark:text-white text-black text-xl" />
      بازگشت به صفحه اصلی
    </button>
    <button className='border cursor-pointer flex-row-reverse text-[#5ba72b] dark:text-[#8CFF45] duration-200 transition-all border-[#8CFF45] flex items-center justify-center w-full sm:w-[140px] md:w-[160px] gap-2 py-3 rounded-4xl whitespace-nowrap font-medium text-sm sm:text-base hover:scale-[1.02]'>
      <MdKeyboardArrowLeft className="dark:text-[#8CFF45] text-[#5ba72b] text-xl" />
      بلیط های من
    </button>
  </div>
</div>
  )
}

export default StepFive
import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { TbEditCircle } from 'react-icons/tb';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiMegaphoneThin } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { LuBadgePercent } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
const StepTwo = () => {
  return (
    <div className="w-full flex flex-col p-4">
      <div className="dark:bg-[#393939] bg-white border flex flex-col lg:gap-0 p-2 md:gap-0 dark:border-[#333] shadow-lg border-gray-200 items-center rounded-3xl overflow-hidden">
        <div className="flex max-w-[99%] w-full mt-2 dark:bg-[#4D4D4D] bg-[#fafafa] rounded-2xl items-center border border-gray-200 justify-between px-4 sm:px-6 py-3 dark:border-gray-600">
          <div className="flex items-center gap-2 sm:gap-3">
            <FaUser className="dark:text-white text-black text-base sm:text-lg" />
            <span className="dark:text-white text-black text-sm sm:text-lg font-medium">مشخصات مسافران</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <TbEditCircle className="text-[#8CFF45] text-lg sm:text-xl" />
            <span className="text-[#8CFF45] text-xs sm:text-sm">ویرایش مسافران</span>
          </div>
        </div>

        <div className="p-3 sm:p-6 max-w-[99%] w-full overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-8 gap-x-4 sm:gap-x-6 text-xs text-gray-400 font-medium">
              <div className='dark:text-white text-black'>بازه سنی</div>
              <div className='dark:text-white text-black'>نام و نام خانوادگی</div>
              <div className='dark:text-white text-black text-center'>جنسیت</div>
              <div className="text-[#AAAAAA] text-center">کدملی / شماره پاسپورت</div>
              <div className='text-[#AAAAAA] text-center'>خدمات</div>
              <div className='text-[#AAAAAA] text-center'>مبلغ خدمات</div>
              <div className="text-right dark:text-white text-black">تاریخ تولد</div>
              <div className="text-left dark:text-white text-black font-medium">قیمت</div>
            </div>
            <div className="border-t-2 border-[#CCCCCC] my-3 dark:text-white text-black"></div>
            <div className="grid grid-cols-8 gap-x-4 text-xs dark:text-white text-black">
              <div className='text-[#AAAAAA]'>بزرگسال</div>
              <div className='text-[#AAAAAA]'>محمد رضا ساداتی</div>
              <div className='text-[#AAAAAA] text-center'>مرد</div>
              <div className='dark:text-[#8CFF45] text-[#509724] text-center'>09229167194</div>
              <div className='dark:text-white text-black text-center'>—</div>
              <div className='dark:text-white text-black text-center'>—</div>
              <div className="text-right text-[#AAAAAA]">1350/5/12</div>
              <div className="text-left text-[#AAAAAA]">1,500,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#393939] bg-white shadow-lg border-gray-200 lg:gap-0 p-2 md:gap-0 dark:border-none border flex flex-col items-center rounded-3xl overflow-hidden mt-6">
        <div className="flex max-w-[99%] w-full mt-2 dark:bg-[#4D4D4D] bg-[#fafafa] rounded-2xl border border-gray-200 items-center justify-between px-4 sm:px-6 py-3 dark:border-gray-600">
          <div className="flex items-center gap-2 sm:gap-3">
            <AiOutlineDollarCircle className="dark:text-white text-black text-lg" />
            <span className="dark:text-white text-black font-medium text-sm sm:text-base">هزینه جانبی</span>
          </div>
        </div>

        <div className='max-w-[99%] w-full py-4 sm:py-6 px-4 sm:px-6'>
          <p className='dark:text-white text-black text-sm sm:text-base leading-6 sm:leading-7 text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
            متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
          </p>
        </div>
      </div>
      <div className="dark:bg-[#393939] bg-white shadow-lg border-gray-200 lg:gap-0 p-2 md:gap-0 border dark:border-none flex flex-col items-center rounded-3xl overflow-hidden mt-6">
        <div className="flex max-w-[99%] w-full mt-2 dark:bg-[#4D4D4D] bg-[#fafafa] border rounded-2xl border-gray-200 items-center justify-between px-4 sm:px-6 py-3 dark:border-gray-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
            <div className="flex items-center gap-2 sm:gap-3">
              <PiMegaphoneThin className="dark:text-white text-black text-lg" />
              <span className="dark:text-white text-black font-medium text-sm sm:text-base">اطلاع رسانی سفر</span>
            </div>
            <p className='text-[#8CFF45] hidden sm:block text-[12px] sm:text-[13px] mr-0 sm:mr-2 whitespace-normal'>
              ( اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود . )
            </p>
          </div>
        </div>

        <div className='max-w-[99%] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 w-full py-4 sm:py-6 px-4 sm:px-0'>
          <div className='flex flex-row items-center gap-2'>
            <PiStarFourFill className="dark:text-white text-black text-md" />
            <span className='dark:text-white text-black text-sm sm:text-base'>شماره تلفن:</span>
            <span className='dark:text-white text-black text-sm sm:text-base'>09229167194</span>
          </div>

          <div className='hidden sm:block w-1 h-4 rounded-2xl bg-gray-300 dark:bg-gray-600'></div>

          <div className='flex flex-row items-center gap-2'>
            <PiStarFourFill className="dark:text-white text-black text-md" />
            <span className='dark:text-white text-black text-sm sm:text-base'>ایمیل:</span>
            <span className='dark:text-[#8CFF45] text-[#63b133] text-sm sm:text-base'>Example@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#393939] bg-white shadow-lg border-gray-200 border lg:gap-0 p-2 md:gap-0 flex dark:border-none flex-col items-center rounded-3xl overflow-hidden mt-6">
        <div className="flex max-w-[99%] w-full mt-2 dark:bg-[#4D4D4D] bg-[#fafafa] border rounded-2xl border-gray-200 items-center justify-between px-6 py-3 dark:border-gray-600">
          <div className="flex items-center gap-3">
            <LuBadgePercent className="dark:text-white text-black text-lg" />
            <span className="dark:text-white text-black font-medium">کد تخفیف</span>
          </div>
        </div>
        <div className='max-w-[99%] flex flex-col lg:flex-row text-right gap-4  lg:gap-6 p-2 md:gap-6 w-full py-4 lg:py-6'>
          <div className='flex flex-col lg:flex-row w-full lg:w-auto  lg:items-center gap-4 lg:gap-6'>
            <fieldset className="border dark:border-[#AAAAAA] p-2 rounded-2xl w-full lg:min-w-[280px] relative border-black flex-grow">
              <legend className="dark:text-[#AAAAAA] text-[14px] lg:text-[16px] font-[500] px-2 lg:px-3 text-black">
                کد تخفیف :
              </legend>
              <input
                type="text"
                name='text'
                placeholder='کد خود را وارد کنید'
                className="w-full outline-0 dark:text-[#AAAAAA] dark:placeholder:text-[#AAAAAA] placeholder:text-gray-600 text-black bg-transparent text-sm lg:text-base"
              />
            </fieldset>

            <button className='border cursor-pointer hover:scale-[1.02] duration-200 transition-all border-[#8CFF45] flex items-center justify-center w-full lg:w-auto lg:min-w-[160px] gap-2 py-3 lg:py-3 rounded-2xl whitespace-nowrap font-medium text-sm lg:text-base'>
              <CiCircleCheck className="dark:text-white text-black text-xl" />
              اعمال کد تخفیف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
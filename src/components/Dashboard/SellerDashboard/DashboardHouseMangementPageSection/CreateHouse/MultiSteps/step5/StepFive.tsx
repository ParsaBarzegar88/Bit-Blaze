import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingApartment, PiTree } from "react-icons/pi";
import { TbCalendar, TbTag } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const StepFive = () => {
  // const cookie = useCookie()
  // const GetHouseInfo = () => {}

  return (
    <div className='flex flex-col gap-6 md:gap-8'>
      {/* Header */}
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-white'>
          بررسی نهایی اطلاعات ملک
        </h1>
        <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
          لطفاً اطلاعات زیر را بررسی کرده و در صورت صحیح بودن، آگهی را منتشر کنید.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-6 md:gap-8'>
        <div className='flex-1'>
          <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-600'>
            <Image
              fill
              src={""}
              alt='عکس ملک'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
              <span className='text-gray-500 dark:text-gray-400'>عکس در دسترس نیست</span>
            </div>
          </div>
        </div>

        <div className='flex-1 flex flex-col gap-4'>
          <div>
            <h1 className='text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2'>
              ویلا مدرن در شمال تهران
            </h1>
            <p className='text-gray-600 dark:text-gray-300 text-justify leading-relaxed line-clamp-5 md:line-clamp-none'>
              ویلاای مدرن و لوکس در یکی از بهترین مناطق شمال تهران. این ملک دارای معماری مدرن، 
              امکانات رفاهی کامل و فضای سبز بسیار زیبا می‌باشد. مناسب برای مهمانی‌های خانوادگی 
              و اقامت کوتاه مدت. دسترسی عالی به مراکز خرید و امکانات شهری.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-3 mt-2'>
            <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <span>وضعیت: فعال</span>
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
              <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
              <span>نوع: مسکونی</span>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
        <div className='flex flex-col gap-4 md:gap-6'>
          <h2 className='text-lg md:text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2'>
            <PiBuildingApartment className="text-[#8CFF45]" />
            مشخصات ملک
          </h2>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <CiLocationOn className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>موقعیت</span>
                <span className='text-gray-800 dark:text-white font-medium'>تهران، شمال شهر</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <IoHomeOutline className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>اتاق‌ها</span>
                <span className='text-gray-800 dark:text-white font-medium'>۲ خوابه</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <PiBuildingApartment className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>سرویس بهداشتی</span>
                <span className='text-gray-800 dark:text-white font-medium'>۲ حمام</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <PiBuildingApartment className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>پارکینگ</span>
                <span className='text-gray-800 dark:text-white font-medium'>۱ واحد</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <PiBuildingApartment className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>ظرفیت</span>
                <span className='text-gray-800 dark:text-white font-medium'>۶ نفر</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <PiTree className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>حیاط</span>
                <span className='text-gray-800 dark:text-white font-medium'>دارد</span>
              </div>
            </div>

            <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl'>
              <TbCalendar className="text-[#8CFF45] text-xl flex-shrink-0" />
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>رزرو</span>
                <span className='text-gray-800 dark:text-white font-medium'>فعال</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:gap-6'>
          <h2 className='text-lg md:text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2'>
            <TbTag className="text-[#8CFF45]" />
            برچسب‌ها و قیمت
          </h2>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-wrap gap-2'>
              {['مسکونی', 'ویلا', 'مدرن', 'شمال تهران', 'لوکس'].map((tag, index) => (
                <span 
                  key={index}
                  className='px-3 py-2 bg-[#8CFF45]/20 text-[#4f9623] dark:text-[#8CFF45] rounded-lg text-sm font-medium border border-[#8CFF45]/30'
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className='flex items-center gap-3 p-4 bg-gradient-to-r from-[#8CFF45]/10 to-green-100 dark:from-[#8CFF45]/10 dark:to-gray-800 rounded-xl border border-[#8CFF45]/20'>
              <FaRegMoneyBillAlt className="text-[#8CFF45] text-2xl flex-shrink-0" />
              <div className='flex-1'>
                <span className='text-sm text-gray-500 dark:text-gray-400 block'>قیمت نهایی</span>
                <span className='text-2xl font-bold text-gray-800 dark:text-white'>
                  ۷۵۰,۰۰۰,۰۰۰ <span className='text-sm font-normal'>ریال</span>
                </span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 mt-4'>
              <button className='flex-1 bg-[#8CFF45] hover:bg-[#7ae035] text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95'>
                تایید و انتشار آگهی
              </button>
              <button className='flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 font-semibold py-3 px-6 rounded-xl transition-all duration-300'>
                ویرایش اطلاعات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFive
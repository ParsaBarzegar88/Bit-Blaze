import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa6";
import ArrowLeftSVG from "../../.././BuyerDashboardSVG/arrowLeftSVG";
import Image from "next/image";
const DashboardRecentReserve = () => {
  return (
    <div
      className="bg-white dark:bg-[#363636] flex flex-col gap-3
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px]
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
            py-2 px-2"
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2.5 items-center">
          <FaBookmark className="text-lg sm:text-xl lg:text-2xl" />
          <span className="dark:text-white text-black text-base sm:text-lg lg:text-xl font-[400]">
            وضعیت پروفایل شما
          </span>
        </div>
        <Link
          href="/dashboard-profile"
          className="flex flex-row gap-2 sm:gap-4 items-center"
        >
          <span
            className="
                            text-xs sm:text-sm text-gray-600 dark:text-white
                            hover:text-gray-800 dark:hover:text-gray-200 
                            cursor-pointer transition-colors duration-300
                          "
          >
            ویرایش
          </span>
          <ArrowLeftSVG />
        </Link>
      </div>
      <div className="w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300"></div>
      <div className="flex flex-col gap-2">
        <div className="bg-[#F0F0F0] w-full items-center grid grid-cols-6 gap-x-3 gap-y-4 py-2 rounded-[12px] ">
            <div className="col-span-1"></div>
            <div className="col-span-1 text-right font-medium text-gray-700 dark:text-gray-300 pr-2">
            نام اقامتگاه
            </div>
            <div className="col-span-1 text-center font-medium text-gray-700 dark:text-gray-300">
            تاریخ رزرو
            </div>
            <div className="col-span-1 text-center font-medium text-gray-700 dark:text-gray-300">
                قیمت 
            </div>
            <div className="col-span-1 text-center font-medium text-gray-700 dark:text-gray-300">
            وضعیت
            </div>
            <div className="col-span-1 text-center font-medium text-gray-700 dark:text-gray-300">
            
            </div>
        </div>

        {/* {sampleData.map((item) => ( */}
        <div className="grid grid-cols-6 gap-x-3 gap-y-4">
            <div className="col-span-1 flex justify-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                <Image
                  src={'/assets/landingpage'}
                  alt={'dasdsad'}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-1 text-right text-gray-600 dark:text-gray-300 text-xs sm:text-sm pr-2 flex items-center">
              هتل سراوان رانین رشت
            </div>
            <div className="col-span-1 text-center flex justify-center items-center">
              12 مرداد - 1401 / 12:33
            </div>
            <div className="col-span-1 text-center flex justify-center items-center">
              1،800،000تومان
            </div>
            <div className="col-span-1 text-center flex justify-center items-center">
              تایید شده
            </div>
            <div className="col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center">
              d%
            </div>
        </div>
            
        {/* ))} */}
      </div>
    </div>
  );
};

export default DashboardRecentReserve;

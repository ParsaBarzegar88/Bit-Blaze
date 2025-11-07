import Link from "next/link";
import React, { FC } from "react";
import { FaBookmark } from "react-icons/fa6";
import ArrowLeftSVG from "../../.././BuyerDashboardSVG/arrowLeftSVG";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IDashboardUserReserves } from "@/core/types/Dashboard/IDashboard";
import { FaTimes } from "react-icons/fa";
import { formatToPersianDate } from "@/utils/date";

interface IProps {
  dashboardUserReserveInfo: IDashboardUserReserves;
}

const DashboardRecentReserve: FC<IProps> = ({ dashboardUserReserveInfo }) => {
  return (
    <div
      className="bg-white dark:bg-[#363636] flex flex-col gap-3
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px]
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
            py-4 px-3 sm:py-3 sm:px-4 lg:py-2 lg:px-2"
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 sm:gap-2.5 items-center">
          <FaBookmark className="text-lg sm:text-xl lg:text-2xl" />
          <span className="dark:text-white text-black text-sm sm:text-base lg:text-lg xl:text-xl font-[500]">
            رزرو های اخیر
          </span>
        </div>
        <Link
          href="/dashboard-reserve"
          className="flex flex-row gap-1 sm:gap-2 lg:gap-4 items-center group"
        >
          <span
            className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white cursor-pointer transition-colors duration-300"
          >
            مشاهده همه
          </span>
          <div className="transform group-hover:-translate-x-1 transition-transform duration-300">
            <ArrowLeftSVG />
          </div>
        </Link>
      </div>
      <div className="w-full border-t border-gray-300 dark:border-gray-600 border-dashed transition-colors duration-300"></div>
      <div className="overflow-x-auto w-full">
        <div className="flex flex-col gap-3 sm:gap-2">
          <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-5 gap-2 sm:gap-3 min-w-[600px] py-3 px-2 sm:py-2 sm:px-3 rounded-[10px]">
            <div className="col-span-2 sm:col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
              نام اقامتگاه
            </div>
            <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
              تاریخ رزرو
            </div>
            <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
              قیمت
            </div>
            <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
              وضعیت
            </div>
            <div className="hidden sm:block col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {dashboardUserReserveInfo.data ? (
              dashboardUserReserveInfo.data.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-2 sm:gap-3 items-center py-2 px-2 sm:py-3 sm:px-3 rounded-[10px] hover:bg-gray-50 dark:hover:bg-[#444444] transition-colors duration-200"
                >
                  <div className="col-span-2 sm:col-span-1 text-right text-gray-600 dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                    {item.house.title}
                  </div>
                  <div className="col-span-1 text-center flex justify-center items-center">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      {formatToPersianDate(item.reservedDates[0].value)}
                    </span>
                  </div>
                  <div className="col-span-1 text-center flex justify-center items-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.house.price.toLocaleString()} تومان
                    </span>
                  </div>
                  <div className="col-span-1 text-center flex justify-center items-center">
                    <div
                      className={`flex flex-row gap-1 sm:gap-2 items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${item.status === 'pending'
                        ? "bg-[#ff4d4d] text-white"
                        : "bg-[#8CFF45] text-gray-800"
                        }`}
                    >
                      {item.status === 'pending' ? (
                        <FaTimes className="text-white text-xs sm:text-sm" />
                      ) : (
                        <FaCheckCircle className="text-gray-800 text-xs sm:text-sm" />
                      )}
                      <span className="whitespace-nowrap">
                        {item.status === 'pending' ? 'تایید نشده' : 'تایید شده'}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium items-center justify-center">
                    <div className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] cursor-pointer transition-colors duration-200">
                      <IoIosMore size={20} className="text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                  <div className="sm:hidden col-span-5 mt-2 flex justify-center">
                    <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                      مشاهده جزئیات
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
                هیچ رزروی یافت نشد
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRecentReserve;
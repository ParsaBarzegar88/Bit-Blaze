'use client'
import Link from "next/link";
import React, { FC, useState } from "react";
import { FaBookmark } from "react-icons/fa6";
import ArrowLeftSVG from "../../.././BuyerDashboardSVG/arrowLeftSVG";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { IDashboardUserReserve } from "@/core/types/Dashboard/IDashboard";
import { FaTimes } from "react-icons/fa";
import { formatToPersianDate } from "@/utils/date";
import { IoRemoveCircleOutline } from "react-icons/io5";
import ReserveMoreSection from "../../DashboardReservePageSection/ReserveList/ReserveMoreSection/ReserveMoreSection";
import ReserveHouseDetail from "../../DashboardReservePageSection/ReserveList/ReserveMoreSection/ReserveHouseDetail/ReserveHouseDetail";

interface IProps {
  dashboardUserReserveInfo: IDashboardUserReserve[];
}

const DashboardRecentReserve: FC<IProps> = ({ dashboardUserReserveInfo }) => {
  const [openReserveId, setOpenReserveId] = useState<string | null>(null)
  const [openHouseDetail, setOpenHouseDetail] = useState<boolean>(false)
  const handleOpenReserveMode = (id: string) => {
    setOpenReserveId(prev => prev === id ? null : id)
  }
  const handleOpenHouseDetail = () => {
    setOpenHouseDetail(!openHouseDetail)
  }
  const FindHouseDetailById = dashboardUserReserveInfo?.find(item => String(item.id) === openReserveId)
  return (
    <div
      className="bg-white dark:bg-[#363636] flex flex-col gap-3
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)] rounded-[12px] transition-all duration-300 
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
          className="flex flex-row gap-1 sm:gap-2 lg:gap-4 items-center"
        >
          <span
            className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 cursor-pointer transition-colors duration-300"
          >
            مشاهده همه
          </span>
          <div className="transform transition-transform duration-300">
            <ArrowLeftSVG />
          </div>
        </Link>
      </div>
      <div className="w-full border-t border-gray-300 dark:border-gray-600 border-dashed transition-colors duration-300"></div>
      <div className="overflow-x-auto w-full">
        <div className="flex flex-col gap-3 sm:gap-2">
          <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a]  w-full items-center grid grid-cols-5 gap-2 sm:gap-3 min-w-[600px] py-3 px-2 sm:py-2 sm:px-3 rounded-[10px]">
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
            {dashboardUserReserveInfo ? (
              dashboardUserReserveInfo.map((item, index) => (
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
                      className={`flex flex-row gap-1 sm:gap-2 items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm 
                          ${item.status === 'pending'
                          ? "bg-[#FAC100] text-gray-800"
                          : item.status === 'canceled'
                            ? "bg-[#FF989A] text-gray-800"
                            : "bg-[#8CFF45] text-gray-800"
                        }
                                                            `}

                    >
                      {item.status === 'pending' ? (
                        <IoRemoveCircleOutline size={20} className="text-gray-800 text-xs sm:text-sm" />
                      ) : item.status === 'canceled' ? (
                        <FaTimes className="text-gray-800 text-xs sm:text-sm" />
                      ) : (
                        <FaCheckCircle className="text-gray-800 text-xs sm:text-sm" />
                      )}
                      <span className="whitespace-nowrap">
                        {item.status === 'pending' ? 'در حال انتظار' : item.status === 'canceled' ? 'تایید نشده' : 'تایید شده'}
                      </span>
                    </div>
                  </div>
                  <div className="flex relative col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium items-center justify-center">
                    <div className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] cursor-pointer transition-colors duration-200">
                      <IoIosMore onClick={() => handleOpenReserveMode(String(item.id))} size={20} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    {openReserveId === String(item.id) && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50">
                        <ReserveMoreSection openHouseDetailFunction={handleOpenHouseDetail} reserveId={String(FindHouseDetailById?.id)} />
                      </div>
                    )}
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
      {openHouseDetail && FindHouseDetailById && (
        <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
          <ReserveHouseDetail closeHouseDetail={setOpenHouseDetail} houseDetail={FindHouseDetailById} />
        </div>
      )}
    </div>
  );
};

export default DashboardRecentReserve;
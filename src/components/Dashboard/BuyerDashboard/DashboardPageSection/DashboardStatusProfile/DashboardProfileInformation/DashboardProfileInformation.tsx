import Link from "next/link";
import React, { FC } from "react";
import { FaBookmark } from "react-icons/fa6";
import ArrowLeftSVG from "../../../.././BuyerDashboardSVG/arrowLeftSVG";
import { IUserDetail } from "@/core/types/Dashboard/IDashboard";
import { formatDistanceToNow, parseISO } from "date-fns";
import { faIR } from "date-fns/locale";

interface IProps {
  userInfo: IUserDetail;
}
const DashboardProfileInformation: FC<IProps> = ({ userInfo }) => {
  const progress = userInfo.additionalPercentage || 0;
  const formatRelativeTime = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      return formatDistanceToNow(date, {
        addSuffix: true,
        locale: faIR,
      })
        .replace("حدود ", "")
        .replace("کمتر از ", "");
    } catch {
      return "نامشخص";
    }
  };
  const lastUpdate = userInfo.user.updatedAt
    ? formatRelativeTime(userInfo.user.updatedAt)
    : "نامشخص";
  return (
    <div
      className="
        bg-white dark:bg-[#363636]
        shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
        rounded-[12px]
        transition-all duration-300 
        hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]
        w-full
      "
    >
      <div className="px-2 py-2 w-full flex flex-col gap-3 sm:gap-4 h-full">
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

        <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          <div className="flex flex-col gap-2 sm:gap-3 items-center sm:items-start text-center sm:text-right w-full sm:w-1/2">
            <span className="text-3xl sm:text-4xl lg:text-[36px] text-black dark:text-white font-medium">
              {progress}%
            </span>
            <p className="text-sm sm:text-base lg:text-[16px] text-black dark:text-white leading-relaxed max-w-full sm:max-w-[90%]">
              برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪
              تکمیل شده باشد.
            </p>
            <span>
              اخرین تغییرات شما {lastUpdate}
            </span>
          </div>

          <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px] rounded-full flex justify-center items-center">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(
                  #8CFF45 ${progress * 3.6}deg, 
                  #D9D9D9 ${progress * 3.6}deg 360deg
                )`,
              }}
            ></div>
            <div className="relative w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] lg:w-[110px] lg:h-[110px] bg-white dark:bg-[#363636] rounded-full flex justify-center items-center">
              <span className="text-black dark:text-white text-base sm:text-lg font-medium"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileInformation;

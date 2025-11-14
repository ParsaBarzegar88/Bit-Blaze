'use client'
import { markAsRead } from '@/core/api/Dashboard/Announcement';
import { INotifications } from '@/core/types/Dashboard/IAnnouncement';
import { formatToPersianDate } from '@/utils/date';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
interface IProps {
    userAnnouncement: INotifications;
}
const AnnouncementList: FC<IProps> = ({ userAnnouncement }) => {
    const router = useRouter()
    const unreadAnnouncements = userAnnouncement?.data.filter(item => !item.isRead) || [];
    const readAnnouncements = userAnnouncement?.data.filter(item => item.isRead) || [];

    const handleMarkAsRead = async (id: string) => {
        const response = await markAsRead(id)
        if (response.message === 'Notification marked as read') {
            toast.success("علامت گذاری به عنوان خوانده شده با موفقیت انجام شد", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            router.refresh();
        } else {
            toast.error("مشکلی در علامت گذاری به وجود آمده است", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            router.refresh();
        }
    }
    return (
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="w-full flex flex-col gap-3">
                <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-3 gap-2 min-w-[600px] py-3 px-2  rounded-[10px]">
                    <div className="col-span-1 sm:col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        اعلان
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        تاریخ
                    </div>
                    <div className="sm:block col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm"></div>
                </div>
                <h4 className="font-normal text-[16px] text-[#AAAAAA] mt-4">خوانده نشده</h4>
                <div className="flex flex-col gap-3">
                    {unreadAnnouncements.length > 0 ? (
                        unreadAnnouncements.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-3 gap-2 items-center py-2 px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300 "
                            >
                                <div className="col-span-1 text-right  text-black dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.title}
                                </div>
                                <div className="col-span-1 text-right text-black dark:text-gray-300 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {formatToPersianDate(item.createdAt)}
                                </div>
                                <div className="col-span-1 text-left">
                                    <span onClick={() => handleMarkAsRead(item.id)} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#8CFF45] text-black cursor-pointer">
                                        <FaCheckCircle size={14} />
                                        علامت گذاری به عنوان خوانده شده
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                            هیچ اعلان خوانده نشده‌ای وجود ندارد
                        </p>
                    )}
                </div>
                <h4 className="font-normal text-[16px] text-[#AAAAAA] mt-6">خوانده شده</h4>
                <div className="flex flex-col gap-1">
                    {readAnnouncements.length > 0 ? (
                        readAnnouncements.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-3 gap-2 items-center py-2 px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300"
                            >
                                <div className="col-span-1 text-right font-[500] text-black dark:text-gray-400 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {item.title}
                                </div>
                                <div className="col-span-1 text-right font-[500] text-black dark:text-gray-400 text-xs sm:text-sm pr-2 line-clamp-1">
                                    {formatToPersianDate(item.createdAt)}
                                </div>
                                <div className="col-span-1 text-right"></div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                            هیچ اعلان خوانده شده‌ای وجود ندارد
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AnnouncementList
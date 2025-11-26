import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { Switch } from "@/components/ui/switch"
import { createAnnouncementSetting, deleteAnnouncementSetting, getAnnouncementSetting } from '@/core/api/Dashboard/Announcement';
import { INotificationSetting } from '@/core/types/Dashboard/IAnnouncement';
import { useRouter } from 'next/navigation';
interface IProps {
    onClose: Dispatch<SetStateAction<boolean>>;
}
const NotificationSettings: FC<IProps> = ({ onClose }) => {
    const [UserAnnouncementSetting, setUserAnnouncementSetting] = useState<INotificationSetting[]>()
    const router = useRouter()
    const getUserAnnouncementSetting = async () => {
        const getUserAnnouncementSetting = await getAnnouncementSetting()
        setUserAnnouncementSetting(getUserAnnouncementSetting)
    }
    const sendUserAnnouncementSetting = async (notificationType:string) => {
        const res = await createAnnouncementSetting(notificationType)
        if (res.ok) {
            getUserAnnouncementSetting()
            router.refresh()
        } else {
            getUserAnnouncementSetting()
            router.refresh()
        }
    }
    const deleteUserAnnouncementSettings = async (id: string) => {
        const res = await deleteAnnouncementSetting(id)
        if (res.message === 'Notification setting deleted successfully') {
            getUserAnnouncementSetting()
            router.refresh()
        } else {
            getUserAnnouncementSetting()
            router.refresh()
        }
    }
    useEffect(() => {
        getUserAnnouncementSetting()
    }, [])
    return (
        <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-4xl flex flex-col gap-8 items-center 
      justify-center mx-auto dark:bg-[#363636]'>
            <div className="flex flex-row justify-between w-full items-center">
                <h3>تنظیمات نوتیفیکیشن</h3>
                <div onClick={() => onClose(false)} className="flex flex-row gap-1.5 cursor-pointer items-center border border-[#FF4242] text-[#FF4242] py-1 px-2 rounded-[20px]">
                    <FaTimes />
                    <span
                        className="cursor-pointer"
                    >
                        بستن
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-5.5 w-full'>
                <div className='flex flex-row justify-between items-center'>
                    <span>نوتیفیکیشن رزرو</span>
                    {UserAnnouncementSetting?.find(item => item.notificationType === "new_booking") ? (
                        <Switch dir='ltr' className='cursor-pointer' checked
                            onClick={() => deleteUserAnnouncementSettings(String(UserAnnouncementSetting?.find(item => item.notificationType === "new_booking")?.id))} />
                    ) : (
                        <Switch dir='ltr' className='cursor-pointer' onClick={() => sendUserAnnouncementSetting('new_booking')}/>
                    )}
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span>نوتیفیکیشن پرداخت</span>
                    {UserAnnouncementSetting?.find(item => item.notificationType === "new_payment") ? (
                        <Switch dir='ltr' className='cursor-pointer' checked
                            onClick={() => deleteUserAnnouncementSettings(String(UserAnnouncementSetting?.find(item => item.notificationType === "new_payment")?.id))} />
                    ) : (
                        <Switch dir='ltr' className='cursor-pointer' onClick={() => sendUserAnnouncementSetting('new_payment')}/>
                    )}
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span>نوتیفیکیشن تخفیف</span>
                    {UserAnnouncementSetting?.find(item => item.notificationType === "discount") ? (
                        <Switch dir='ltr' className='cursor-pointer' checked
                            onClick={() => deleteUserAnnouncementSettings(String(UserAnnouncementSetting?.find(item => item.notificationType === "discount")?.id))} />
                    ) : (
                        <Switch dir='ltr' className='cursor-pointer' onClick={() => sendUserAnnouncementSetting('discount')}/>
                    )}
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <span>نوتیفیکیشن سیستمی</span>
                    {UserAnnouncementSetting?.find(item => item.notificationType === "system") ? (
                        <Switch dir='ltr' className='cursor-pointer' checked
                            onClick={() => deleteUserAnnouncementSettings(String(UserAnnouncementSetting?.find(item => item.notificationType === "system")?.id))} />
                    ) : (
                        <Switch dir='ltr' className='cursor-pointer' onClick={() => sendUserAnnouncementSetting('system')}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NotificationSettings
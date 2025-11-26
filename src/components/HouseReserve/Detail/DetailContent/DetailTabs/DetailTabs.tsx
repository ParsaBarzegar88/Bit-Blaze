'use client'
import React, { FC, useState } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsChatRightTextFill } from 'react-icons/bs';
import FeatureSVG from '../../../HouseReserveSVG/featureSVG';
import { IoLocationOutline } from "react-icons/io5";
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';
import HouseFeatureTab from './HouseFeatureTab/HouseFeatureTab';
import HouseLocationTab from './HouseLocationTab/HouseLocationTab';
import HouseCommentsTab from './HouseCommentsTab/HouseCommentsTab';
import { IComments } from '@/core/types/MortgageRent/IComments';
import { ISendCommentsResponse } from '@/app/(public)/mortgage-rent/[id]/page';
import { MdOutlineQuestionAnswer } from "react-icons/md";
import HouseQuestionAnswer from './HouseQuestionAnswer/HouseQuestionAnswer';

interface IProps {
    houseData: IHousesDetail
    housesComments: IComments;
    action: (prevState: ISendCommentsResponse,
        formData: FormData
    ) => Promise<ISendCommentsResponse>;
    userId: string | undefined;
}
const HouseReserveDetailTabs: FC<IProps> = ({ houseData, housesComments, action, userId }) => {
    const [openTab, setOpenTab] = useState<string>("houseDescription")
    const handleOpenTab = (value: string) => {
        setOpenTab(value)
    }
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex max-[800px]:flex-col flex-row items-center gap-1 max-[800px]:h-fit h-[50px] rounded-[12px] dark:bg-[#393939] bg-white dark:shadow-none shadow-[0_0px_16px_rgba(0,0,0,0.27)] p-2'>
                <span
                    onClick={() => handleOpenTab('houseDescription')}
                    className={`flex flex-row cursor-pointer gap-1.5 items-center max-[800px]:w-full w-auto max-[800px]:justify-center justify-start text-sm sm:text-base ${openTab === 'houseDescription' ? "dark:bg-[#8CFF45] dark:text-[#363636] text-white bg-[#66b436]" : "dark:text-[#AAAAAA] text-black"} p-2 sm:p-1.5 rounded-[10px] mb-2 sm:mb-0 mr-0 sm:mr-2`}
                >
                    <IoDocumentTextOutline />
                    توضیحات اقامتگاه
                </span>
                <span
                    onClick={() => handleOpenTab('houseFeature')}
                    className={`flex flex-row cursor-pointer gap-1.5 items-center max-[800px]:w-full w-auto max-[800px]:justify-center justify-start text-sm sm:text-base ${openTab === 'houseFeature' ? "dark:bg-[#8CFF45] dark:fill-[#363636] fill-white dark:text-[#363636] text-white  bg-[#66b436]" : "dark:text-[#AAAAAA] dark:fill-[#AAAAAA] fill-black text-black"} p-2 sm:p-1.5 rounded-[10px] mb-2 sm:mb-0 mr-0 sm:mr-2`}
                >
                    <FeatureSVG />
                    امکانات اقامتگاه
                </span>
                <span
                    onClick={() => handleOpenTab('houseLocation')}
                    className={`flex flex-row cursor-pointer gap-1.5 items-center max-[800px]:w-full w-auto max-[800px]:justify-center justify-start text-sm sm:text-base ${openTab === 'houseLocation' ? "dark:bg-[#8CFF45] dark:text-[#363636] text-white bg-[#66b436]" : "dark:text-[#AAAAAA] text-black"} p-2 sm:p-1.5 rounded-[10px] mb-2 sm:mb-0 mr-0 sm:mr-2`}
                >
                    <IoLocationOutline />
                    موقعیت اقامتگاه
                </span>
                <span
                    onClick={() => handleOpenTab('houseComments')}
                    className={`flex flex-row cursor-pointer gap-1.5 items-center max-[800px]:w-full w-auto max-[800px]:justify-center justify-start text-sm sm:text-base ${openTab === 'houseComments' ? "dark:bg-[#8CFF45] dark:text-[#363636] text-white bg-[#66b436]" : "dark:text-[#AAAAAA] text-black"} p-2 sm:p-1.5 rounded-[10px] mb-2 sm:mb-0 mr-0 sm:mr-2`}
                >
                    <BsChatRightTextFill size={14} />
                    نظرات کاربران
                </span>
                <span
                    onClick={() => handleOpenTab('houseQuestionAnswer')}
                    className={`flex flex-row cursor-pointer gap-1.5 items-center max-[800px]:w-full w-auto max-[800px]:justify-center justify-start text-sm sm:text-base ${openTab === 'houseQuestionAnswer' ? "dark:bg-[#8CFF45] dark:text-[#363636] text-white bg-[#66b436]" : "dark:text-[#AAAAAA] text-black"} p-2 sm:p-1.5 rounded-[10px] mb-2 sm:mb-0 mr-0 sm:mr-2`}
                >
                    <MdOutlineQuestionAnswer size={14} />
                    پرسش و پاسخ
                </span>
            </div>
            {openTab === "houseDescription" ? (
                <div className='dark:text-[#AAAAAA] text-black'>{houseData.caption}</div>
            ) : openTab === "houseFeature" ? (
                <HouseFeatureTab houseData={houseData} />
            ) : openTab === "houseLocation" ? (
                <HouseLocationTab houseLocations={houseData} />
            ) : openTab === "houseComments" ? (
                <HouseCommentsTab housesComments={housesComments} action={action} houseData={houseData} userId={userId} />
            ) : (
                <HouseQuestionAnswer houseData={houseData} />
            )}
        </div>
    )
}

export default HouseReserveDetailTabs
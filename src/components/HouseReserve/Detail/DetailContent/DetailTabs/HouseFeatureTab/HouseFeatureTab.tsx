import React, { FC } from 'react'
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail'
import { FaBed, FaCarSide } from 'react-icons/fa6'
import { MdHotTub } from 'react-icons/md'
import { ImManWoman } from "react-icons/im";

interface IProps {
    houseData: IHousesDetail
}
const HouseFeatureTab: FC<IProps> = ({ houseData }) => {
    return (
        <div className='flex flex-row gap-4 md:mx-0 md:justify-start justify-center mx-auto flex-wrap'>
            <div className='flex flex-col h-fit dark:bg-[#3F3F3F] gap-3 p-2 items-center rounded-[16px] dark:shadow-none shadow-[0px_0px_16px_rgba(0,0,0,0.27)]'>
                <FaBed size={20} className='dark:text-white text-black' />
                <span className='dark:bg-[#7569FF] bg-[#897eff] w-fit rounded-[10px] text-white py-2 px-8'>{houseData.rooms} خوابه</span>
            </div>
            <div className='flex flex-col h-fit dark:bg-[#3F3F3F] gap-3 p-2 items-center rounded-[16px] dark:shadow-none shadow-[0px_0px_16px_rgba(0,0,0,0.27)]'>
                <FaCarSide size={20} className='dark:text-white text-black' />
                <span className='dark:bg-[#7569FF] bg-[#897eff] w-fit rounded-[10px] text-white py-2 px-8'>پارکینگ</span>
            </div>
            <div className='flex flex-col h-fit dark:bg-[#3F3F3F] gap-3 p-2 items-center rounded-[16px] dark:shadow-none shadow-[0px_0px_16px_rgba(0,0,0,0.27)]'>
                <MdHotTub size={20} className='dark:text-white text-black' />
                <span className='dark:bg-[#7569FF] bg-[#897eff] w-fit rounded-[10px] text-white py-2 px-8'>{houseData.bathrooms} حمام</span>
            </div>
            <div className='flex flex-col h-fit dark:bg-[#3F3F3F] dark:fill-white fill-black gap-3 p-2 items-center rounded-[16px] dark:shadow-none shadow-[0px_0px_16px_rgba(0,0,0,0.27)]'>
                <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.736 14.8353C15.3513 15.5533 14.606 16 13.7913 16H12C11.632 16 11.3333 15.702 11.3333 15.3333C11.3333 14.9647 11.632 14.6667 12 14.6667H13.7913C14.1187 14.6667 14.406 14.494 14.5607 14.206C14.7147 13.9173 14.6993 13.5827 14.5173 13.31C14.5033 13.2893 14.4907 13.268 14.4793 13.2453L12.9633 10.3053C12.8567 10.0987 12.8653 9.85134 12.9867 9.65267C13.108 9.454 13.3233 9.33334 13.556 9.33334H13.8253C13.8813 9.33334 13.9227 9.30867 13.9493 9.25934C13.976 9.21 13.9733 9.162 13.942 9.11467L12.0793 5.648C11.9687 5.44134 11.9747 5.19134 12.0947 4.99067C12.2147 4.79 12.432 4.66667 12.6667 4.66667C12.722 4.66667 12.764 4.642 12.79 4.594C12.812 4.55334 12.8147 4.514 12.798 4.47534L10.1373 1.37067C10.0793 1.31734 9.95067 1.282 9.82867 1.406L7.79533 3.76934C7.556 4.048 7.134 4.07934 6.85467 3.83934C6.576 3.59934 6.54467 3.178 6.78467 2.89934L8.85 0.501336C9.508 -0.169331 10.5227 -0.135331 11.118 0.467336C11.118 0.467336 13.8893 3.70134 13.9053 3.72667C14.198 4.18067 14.2193 4.75667 13.9613 5.23067C13.8687 5.40067 13.746 5.54734 13.602 5.66534L15.0847 8.42934C15.354 8.828 15.382 9.408 15.1253 9.888C14.9907 10.1393 14.7907 10.3413 14.552 10.476L15.6493 12.604C16.08 13.278 16.1147 14.1287 15.736 14.8353ZM10.6667 10.232V13C10.6667 14.654 9.32067 16 7.66667 16H3C1.346 16 0 14.654 0 13V10.232C0 9.2 0.466 8.244 1.27867 7.60667L3.27867 6.04134C4.488 5.094 6.178 5.09534 7.38733 6.04134L9.38733 7.60734C10.2 8.244 10.666 9.20067 10.666 10.2327L10.6667 10.232ZM9.33333 10.232C9.33333 9.61267 9.054 9.03867 8.566 8.65667L6.566 7.09134C6.20333 6.808 5.768 6.66534 5.33333 6.66534C4.89867 6.66534 4.46333 6.80734 4.10067 7.092L2.10067 8.65667C1.61333 9.03867 1.33333 9.61334 1.33333 10.232V13C1.33333 13.9193 2.08133 14.6667 3 14.6667H7.66667C8.58533 14.6667 9.33333 13.9193 9.33333 13V10.232ZM6 10H4.66667C4.29867 10 4 10.2987 4 10.6667V12C4 12.368 4.29867 12.6667 4.66667 12.6667H6C6.368 12.6667 6.66667 12.368 6.66667 12V10.6667C6.66667 10.2987 6.368 10 6 10Z" />
                </svg>
                <span className='dark:bg-[#7569FF] bg-[#897eff] w-fit rounded-[10px] text-white py-2 px-8'>{houseData.yard_type}</span>
            </div>
            <div className='flex flex-col h-fit dark:bg-[#3F3F3F] gap-3 p-2 items-center rounded-[16px] dark:shadow-none shadow-[0px_0px_16px_rgba(0,0,0,0.27)]'>
                <ImManWoman size={20} className='dark:text-white text-black' />
                <span className='dark:bg-[#7569FF] bg-[#897eff] w-fit rounded-[10px] text-white py-2 px-8'>{houseData.capacity} ظرفیت</span>
            </div>
        </div>
    )
}

export default HouseFeatureTab
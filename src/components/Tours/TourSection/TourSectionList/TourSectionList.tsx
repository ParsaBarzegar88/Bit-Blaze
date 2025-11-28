"use client"
import { IToursItem } from '@/core/types/Tours/ITours'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import RegsiterTour from './RegsiterTour/RegsiterTour'

interface IProps {
    tour: IToursItem
}

const TourSectionList: FC<IProps> = ({ tour }) => {

    const [modal, setModal] = useState<boolean>(false)
    const [tourId, setTourId] = useState<string>("")


    const HandleRegister = () => {
        setModal(true);
        setTourId(tour.id.toString());
    };

    const formatPrice = (price: string) => {
        return `${parseInt(price).toLocaleString('fa-IR')} تومان`
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date)
    }

    return (
        <>
            <div
                key={tour.id}
                className='flex-[1_1_calc(33.333%-1rem)] min-w-[300px] max-w-[400px] bg-white dark:bg-[#404040] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:translate-y-[-4px] cursor-pointer'
            >
                <div className='relative w-full h-48 rounded-xl overflow-hidden mb-4'>
                    {tour.photos[2] ? (
                        <Image
                            src={tour.photos[2]}
                            alt={tour.title}
                            width={200}
                            height={200}
                            className='object-cover'
                        />
                    ) : (
                        <div className='w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                            <span className='text-gray-500'>بدون تصویر</span>
                        </div>
                    )}
                    <div className='absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-lg text-xs font-bold'>
                        {tour.tag}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2'>
                        {tour.title}
                    </h3>

                    <p className='text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed line-clamp-2'>
                        {tour.description}
                    </p>
                    <div className='flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-3'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className='line-clamp-1'>{tour.address}</span>
                    </div>
                    <div className='flex flex-wrap gap-1 mb-3'>
                        {tour.services.slice(0, 2).map((service, index) => (
                            <span
                                key={index}
                                className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-xs'
                            >
                                {service}
                            </span>
                        ))}
                        {tour.services.length > 2 && (
                            <span className='bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs'>
                                +{tour.services.length - 2}
                            </span>
                        )}
                    </div>
                    <div className='flex justify-between items-center mt-auto pt-3 border-t border-gray-200 dark:border-gray-600'>
                        <span className='text-lg font-bold text-amber-600 dark:text-amber-400'>
                            {formatPrice(tour.price)}
                        </span>
                        <div className='flex flex-col items-end text-xs text-gray-500 dark:text-gray-400'>
                            <div className='flex items-center gap-1'>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>شروع: {formatDate(tour.startDate)}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-between'>
                        <div className='flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-2'>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>کنسل رایگان تا {tour.cancellationPeriodDays} روز قبل</span>
                        </div>
                        <div onClick={HandleRegister} className='rounded-2xl py-2 px-4 lg:w-fit w-full bg-green-500 hover:scale-105 duration-300'>
                            <span className='dark:text-black text-white'>ثبت نام</span>
                        </div>
                    </div>
                </div>
            </div>
            <RegsiterTour open={modal} onOpenChange={setModal} tourId={tourId} />
        </>
    )
}

export default TourSectionList
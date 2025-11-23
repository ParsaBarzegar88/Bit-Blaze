'use client'
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { MdCompare, MdClose, MdStar, MdLocationOn, MdInfo } from "react-icons/md";
import { getHouseCompare } from '@/core/api/HouseCompare/HouseCompare';
import { IHouseCompare } from '@/core/types/HouseCompare/IHouseCompare';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SelectHouseCompare from './SelectHouseCompare/SelectHouseCompare';

interface IProps {
    houseIds?: { [key: string]: string }
}
const HouseCompare: FC<IProps> = ({ houseIds }) => {
    const [houseDetails, setHouseDetails] = useState<IHouseCompare[]>([])
    const [openSelectHouse, setOpenSelectHouse] = useState<boolean>(false)
    const router = useRouter()

    const renderStars = (rate: string) => {
        const stars = [];
        const numericRate = parseInt(rate);

        for (let i = 0; i < 5; i++) {
            stars.push(
                <MdStar
                    key={i}
                    className={i < numericRate ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}
                    size={18}
                />
            );
        }

        return stars;
    };

    const handleDeleteHouse = (houseId: string) => {
        const currentIds = houseIds?.id ? houseIds.id.split(',') : [];
        const updatedIds = currentIds.filter(id => id !== houseId);

        if (updatedIds.length === 0) {
            router.push('/compare');
            return;
        }

        const newIdsString = updatedIds.join(',');
        router.push(`/compare?id=${newIdsString}`);
    };
    const handleDeleteAllHouse = () => {
        router.push('/compare');
    };
    const handleSelectedHouse = () => {
        setOpenSelectHouse(!openSelectHouse)
    }
    useEffect(() => {
        const fetchHouseDetail = async () => {
            const getHouseDetail = await getHouseCompare(String(houseIds?.id))
            setHouseDetails(getHouseDetail)
        }
        fetchHouseDetail()
    }, [houseIds?.id])

    const formatPrice = (price: string): string => {
        return new Intl.NumberFormat('fa-IR').format(Number(price)) + " تومان";
    };
    return (
        <div className="max-w-[96%] w-full mx-auto my-8">
            <div className="flex flex-col mb-8">
                <div className="flex flex-row gap-3 items-center justify-center mb-3">
                    <MdCompare size={32} className="text-blue-600 dark:text-blue-400" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                        مقایسه املاک
                    </h2>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    املاک مورد نظر خود را به راحتی مقایسه کنید
                </p>
            </div>
            {houseDetails.length > 0 ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px]">
                            <thead>
                                <tr className="bg-gray-200 dark:bg-[#333333] border-b-2 border-gray-200 dark:border-gray-600">
                                    <th className="py-6 px-6 text-right font-bold text-gray-800 dark:text-white text-lg w-1/4">
                                        مشخصات
                                    </th>
                                    {houseDetails.map((house) => (
                                        <th key={house.id} className="py-6 px-6 text-center relative w-3/8">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-36 h-28 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-600 flex items-center justify-center shadow-md relative">
                                                    {house.photos && house.photos.length > 0 ? (
                                                        <Image
                                                            src={house.photos[0]}
                                                            alt={house.title}
                                                            fill
                                                            className="object-cover transition-transform hover:scale-105 duration-300"
                                                        />
                                                    ) : (
                                                        <div className="text-gray-400 dark:text-gray-500 text-sm">بدون تصویر</div>
                                                    )}
                                                </div>

                                                <h3 className="font-bold text-xl text-gray-800 dark:text-white mt-2">
                                                    {house.title}
                                                </h3>

                                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                                    <MdLocationOn size={18} />
                                                    <span className="max-w-[200px] truncate">{house.address}</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    {renderStars(house.rate)}
                                                    <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                                                        ({house.rate}/5)
                                                    </span>
                                                </div>

                                                <div className="font-bold text-xl text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
                                                    {formatPrice(house.price)}
                                                </div>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        نوع معامله
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${house.transaction_type === 'reservation'
                                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                                                : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                                                }`}>
                                                {house.transaction_type === 'reservation' ? 'رزرو' : 'رهن و اجاره'}
                                            </span>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        تعداد اتاق‌ها
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                                {house.rooms} اتاق
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        سرویس بهداشتی
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                                {house.bathrooms} عدد
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        پارکینگ
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                                {house.parking} واحد
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        ظرفیت
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                                {house.capacity} نفر
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        نوع حیاط
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                                {house.yard_type}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        دسته‌بندی
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                                {house.categories.name}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        امکانات
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {house.tags.slice(0, 2).map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm border border-gray-200 dark:border-gray-600 whitespace-nowrap"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        فروشنده
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                                {house.sellerName}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-5 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right">
                                        توضیحات
                                    </td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-5 px-6 text-center">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-6">
                                                {house.caption}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="bg-gradient-to-l bg-gray-200 dark:bg-[#333333] transition-colors duration-200">
                                    <td className="py-6 px-6 font-semibold text-gray-700 dark:text-gray-300 text-right"></td>
                                    {houseDetails.map((house) => (
                                        <td key={house.id} className="py-6 px-6 text-center">
                                            <div className="flex flex-col sm:flex-row  gap-3 justify-center items-center">
                                                <Link href={`/house-reserve/${house.id}`}
                                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                                                >
                                                    <MdInfo size={18} />
                                                    جزئیات
                                                </Link>
                                                <button
                                                    onClick={() => handleDeleteHouse(house.id)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200"
                                                >
                                                    <MdClose size={18} />
                                                    حذف
                                                </button>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center w-full text-[20px] text-center items-center'>
                    خانه ای برای مقایسه وجود ندارد برای انتخاب خانه میتوانید از گزینه افزودن ملک جدید اقدام کنید
                </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button onClick={handleSelectedHouse} className="px-8 py-3 cursor-pointer bg-gradient-to-l from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform">
                    افزودن ملک جدید
                </button>
                {houseDetails.length > 0 ? (
                    <button onClick={handleDeleteAllHouse} className="px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                        پاک کردن لیست
                    </button>
                ) : ""}
            </div>
            {openSelectHouse && (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <SelectHouseCompare closeSelectHouse={setOpenSelectHouse}/>
                </div>
            )}
        </div>
    );
};

export default HouseCompare;
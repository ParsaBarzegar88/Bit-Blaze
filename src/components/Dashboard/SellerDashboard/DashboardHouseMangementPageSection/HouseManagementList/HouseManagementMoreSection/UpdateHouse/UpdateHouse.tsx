"use client"
import { getHousesReserveDetail } from '@/core/api/HouseReserve/Detail/Detail';
import { IUpdateHouse } from '@/core/types/UpdateHouse/IUpdateHouse';
import { IHousesDetail } from '@/core/types/HouseReserveDetail/IHousesDetail';
import React, { FC, useState, useEffect, useCallback } from 'react'
import { UpdateAHouse } from '@/core/api/SellerDashboard/UpdateHouse/UpdateHouse';
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

const yard_type = ["جنگلی", "باغ", "روستایی", "بالکن"] as const;
const transactionType = [
    { value: "rental", label: "اجاره ای" },
    { value: "mortgage", label: "رهن" },
    { value: "reservation", label: "رزرو" },
    { value: "direct purchase", label: "نقدی مستقیم" },
];

interface IProps {
    Id: string;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateHouse: FC<IProps> = ({ Id, onClose }) => {
    const [houseInfo, setHouseInfo] = useState<IHousesDetail | null>(null);
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        price: '',
        capacity: '',
        bathrooms: '',
        parking: '',
        rooms: '',
        yard_type: '',
        transaction_type: '',
        caption: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const fetchHouseData =useCallback(async () => {
        try {
            const getHouseInfo = await getHousesReserveDetail(Id);
            setHouseInfo(getHouseInfo);
            if (getHouseInfo) {
                setFormData({
                    title: getHouseInfo.title || '',
                    address: getHouseInfo.address || '',
                    price: getHouseInfo.price?.toString() || '',
                    capacity: getHouseInfo.capacity?.toString() || '',
                    bathrooms: getHouseInfo.bathrooms?.toString() || '',
                    parking: getHouseInfo.parking?.toString() || '',
                    rooms: getHouseInfo.rooms?.toString() || '',
                    yard_type: getHouseInfo.yard_type || '',
                    transaction_type: getHouseInfo.transaction_type || '',
                    caption: getHouseInfo.caption || ''
                });
            }
        } catch (error) {
            console.error('Error fetching house data:', error);
        }
    } , [Id]);

    useEffect(() => {
        fetchHouseData();
    }, [Id , fetchHouseData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const submitData: IUpdateHouse = {
                title: formData.title,
                address: formData.address,
                rate: houseInfo?.rate ? Number(houseInfo?.rate) : 0,
                price: formData.price ? parseInt(formData.price) : 0,
                photos: houseInfo?.photos || [""],
                tags: houseInfo?.tags || [],
                last_updated: new Date(),
                capacity: formData.capacity,
                location: houseInfo?.location || { lat: 0, lng: 0 },
                categories: houseInfo?.categories || { name: "" },
                bathrooms: formData.bathrooms ? parseInt(formData.bathrooms) : 0,
                parking: formData.parking ? parseInt(formData.parking) : 0,
                rooms: formData.rooms ? parseInt(formData.rooms) : 0,
                yard_type: formData.yard_type,
                num_comments: houseInfo?.num_comments || 0,
                transaction_type: formData.transaction_type,
                caption: formData.caption || null
            };

            const response = await UpdateAHouse(Id, submitData);
            
            if (response.ok) {
                toast.success('اطلاعات با موفقیت به روز شد', {
                    position: "top-center",
                    autoClose: 2400,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
                onClose(false);
                router.refresh();
            } else {
                toast.error("مشکلی در آپدیت کردن ملک شما به وجود آمده است", {
                    position: "top-center",
                    autoClose: 2400,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
            }
        } catch (error) {
            console.error('Error updating house:', error);
            toast.error("خطا در سرور", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm'>
                <div className='bg-white dark:bg-[#333333] rounded-lg p-8'>
                    <div className='text-center'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto'></div>
                        <p className='mt-4 text-gray-600 dark:text-gray-300'>در حال دریافت اطلاعات...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm'
        >
            <div className='max-w-[500px] w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#333333] rounded-lg shadow-lg relative'>
                <button
                    onClick={() => onClose(false)}
                    className='absolute left-4 top-4 z-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                >
                    <IoClose size={24} className='text-gray-600 dark:text-gray-300' />
                </button>

                <div className='p-6'>
                    <h2 className='text-xl font-bold mb-6 text-gray-800 dark:text-white text-center'>ویرایش اطلاعات خانه</h2>

                    <div className='flex w-full flex-col'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="title" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    عنوان
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder='عنوان'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="address" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    آدرس
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder='آدرس'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="price" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    قیمت
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder='قیمت'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    min="0"
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="capacity" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    ظرفیت
                                </label>
                                <input
                                    type="number"
                                    id="capacity"
                                    name="capacity"
                                    value={formData.capacity}
                                    onChange={handleChange}
                                    placeholder='ظرفیت'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    min="1"
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="bathrooms" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    تعداد حمام
                                </label>
                                <input
                                    type="number"
                                    id="bathrooms"
                                    name="bathrooms"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                    placeholder='تعداد حمام'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    min="0"
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="parking" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    تعداد پارکینگ
                                </label>
                                <input
                                    type="number"
                                    id="parking"
                                    name="parking"
                                    value={formData.parking}
                                    onChange={handleChange}
                                    placeholder='تعداد پارکینگ'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    min="0"
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="rooms" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    تعداد اتاق
                                </label>
                                <input
                                    type="number"
                                    id="rooms"
                                    name="rooms"
                                    value={formData.rooms}
                                    onChange={handleChange}
                                    placeholder='تعداد اتاق'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    min="0"
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="yard_type" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    نوع حیاط
                                </label>
                                <select
                                    id="yard_type"
                                    name="yard_type"
                                    value={formData.yard_type}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white cursor-pointer"
                                    required
                                >
                                    <option value="">انتخاب کنید</option>
                                    {yard_type.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="transaction_type" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    نوع معامله
                                </label>
                                <select
                                    id="transaction_type"
                                    name="transaction_type"
                                    value={formData.transaction_type}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white cursor-pointer"
                                    required
                                >
                                    <option value="">انتخاب کنید</option>
                                    {transactionType.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="caption" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    توضیحات
                                </label>
                                <input
                                    type="text"
                                    id="caption"
                                    name="caption"
                                    value={formData.caption}
                                    onChange={handleChange}
                                    placeholder='توضیحات'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                />
                            </div>
                            <div className='flex gap-3'>
                                <button
                                    type='button'
                                    onClick={() => onClose(false)}
                                    className='flex-1 py-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
                                >
                                    انصراف
                                </button>
                                <button
                                    type='submit'
                                    disabled={isLoading}
                                    className='flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isLoading ? 'در حال ارسال...' : 'به روزرسانی اطلاعات'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateHouse
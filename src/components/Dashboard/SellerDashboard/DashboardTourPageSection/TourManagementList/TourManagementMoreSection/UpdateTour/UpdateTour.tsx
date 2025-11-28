"use client"
import { GetTourById, UpdateTours } from '@/core/api/Tours/Tours';
import { IUpdateTour } from '@/core/types/Tours/ITours';
import React, { FC, useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

const availableServices = [
    { id: "transportation", name: "حمل و نقل" },
    { id: "meals", name: "وعده های غذایی" },
    { id: "guide", name: "راهنما" },
    { id: "night_hike", name: "کوهنوردی شبانه" }
] as const;

const availableFacilities = [
    { id: "wifi", name: "وای فای" },
    { id: "restrooms", name: "سرویس بهداشتی" },
    { id: "parking", name: "پارکینگ" },
    { id: "showers", name: "دوش" }
] as const;

interface IProps {
    Id: string;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateTour: FC<IProps> = ({ Id, onClose }) => {
    const [tourInfo, setTourInfo] = useState<IUpdateTour>();
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        cancellationPeriodDays: '',
        services: [] as string[],
        facilities: [] as string[]
    });
    const [isLoading, setIsLoading] = useState(false);

    const fetchTourData = async () => {
        try {
            const getTourInfo = await GetTourById(Id);
            setTourInfo(getTourInfo);
            if (getTourInfo) {
                setFormData({
                    title: getTourInfo.title || '',
                    price: getTourInfo.price || '',
                    description: getTourInfo.description || '',
                    cancellationPeriodDays: getTourInfo.cancellationPeriodDays?.toString() || '',
                    services: getTourInfo.services || [],
                    facilities: getTourInfo.facilities || []
                });
            }
        } catch (error) {
            console.error('Error fetching tour data:', error);
            toast.error("خطا در دریافت اطلاعات تور", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
        }
    };

    useEffect(() => {
        fetchTourData();
    }, [Id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            const submitData: IUpdateTour = {
                title: formData.title,
                price: formData.price,
                description: formData.description,
                cancellationPeriodDays: formData.cancellationPeriodDays ? parseInt(formData.cancellationPeriodDays) : undefined,
                services: formData.services,
                facilities: formData.facilities
            };

            const response = await UpdateTours(Id, submitData);
            if (response?.ok) {
                toast.success('تور با موفقیت به روز شد', {
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
                toast.error("مشکلی در به روزرسانی تور به وجود آمده است", {
                    position: "top-center",
                    autoClose: 2400,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
            }
        } catch (error) {
            console.error('Error updating tour:', error);
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
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm'>
            <div className='max-w-[600px] w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#333333] rounded-lg shadow-lg relative'>
                <button
                    onClick={() => onClose(false)}
                    className='absolute left-4 top-4 z-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                >
                    <IoClose size={24} className='text-gray-600 dark:text-gray-300' />
                </button>

                <div className='p-6'>
                    <h2 className='text-xl font-bold mb-6 text-gray-800 dark:text-white text-center'>ویرایش تور</h2>

                    <div className='flex w-full flex-col'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="title" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    عنوان تور
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder='عنوان تور'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="price" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    قیمت تور
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder='قیمت تور'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="description" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    توضیحات تور
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder='توضیحات کامل تور'
                                    rows={4}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white resize-none'
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="cancellationPeriodDays" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    دوره لغو (روز)
                                </label>
                                <input
                                    type="number"
                                    id="cancellationPeriodDays"
                                    name="cancellationPeriodDays"
                                    value={formData.cancellationPeriodDays}
                                    onChange={handleChange}
                                    placeholder='دوره لغو به روز'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    min="0"
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="services" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    خدمات تور
                                </label>
                                <select
                                    id="services"
                                    name="services"
                                    value={formData.services[0] || ''}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (value) {
                                            setFormData(prev => ({
                                                ...prev,
                                                services: [value]
                                            }));
                                        }
                                    }}
                                    className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] text-[14px] cursor-pointer border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400"
                                >
                                    <option value="" className="text-gray-500">
                                        انتخاب خدمات
                                    </option>
                                    {availableServices.map((service) => (
                                        <option
                                            key={service.id}
                                            value={service.id}
                                            className="text-gray-800 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            {service.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="facilities" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    امکانات تور
                                </label>
                                <select
                                    id="facilities"
                                    name="facilities"
                                    value={formData.facilities[0] || ''}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (value) {
                                            setFormData(prev => ({
                                                ...prev,
                                                facilities: [value]
                                            }));
                                        }
                                    }}
                                    className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] text-[14px] cursor-pointer border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400"
                                >
                                    <option value="" className="text-gray-500">
                                        انتخاب امکانات
                                    </option>
                                    {availableFacilities.map((facility) => (
                                        <option
                                            key={facility.id}
                                            value={facility.id}
                                            className="text-gray-800 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            {facility.name}
                                        </option>
                                    ))}
                                </select>
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
                                    {isLoading ? 'در حال ارسال...' : 'به روزرسانی تور'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateTour
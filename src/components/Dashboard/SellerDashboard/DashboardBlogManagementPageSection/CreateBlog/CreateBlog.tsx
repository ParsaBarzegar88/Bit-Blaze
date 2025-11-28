"use client"
import { CreateBlogs } from '@/core/api/Blogs/Blog';
import { ICreateBlog } from '@/core/types/Blogs/IBlogs';
import { useRouter } from "next/navigation";
import React, { FC, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';

const blogCategories = [
    { id: "1", name: "املاک" }, 
    { id: "2", name: "مشاوره" },
    { id: "3", name: "تکنولوژی" },
    { id: "4", name: "سبک زندگی" },
] as const;

interface IProps {
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateBlog: FC<IProps> = ({ onClose }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        caption: '',
        estimated_reading_time: '',
        author_id: '',
        category_id: ''
    });
    const [isLoading, setIsLoading] = useState(false);

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
            if (!formData.title.trim()) {
                toast.error("عنوان مقاله الزامی است", {
                    position: "top-center",
                    autoClose: 2400,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
                setIsLoading(false);
                return;
            }

            if (!formData.author_id || !formData.category_id) {
                toast.error("شناسه نویسنده و دسته‌بندی الزامی هستند", {
                    position: "top-center",
                    autoClose: 2400,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
                setIsLoading(false);
                return;
            }

            const submitData: ICreateBlog = {
                title: formData.title.trim(),
                caption: formData.caption.trim() || undefined,
                estimated_reading_time: formData.estimated_reading_time || undefined,
                author_id: parseInt(formData.author_id),
                category_id: parseInt(formData.category_id)
            };

            console.log('Submitting data:', submitData);

            const response = await CreateBlogs(submitData);
            console.log('Create response:', response);

            if (response?.ok) {
                toast.success('مقاله با موفقیت ایجاد شد', {
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
                console.error('Server error:', response?.response);
                toast.error(response?.response?.message || "مشکلی در ایجاد مقاله به وجود آمده است", {
                    position: "top-center",
                    autoClose: 2400,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
            }
        } catch (error) {
            console.error('Error creating blog:', error);
            toast.error("خطا در ارتباط با سرور", {
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
                        <p className='mt-4 text-gray-600 dark:text-gray-300'>در حال ایجاد مقاله...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm'>
            <div className='max-w-[500px] w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#333333] rounded-lg shadow-lg relative'>
                <button
                    onClick={() => onClose(false)}
                    className='absolute left-4 top-4 z-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                >
                    <IoClose size={24} className='text-gray-600 dark:text-gray-300' />
                </button>

                <div className='p-6'>
                    <h2 className='text-xl font-bold mb-6 text-gray-800 dark:text-white text-center'>ایجاد مقاله جدید</h2>

                    <div className='flex w-full flex-col'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="title" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    عنوان مقاله
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder='عنوان مقاله'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    required
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="caption" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    توضیحات مقاله
                                </label>
                                <textarea
                                    id="caption"
                                    name="caption"
                                    value={formData.caption}
                                    onChange={handleChange}
                                    placeholder='توضیحات کامل مقاله'
                                    rows={4}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white resize-none'
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="estimated_reading_time" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    زمان مطالعه (ثانیه)
                                </label>
                                <input
                                    type="number"
                                    id="estimated_reading_time"
                                    name="estimated_reading_time"
                                    value={formData.estimated_reading_time}
                                    onChange={handleChange}
                                    placeholder='زمان مطالعه به ثانیه'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    min="0"
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="author_id" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    شناسه نویسنده
                                </label>
                                <input
                                    type="number"
                                    id="author_id"
                                    name="author_id"
                                    value={formData.author_id}
                                    onChange={handleChange}
                                    placeholder='شناسه نویسنده'
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
                                    min="1"
                                    required
                                />
                            </div>

                            <div className='mb-6'>
                                <label htmlFor="category_id" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    دسته‌بندی
                                </label>
                                <select
                                    id="category_id"
                                    name="category_id"
                                    value={formData.category_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white cursor-pointer"
                                    required
                                >
                                    <option value="">انتخاب دسته‌بندی</option>
                                    {blogCategories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
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
                                    {isLoading ? 'در حال ارسال...' : 'ایجاد مقاله'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
import Image from 'next/image';
import React, { FC, useState, useRef } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
import { UploadPhotosForTour } from '@/core/api/Tours/Tours';

interface IProps {
    Id: string;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadPicture: FC<IProps> = ({ Id, onClose }) => {
    const [pictureFiles, setPictureFiles] = useState<File[]>([]);
    const [picturePreviews, setPicturePreviews] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAddPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                setPictureFiles(prev => [...prev, file])
                const render = new FileReader()
                render.onload = () => {
                    setPicturePreviews(prev => [...prev, render.result as string])
                }
                render.readAsDataURL(file)
            }
        });
    }

    const removePicture = (index: number) => {
        setPictureFiles((prev) => prev?.filter((_, i) => i !== index))
        setPicturePreviews((prev) => prev?.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (pictureFiles.length === 0) {
            toast.error("لطفاً حداقل یک عکس انتخاب کنید", {
                position: "top-center",
                autoClose: 2400,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            return;
        }

        setIsLoading(true);

        try {
            const formData = new FormData();

            pictureFiles.forEach((file) => {
                formData.append('photos', file);
            });
            const response = await UploadPhotosForTour(Id, formData);
            console.log(response.ok)
            console.log(response.response)
            if (response.ok) {
                toast.success('عکس‌ها با موفقیت آپلود شدند', {
                    position: "top-center",
                    autoClose: 2400,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
                onClose(false);
                setPictureFiles([]);
                setPicturePreviews([]);
            } else {
                toast.error("مشکلی در آپلود عکس‌ها به وجود آمده است", {
                    position: "top-center",
                    autoClose: 2400,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
            }
        } catch (error) {
            console.error('Error uploading photos:', error);
            toast.error("خطا در سرور", {
                position: "top-center",
                autoClose: 2400,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm'>
            <div className='max-w-[800px] w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#333333] rounded-lg shadow-lg relative'>
                <button
                    onClick={() => onClose(false)}
                    className='absolute left-4 top-4 z-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                >
                    <IoClose size={24} className='text-gray-600 dark:text-gray-300' />
                </button>

                <div className='p-6'>
                    <h2 className='text-xl font-bold mb-6 text-gray-800 dark:text-white text-center'>آپلود عکس‌های تور</h2>

                    <div className='flex flex-col gap-6 md:gap-8'>

                        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4'>
                            <div className='w-full aspect-square'>
                                <label
                                    htmlFor='Picture'
                                    className='flex flex-col border-2 border-dashed text-[#8CFF45] cursor-pointer border-[#8CFF45] rounded-xl md:rounded-2xl w-full h-full items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:bg-[#8CFF45]/5 hover:scale-[1.02] active:scale-95'
                                >
                                    <IoIosAddCircleOutline className="text-2xl md:text-3xl" />
                                    <span className='font-[600] text-sm md:text-base text-center px-2'>افزودن عکس</span>
                                    <input
                                        type="file"
                                        className='hidden'
                                        multiple
                                        accept='image/*'
                                        id='Picture'
                                        onChange={handleAddPicture}
                                        ref={fileInputRef}
                                    />
                                </label>
                            </div>
                            {picturePreviews?.map((src, index) => (
                                <div
                                    key={index}
                                    className='relative w-full aspect-square group transition-all duration-300 hover:scale-[1.02]'
                                >
                                    <div className='relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-600'>
                                        <Image
                                            src={src}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 20vw, 16vw"
                                            alt={`آپلود ${index + 1}`}
                                            className='object-cover transition-transform duration-300 group-hover:scale-105'
                                        />
                                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300' />
                                        <button
                                            onClick={() => removePicture(index)}
                                            className='absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 hover:bg-red-600'
                                        >
                                            <RiDeleteBin6Line className="text-xs md:text-sm" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {picturePreviews.length === 0 && (
                            <div className='text-center py-8 text-gray-500 dark:text-gray-400'>
                                <p className='text-sm md:text-base'>هنوز هیچ عکسی اضافه نکرده‌اید</p>
                                <p className='text-xs md:text-sm mt-1'>برای شروع، روی دکمه افزودن عکس کلیک کنید</p>
                            </div>
                        )}
                        <div className='flex gap-3 pt-4'>
                            <button
                                type='button'
                                onClick={() => onClose(false)}
                                className='flex-1 py-3 px-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
                            >
                                انصراف
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading || picturePreviews.length === 0}
                                className='flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isLoading ? 'در حال آپلود...' : 'آپلود عکس‌ها'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPicture
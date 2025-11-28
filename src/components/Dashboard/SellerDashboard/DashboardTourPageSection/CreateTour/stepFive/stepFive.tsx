import Image from 'next/image';
import React, { useState, useRef } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from 'react-toastify';
import { ICreateTour } from '@/core/types/Tours/ITours';

interface StepFiveProps {
    formData: ICreateTour
    setFormData: React.Dispatch<React.SetStateAction<ICreateTour>>
    onClose: () => void
    onSubmit: () => void
    isLoading: boolean
}

const StepFive: React.FC<StepFiveProps> = ({
    formData,
    setFormData,
    onClose,
    onSubmit,
    isLoading
}) => {
    const [pictureFiles, setPictureFiles] = useState<File[]>([]);
    const [picturePreviews, setPicturePreviews] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAddPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                setFormData(prev => ({
                    ...prev,
                    photos: [file] as File[]
                }));
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


    return (
        <div className='flex flex-col gap-6 md:gap-8'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-3'>
                    <span className='text-[#8CFF45] text-lg md:text-xl font-[600]'>یک تصویر بهتر از هزار کلمه</span>
                    <span className='text-lg md:text-xl font-[600] text-gray-800 dark:text-gray-200'>
                        . با قرار دادن عکس شانس دیده شدن تورتان را ۵ برابر کنید
                    </span>
                </div>
            </div>

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
        </div>
    )
}

export default StepFive
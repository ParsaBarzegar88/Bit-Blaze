import { delete3DImage, get3DPicture } from '@/core/api/HouseReserve/Detail/Detail';
import { upload3DImage } from '@/core/api/SellerDashboard/UpdateHouse/UpdateHouse';
import { I3DImage } from '@/core/types/HouseReserveDetail/I3DImage';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction, useState, useEffect, useCallback } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

interface IProps {
    onClose: Dispatch<SetStateAction<boolean>>;
    Id: string;
}


const Add3DImage: FC<IProps> = ({ onClose, Id }) => {
    const [existingImages, setExistingImages] = useState<I3DImage>();
    const [newFiles, setNewFiles] = useState<File[]>([]);
    const [newPreviews, setNewPreviews] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchExistingImages = useCallback(async () => {
        try {
            setLoading(true);
            const res = await get3DPicture(Id);
            setExistingImages(res);
        } catch {
            toast.error('خطا در دریافت تصاویر فعلی', {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
        } finally {
            setLoading(false);
        }
    }, [Id]);
    useEffect(() => {
        fetchExistingImages();
    }, [Id, fetchExistingImages]);

    const handleAddNewPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                setNewFiles(prev => [...prev, file]);
                const reader = new FileReader();
                reader.onload = () => {
                    setNewPreviews(prev => [...prev, reader.result as string]);
                };
                reader.readAsDataURL(file);
            }
        });
    };

    const removeNewPicture = (index: number) => {
        setNewFiles(prev => prev.filter((_, i) => i !== index));
        setNewPreviews(prev => prev.filter((_, i) => i !== index));
    };

    const removeExistingPicture = async (imageId: string) => {
        const res = await delete3DImage(imageId);
        if (res.ok) {
            toast.success('تصویر با موفقیت حذف شد', {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            fetchExistingImages()
        } else {
            toast.error('خطا در حذف تصویر', {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            fetchExistingImages()
        }
    };

    const UploadPictureToAPI = async () => {
        const formData = new FormData()
        newFiles.forEach((file) => {
            formData.append('files', file);
        });
        formData.append('house_id', Id)
        const PictureResponse = await upload3DImage(formData)
        console.log(PictureResponse)
        if (PictureResponse.ok) {
            toast.success('عکس با موفقیت آپلود شد', {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            onClose(false)
        } else {
            toast.error('مشکلی در آپلود تصویر به وجود آمده است', {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            onClose(false)
        }
    }
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-5xl mx-4 flex flex-col max-h-[90vh] overflow-hidden'>
                <div className='flex justify-between items-center p-6 border-b border-dashed border-gray-300 dark:border-gray-600'>
                    <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>
                        مدیریت عکس‌های سه بعدی
                    </h2>
                    <button
                        onClick={() => onClose(false)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
                    >
                        <LiaTimesSolid size={20} />
                        <span className='text-md'>بستن</span>
                    </button>
                </div>

                <div className='flex-1 overflow-y-auto p-6'>
                    <p className='text-center text-gray-600 dark:text-gray-300 mb-6'>
                        می‌توانید عکس‌های سه بعدی فعلی را حذف کنید یا تصاویر جدید اضافه کنید
                    </p>

                    {loading ? (
                        <div className='text-center py-10'>در حال بارگذاری...</div>
                    ) : (
                        <>
                            {existingImages?.image_urls && (
                                <div className='mb-10'>
                                    <h3 className='text-xl font-semibold mb-4 text-right'>عکس‌های فعلی</h3>
                                    <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4'>
                                        <div className='relative group aspect-square'>
                                            <Image
                                                src={existingImages.image_urls[0]}
                                                fill
                                                alt='عکس سه بعدی'
                                                className='object-cover rounded-xl border-2 border-gray-200 dark:border-gray-600'
                                            />
                                            <button
                                                onClick={() => removeExistingPicture(String(existingImages.id))}
                                                className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition'
                                            >
                                                <RiDeleteBin6Line size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div>
                                <h3 className='text-xl font-semibold mb-4 text-right'>آپلود تصویر جدید</h3>
                                <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4'>
                                    <label
                                        htmlFor='newPicture'
                                        className='flex flex-col items-center justify-center border-2 border-dashed border-[#8CFF45] text-[#8CFF45] rounded-xl aspect-square cursor-pointer hover:bg-[#8CFF45]/5 transition'
                                    >
                                        <IoIosAddCircleOutline size={40} />
                                        <span className='mt-2 font-semibold'>آپلود تصویر</span>
                                        <input
                                            id='newPicture'
                                            type="file"
                                            multiple
                                            accept='image/*'
                                            className='hidden'
                                            onChange={handleAddNewPicture}
                                        />
                                    </label>
                                    {newPreviews.map((src, index) => (
                                        <div key={`new-${index}`} className='relative group aspect-square'>
                                            <Image
                                                src={src}
                                                fill
                                                alt='پیش‌نمایش'
                                                className='object-cover rounded-xl border-2 border-gray-300'
                                            />
                                            <button
                                                onClick={() => removeNewPicture(index)}
                                                className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition'
                                            >
                                                <RiDeleteBin6Line size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {newFiles.length > 0 && (
                    <div className='border-t border-gray-300 dark:border-gray-700 p-4 text-center'>
                        <button
                            onClick={UploadPictureToAPI}
                            className='bg-[#8CFF45] text-black font-bold px-8 cursor-pointer py-3 rounded-xl hover:bg-[#7be038] transition'
                        >
                            آپلود {newFiles.length} تصویر جدید
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Add3DImage;
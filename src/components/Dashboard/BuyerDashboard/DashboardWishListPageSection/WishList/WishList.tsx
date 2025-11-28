'use client'
import { DeleteWishlist } from '@/core/api/wishlist/wishlist'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { toast } from 'react-toastify'

interface IHouse {
    id: string;
    title: string;
    address: string;
    photos: string[] | null;
    price: string;
    sellerName: string;
}

interface IWishlistItem {
    id: number;
    userId: number;
    houseId: number;
    note: string;
    createdAt: string;
    updatedAt: string;
    house: IHouse;
}

interface IWishlist {
    data: IWishlistItem[];
    totalCount: number;
}

interface IProps {
    userWishListInfo: IWishlist;
}

const WishList: FC<IProps> = ({ userWishListInfo }) => {
    const router = useRouter()

    const handleDeleteWishList = async (userId: number, houseId: number) => {
        const response = await DeleteWishlist(userId, houseId);
        if (response.ok) {
            toast.success('سنجاق شما با موفقیت حذف شد', {
                position: 'top-center',
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
            });
            router.refresh()
        } else {
            toast.error('مشکلی در حذف کردن رزرو شما به وجود آمده است', {
                position: 'top-center',
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: 'IRANSansXFaNum', direction: 'rtl' },
            });
            router.refresh()
        }
    }

    if (!userWishListInfo || !userWishListInfo.data || userWishListInfo.data.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
                هیچ مورد سنجاقی یافت نشد
            </div>
        )
    }

    return (
        <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="w-full flex flex-col gap-3 sm:gap-2 min-w-[800px]">
                <div className="bg-[#F0F0F0] dark:bg-[#4a4a4a] dark:shadow-[0_0px_5px_rgba(0,0,0,0.3)] shadow-[0_0px_5px_rgba(0,0,0,0.27)] w-full items-center grid grid-cols-5 gap-2 py-3 px-2 rounded-[10px]">
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        تصویر
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm pr-2">
                        نام اقامتگاه
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        فروشنده
                    </div>
                    <div className="col-span-1 text-right font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        یادداشت
                    </div>
                    <div className="col-span-1 text-center font-medium text-gray-700 dark:text-white text-xs sm:text-sm">
                        عملیات
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    {userWishListInfo.data.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-5 gap-2 items-center py-2 px-2 rounded-[10px] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors duration-300"
                        >
                            <div className="col-span-1 flex justify-center">
                                <div className="bg-[#AAAAAA] rounded-[12px] w-full h-[107px] overflow-hidden">
                                    <Image
                                        src={item.house?.photos && item.house.photos.length > 0 && item.house.photos[0].trim() !== '' 
                                            ? item.house.photos[0] 
                                            : "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg"}
                                        width={500}
                                        height={500}
                                        className='w-full h-full object-cover'
                                        alt={item.house?.title || 'HouseImage'}
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2">
                                <div className="line-clamp-2">{item.house?.title || "عنوان نامشخص"}</div>
                                <div className="text-[10px] text-gray-500 mt-1 line-clamp-1">
                                    {item.house?.address || "آدرس نامشخص"}
                                </div>
                            </div>

                            <div className="col-span-1 text-right font-[600] text-[#272727] dark:text-gray-300 text-xs sm:text-sm pr-2">
                                <div className="line-clamp-2">{item.house?.sellerName || "فروشنده نامشخص"}</div>
                                <div className="text-[10px] text-gray-500 mt-1">
                                    {item.house?.price ? `${parseInt(item.house.price).toLocaleString()} تومان` : "قیمت نامشخص"}
                                </div>
                            </div>
                            <div className="col-span-1 text-center flex">
                                <span className="text-xs sm:text-sm font-[600] text-[#272727] dark:text-gray-200 line-clamp-3 px-2 bg-gray-100 dark:bg-[#555555] py-1 rounded-md">
                                    {item.note || "بدون یادداشت"}
                                </span>
                            </div>

                            <div className="flex relative col-span-1 text-center text-gray-700 dark:text-gray-300 font-medium items-center justify-center">
                                <div
                                    onClick={() => handleDeleteWishList(Number(item.userId), Number(item.houseId))}
                                    className='text-red-500 text-sm cursor-pointer hover:text-red-700 transition-colors duration-200 py-2 px-4 bg-red-50 dark:bg-red-900/20 rounded-md hover:bg-red-100 dark:hover:bg-red-900/30'
                                >
                                    حذف
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WishList
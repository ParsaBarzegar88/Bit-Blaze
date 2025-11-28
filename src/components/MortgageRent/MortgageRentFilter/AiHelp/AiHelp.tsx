'use client'
import { getAllHouses } from '@/core/api/Ai/Ai';
import { IHouses } from '@/core/types/LandingPage/IHouses';
import { IHousesData } from '@/core/types/MortgageRent/IHouses';
import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { toast } from 'react-toastify';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';

interface IProps {
    onClose: Dispatch<SetStateAction<boolean>>;
}

const AiHelp: FC<IProps> = ({ onClose }) => {
    const [AllHouses, setAllHouses] = useState<IHouses>({ houses: [], totalCount: 0 })
    const [AiResult, setAiResult] = useState<IHousesData | null>(null)
    const [Money, setMoney] = useState<string>("")
    const [Description, setDescription] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchAllHouses = useCallback(async () => {
        const response = await getAllHouses()
        setAllHouses(response)
    }, [])

    const sendToAI = async () => {
        if (!Money && !Description) {
            toast.error("لطفاً بودجه یا توضیحات را وارد کنید.", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            return;
        }

        setIsLoading(true)

        await fetchAllHouses();

        if (!AllHouses || AllHouses.totalCount === 0) {
            toast.error("داده‌ای برای جستجو وجود ندارد.", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
            setIsLoading(false)
            return;
        }

        const prompt = `
تو یک متخصص املاک بسیار دقیق هستی و فقط باید یک خانه را انتخاب کنی.

داده‌های کاربر:
- بودجه: ${Money ? Money + " تومان" : "نامشخص"}
- توضیحات: ${Description || "بدون توضیحات"}

لیست تمام خانه‌ها:
${JSON.stringify(AllHouses, null, 2)}

قوانین سخت‌گیرانه:
1. فقط یک خانه را انتخاب کن.
2. خروجی فقط یک JSON کامل و معتبر باشد (بدون هیچ متن اضافه).
3. اگر هیچ خانه‌ای مناسب نبود، دقیقاً این را برگردون:
   {"message": "متاسفانه خانه‌ای مطابق با درخواست شما پیدا نشد."}

فرمت خروجی دقیق:
{
  "id": number,
  "title": string,
  "address": string,
  "photos": string[] | null,
  "rate": string | null,
  "discounted_price": string | null,
  "price": string,
  "tags": string[],
  "last_updated": string,
  "capacity": number,
  "location": { "lat": string, "lng": string },
  "categories": { "id": number, "name": string },
  "bathrooms": number,
  "parking": number,
  "rooms": number,
  "yard_type": string,
  "num_comments": number,
  "discount_id": string,
  "transaction_type": string,
  "sellerId": string,
  "sellerName": string,
  "caption": string,
  "bookings": number,
  "favoriteId": number | string | null,
  "isFavorite": boolean
}

حالا بهترین خانه را انتخاب کن و فقط JSON را برگردون:
        `.trim();

        try {
            const res = await fetch('/api/ai/house', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: prompt }),
            });

            if (!res.ok) {
                toast.error("خطای سرور", {
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

            const data = await res.json();
            if (JSON.parse(data).message === "متاسفانه خانه‌ای مطابق با درخواست شما پیدا نشد.") {
                toast.error("متاسفانه خانه‌ای مطابق با درخواست شما پیدا نشد.", {
                    position: "top-center",
                    autoClose: 2400,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                });
                setAiResult(null);
            } else {
                setAiResult(JSON.parse(data));
            }
        } catch {
            toast.error("خطای شبکه یا سرور", {
                position: "top-center",
                autoClose: 2400,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            });
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchAllHouses()
    }, [fetchAllHouses])
    console.log(AiResult)
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className='relative bg-white dark:bg-[#363636] border border-gray-300 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-3xl mx-4 flex flex-col max-h-[90vh] overflow-y-auto'>
                <div className='flex max-[800px]:flex-col-reverse max-[800px]:gap-3.5 justify-between items-center p-6'>
                    <h2 className='text-xl max-[800px]:text-[19px] font-bold text-gray-800 dark:text-white'>
                        جستجوی پیشرفته با هوش مصنوعی
                    </h2>
                    <button
                        onClick={() => onClose(false)}
                        className='flex items-center gap-2 border cursor-pointer border-[#FF4242] text-[#FF4242] px-4 py-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition'
                    >
                        <LiaTimesSolid size={20} />
                        <span className='text-md'>بستن</span>
                    </button>
                </div>

                <div className='px-6 pb-6'>
                    {AiResult !== null && !AiResult.message ? (
                        <div className="space-y-6">
                        <p className='text-center'>
                            این {AiResult.title} در {AiResult.address} با قیمت {AiResult.discounted_price ? AiResult.discounted_price : AiResult.price} گزینه خوبی برای شماست 
                        </p>
                            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={AiResult.photos !== null && AiResult.photos.length > 0 && AiResult.photos[0].trim() !== '' ? AiResult.photos[0] : "https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg"}
                                    alt={AiResult.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{AiResult.title}</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 flex flex-row gap-1.5 items-center">
                                <CiLocationOn size={25}/>
                                <span>{AiResult.address}</span>
                            </p>

                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-2">
                                    <p className="text-2xl font-bold">{AiResult.rooms}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">اتاق</p>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-2">
                                    <p className="text-2xl font-bold">{AiResult.bathrooms}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">حمام</p>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-2">
                                    <p className="text-2xl font-bold">{AiResult.parking}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">پارکینگ</p>
                                </div>
                            </div>

                            <div className=" text-emerald-600 dark:text-emerald-400 flex flex-row justify-between w-full">
                                <span className='text-xl'>{Number(AiResult.discounted_price ? AiResult.discounted_price : AiResult.price).toLocaleString()} تومان</span>
                                <Link className='bg-emerald-600 dark:bg-emerald-500 text-white dark:text-[#333333] rounded-[8px] p-1.5' href={`/mortgage-rent/${AiResult.id}`}>مشاهده جزئیات بیشتر</Link>
                            </div>

                            <button
                                onClick={() => setAiResult(null)}
                                className="w-full cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition"
                            >
                                جستجوی دوباره
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className='flex flex-col gap-5 w-full'>
                                <div className='flex flex-col w-full gap-3.5'>
                                    <label htmlFor="money">بودجه (تومان)</label>
                                    <input
                                        value={Money}
                                        onChange={(e) => setMoney(e.target.value)}
                                        id='money'
                                        type="text"
                                        placeholder='مثال : 1200000'
                                        className='border p-1.5 rounded-[10px] outline-0 focus:outline-0'
                                    />
                                </div>
                                <div className='flex flex-col w-full gap-3.5'>
                                    <label htmlFor="description">توضیحات</label>
                                    <textarea
                                        value={Description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        id='description'
                                        placeholder='مثال : خانه دو خوابه در شیراز'
                                        className='border p-1.5 min-h-[150px] max-h-[300px] rounded-[10px] outline-0 focus:outline-0'
                                    />
                                </div>
                                <button
                                    onClick={sendToAI}
                                    disabled={isLoading}
                                    className='flex flex-row justify-center text-center gap-3 bg-[#10a37f] p-3 rounded-[10px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed transition-all'
                                >
                                    {isLoading ? (
                                        <>
                                            <span>در حال جستجو با هوش مصنوعی...</span>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            <span>جستجو</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" strokeWidth="1.5" viewBox="-0.17090198558635983 0.482230148717937 41.14235318283891 40.0339509076386">
                                                <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5a10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zm-16.106-6.88a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.01L7.04 23.856a7.504 7.504 0 0 1-2.743-10.237zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .113-.01l8.052 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.65-1.132zm3.35-5.043a7.395 7.395 0 0 0-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zM16.071 18l4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18z" fill="currentColor" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AiHelp
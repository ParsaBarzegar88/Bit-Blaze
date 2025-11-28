import { addToWishlist } from '@/core/api/wishlist/wishlist';
import { IAddWishlist } from '@/core/types/wishlist/IWishlist';
import React, { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface IProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    houseId: string
}

const AddToWishList: FC<IProps> = ({
    open,
    onOpenChange,
    houseId
}) => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<IAddWishlist>({
        houseId: houseId,
        note: ""
    })

    useEffect(() => {
        if (open) {
            setFormData({
                houseId: houseId,
                note: ""
            })
        }
    }, [open, houseId])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await addToWishlist(formData)
            console.log("اصلاعات فورم" , formData)
            console.log(response.ok)

            if (response.ok) {
                toast.success(" یادداشت با موفقیت ذخیره شد", {
                    position: "top-center",
                    autoClose: 2400,
                    style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
                })
                setFormData({ houseId: "", note: "" })
                onOpenChange(false)
            } else {
                throw new Error(response.response?.message || "خطا در ذخیره جستجو")
            }
        } catch {
            toast.error("مشکلی در ذخیره یادداشت به وجود آمده است", {
                position: "top-center",
                autoClose: 2400,
                style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
            })
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClose = () => {
        setFormData({ houseId: "", note: "" })
        onOpenChange(false)
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm bg-opacity-50 z-1000">
            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-2xl w-full max-w-md mx-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      نوشتن یادداشت
                    </h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
                        disabled={loading}
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="space-y-3">
                        <label htmlFor="note" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
                           یادداشت
                        </label>
                        <input
                            id="note"
                            name="note"
                            value={formData.note}
                            onChange={handleChange}
                            placeholder="مثال:  خونه لوکس..."
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                        bg-white dark:bg-[#2d2d2d] text-gray-900 dark:text-white
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        text-right text-sm h-11 disabled:opacity-50"
                            required
                            disabled={loading}
                        />
                    </div>
                    <div className="flex gap-3 justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                        text-gray-700 dark:text-gray-300 bg-white dark:bg-[#2d2d2d]
                        hover:bg-gray-50 dark:hover:bg-[#3d3d3d] transition-colors
                        disabled:opacity-50 disabled:cursor-not-allowed text-sm h-10"
                            disabled={loading}
                        >
                            انصراف
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !formData.note.trim()}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg
                        transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                        text-sm h-10 flex items-center justify-center min-w-[120px]"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    در حال ذخیره...
                                </div>
                            ) : (
                                "ذخیره جستجو"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddToWishList
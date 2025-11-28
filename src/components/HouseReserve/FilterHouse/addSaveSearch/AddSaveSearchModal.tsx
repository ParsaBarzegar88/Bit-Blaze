"use client"
import React, { useState, useEffect, FC } from 'react'
import { toast } from "react-toastify"
import { IAddSaveSearch } from "@/core/types/saveSearch/ISaveSearch"
import { AddSaveSearch } from '@/core/api/saveSearch/saveSearch'
import { useRouter } from 'next/navigation'

interface AddSaveSearchModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSaveSuccess?: () => void
  initialSearchQuery?: string
}

const AddSaveSearchModal: FC<AddSaveSearchModalProps> = ({
  open,
  onOpenChange,
  onSaveSuccess,
  initialSearchQuery = ""
}) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<IAddSaveSearch>({
    searchQuery: initialSearchQuery,
    note: ""
  }) 
  const router = useRouter()
  useEffect(() => {
    if (open) {
      setFormData({
        searchQuery: initialSearchQuery,
        note: ""
      })
    }
  }, [open, initialSearchQuery])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.searchQuery.trim()) {
      toast.error("لطفا عبارت جستجو را وارد کنید", {
        position: "top-center",
        style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
      })
      return
    }

    setLoading(true)

    try {
      const response = await AddSaveSearch(formData)
      if (response.ok) {
        toast.success("جستجو با موفقیت ذخیره شد", {
          position: "top-center",
          autoClose: 2400,
          style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
        })
        setFormData({ searchQuery: "", note: "" })
        onOpenChange(false)
        onSaveSuccess?.()
      }
      if (response.response?.message === "Invalid token") {
        toast.error("برای انجام این عملیات وارد حساب کاربری خود شوید", {
          position: "top-center",
          autoClose: 2400,
          style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
        })
        setTimeout(() => {
          router.push('/login')
        }, 2800);
      }
    } catch {
      toast.error("مشکلی در ذخیره جستجو به وجود آمده است", {
        position: "top-center",
        autoClose: 2400,
        style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClose = () => {
    setFormData({ searchQuery: "", note: "" })
    onOpenChange(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm bg-opacity-50 z-1000">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-2xl w-full max-w-md mx-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            ذخیره جستجو
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
            <label htmlFor="searchQuery" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
              عبارت جستجو *
            </label>
            <input
              id="searchQuery"
              name="searchQuery"
              value={formData.searchQuery}
              onChange={handleChange}
              placeholder="مثال: هتل تهران..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-[#2d2d2d] text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       text-right text-sm h-11 disabled:opacity-50"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="note" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
              یادداشت (اختیاری)
            </label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="یادداشت مربوط به این جستجو..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-[#2d2d2d] text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       text-right text-sm min-h-[100px] resize-none disabled:opacity-50"
              rows={4}
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
              disabled={loading || !formData.searchQuery.trim()}
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

export default AddSaveSearchModal
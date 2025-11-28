import React from 'react'
import { ICreateTour } from '@/core/types/Tours/ITours'
import dynamic from "next/dynamic";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

const DatePicker = dynamic(() => import("react-multi-date-picker"), {
  ssr: false,
});

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

interface StepTwoProps {
  formData: ICreateTour
  setFormData: React.Dispatch<React.SetStateAction<ICreateTour>>
}

const StepTwo: React.FC<StepTwoProps> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='mb-4'>
          <label htmlFor="startDate" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
            تاریخ شروع *
          </label>
          <DatePicker
            value={formData.startDate ? new Date(formData.startDate) : null}
            onChange={(date: any) => {
              if (date) {
                const dateObj = new DateObject(date);
                setFormData(prev => ({ ...prev, startDate: dateObj.toDate().toISOString() }));
              }
            }}
            calendar={persian}
            locale={persian_fa}
            inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white"
            placeholder="تاریخ شروع را انتخاب کنید"
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor="endDate" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
            تاریخ پایان *
          </label>
          <DatePicker
            value={formData.endDate ? new Date(formData.endDate) : null}
            onChange={(date: any) => {
              if (date) {
                const dateObj = new DateObject(date);
                setFormData(prev => ({ ...prev, endDate: dateObj.toDate().toISOString() }));
              }
            }}
            calendar={persian}
            locale={persian_fa}
            inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white"
            placeholder="تاریخ پایان را انتخاب کنید"
            required
          />
        </div>
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
          onChange={(e) => setFormData(prev => ({ ...prev, cancellationPeriodDays: parseInt(e.target.value) || 0 }))}
          placeholder='تعداد روزهای مجاز برای لغو'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
          min="0"
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          خدمات تور
        </label>
        <select
          value={formData.services[0] || ''}
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              setFormData(prev => ({ ...prev, services: [value] as [string] }));
            }
          }}
          className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] text-[14px] cursor-pointer border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400"
        >
          <option value="" className="text-gray-500">
            انتخاب خدمات
          </option>
          {availableServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          امکانات تور
        </label>
        <select
          value={formData.facilities[0] || ''}
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              setFormData(prev => ({ ...prev, facilities: [value] as [string] }));
            }
          }}
          className="w-full outline-0 bg-transparent text-gray-800 dark:text-[#DDDDDD] text-[14px] cursor-pointer border border-gray-300 dark:border-[#555555] p-2 sm:p-3 rounded-xl transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400"
        >
          <option value="" className="text-gray-500">
            انتخاب امکانات
          </option>
          {availableFacilities.map((facility) => (
            <option key={facility.id} value={facility.id}>
              {facility.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default StepTwo
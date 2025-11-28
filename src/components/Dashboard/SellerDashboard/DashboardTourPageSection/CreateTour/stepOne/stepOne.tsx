import React from 'react'
import { ICreateTour } from '@/core/types/Tours/ITours'

interface StepOneProps {
  formData: ICreateTour
  setFormData: React.Dispatch<React.SetStateAction<ICreateTour>>
}

const StepOne: React.FC<StepOneProps> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <div className='mb-4'>
        <label htmlFor="title" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          عنوان تور
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          placeholder='عنوان تور'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
          required
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
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder='توضیحات کامل تور'
          rows={4}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white resize-none'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor="tag" className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          تگ تور
        </label>
        <input
          type="text"
          id="tag"
          name="tag"
          value={formData.tag}
          onChange={(e) => setFormData(prev => ({ ...prev, tag: e.target.value }))}
          placeholder='مثلاً: طبیعت‌گردی، فرهنگی، ...'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
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
          onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
          placeholder='قیمت به تومان'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
          required
        />
      </div>
    </div>
  )
}

export default StepOne
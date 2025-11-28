'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

const FavoriteFilter = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const updateSearchParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams)
    if (value === null || value === "همه" || value === "") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`?${params.toString()}`)
  }
  return (
    <div className='flex max-[800px]:flex-col flex-row w-full items-center justify-between'>
      <div className='dark:text-white text-black text-[20px] w-fit'>لیست علاقه مندی ها</div>
      <div className='flex max-[800px]:flex-col flex-row gap-5 justify-end max-w-[500px] w-full'>
        <fieldset className='border rounded-[10px] border-[#AAAAAA] max-[800px]:max-w-full max-w-[375px] w-full'>
          <legend className='mr-2 text-[#AAAAAA] text-[13px] pr-2 pl-2'>جستجو : </legend>
          <input onChange={(e) => updateSearchParams('search', e.target.value)} type="text" className='w-full mb-1 pr-2 focus:border-none focus:outline-none text-[#AAAAAA]' placeholder='نام هتل مورد نظر .....' />
        </fieldset>
        
      </div>
    </div>
  )
}

export default FavoriteFilter
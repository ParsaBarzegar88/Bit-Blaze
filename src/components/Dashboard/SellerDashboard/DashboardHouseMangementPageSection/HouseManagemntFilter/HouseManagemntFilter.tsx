'use client'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import FavoriteFilterItem from './HouseManagemntFilterItem/HouseManagemntFilterItem';
import ReserveFilterItem from './HouseManagemntFilterItem/HouseManagemntFilterItem';

const HouseManagemntFilter = () => {

  const searchParams = useSearchParams()
  const router = useRouter()
  const [openFilters, setOpenFilters] = useState<boolean>(false)

  const handleOpenFilter = () => {
    setOpenFilters(!openFilters)
  }

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
      <div className='dark:text-white text-black text-[20px] w-fit'>لیست املاک من</div>
      <div className='flex max-[800px]:flex-col flex-row gap-5 justify-end max-w-[500px] w-full'>
        <div className='flex flex-row max-[800px]:flex-col w-full items-center justify-between'>
          <div className='flex flex-row max-[800px]:flex-col max-[800px]:justify-center max-[800px]:items-center gap-5 justify-end max-w-[500px] w-full'>
            <fieldset className='border rounded-[10px] border-[#AAAAAA] max-[800px]:max-w-full max-w-[375px] w-full'>
              <legend className='mr-2 text-[#AAAAAA] text-[13px] pr-2 pl-2'>جستجو : </legend>
              <input onChange={(e) => updateSearchParams('search', e.target.value)} type="text" className='w-full mb-1 pr-2 focus:border-none focus:outline-none text-[#AAAAAA]' placeholder='نام مسافر مورد نظر .....' />
            </fieldset>
            <div onClick={handleOpenFilter} className='bg-[#8CFF45] max-[800px]:py-2 max-[800px]:w-full text-black w-[90px] items-center cursor-pointer flex justify-center mt-2.5 rounded-[14px]'>
              فیلتر
            </div>
          </div>
          {openFilters && (
            <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
              <ReserveFilterItem handleClose={setOpenFilters} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HouseManagemntFilter

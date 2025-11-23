'use client'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { IoAddCircleOutline } from 'react-icons/io5';
import CreateBlog from '../CreateBlog/CreateBlog';

const BlogManagemntFilter = () => {

  const [modal, setModal] = useState(false)
  const handleOpenModal = () => {
    setModal(!modal)
  }
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
      <div className='dark:text-white text-black text-[20px] w-fit'>لیست مقالات</div>
      <div className='flex max-[800px]:flex-col flex-row gap-5 justify-end max-w-[500px] w-full'>
        <div className='flex flex-row max-[800px]:flex-col w-full items-center justify-between'>
          <div className='flex flex-row max-[800px]:flex-col max-[800px]:justify-center max-[800px]:items-center gap-5 justify-end max-w-[500px] w-full'>
            <fieldset className='border rounded-[10px] border-[#AAAAAA] max-[800px]:max-w-full max-w-[375px] w-full'>
              <legend className='mr-2 text-[#AAAAAA] text-[13px] pr-2 pl-2'>جستجو : </legend>
              <input onChange={(e) => updateSearchParams('search', e.target.value)} type="text" className='w-full mb-1 pr-2 focus:border-none focus:outline-none text-[#AAAAAA]' placeholder='نام مقاله مورد نظر .....' />
            </fieldset>
            <div onClick={handleOpenModal} className='flex cursor-pointer flex-row text-black items-center sm:w-full max-w-[146px] w-full rounded-2xl py-2 px-4 bg-[#8CFF45] gap-2'>
              <IoAddCircleOutline size={20} />
              افزودن مقاله
            </div>
          </div>
        </div>
      </div>
      {modal === true ? (
        <div className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'>
          <CreateBlog onClose={() => setModal(false)} />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default BlogManagemntFilter

'use client'
import React, { useState } from 'react'
import CommentFilterItem from './CommentFilterItem/CommentFilterItem';

const CommentFilter = () => {
  const [openFilters, setOpenFilters] = useState<boolean>(false)

  const handleOpenFilter = () => {
    setOpenFilters(!openFilters)
  }

  return (
    <div className='flex max-[800px]:flex-col flex-row w-full items-center justify-between'>
      <div className='dark:text-white text-black text-[20px] w-fit'>مدیریت نظرات</div>
      <div className='flex max-[800px]:flex-col flex-row gap-5 justify-end max-w-[500px] w-full'>
        <div className='flex flex-row max-[800px]:flex-col w-full items-center justify-between'>
          <div className='flex flex-row max-[800px]:flex-col max-[800px]:justify-center max-[800px]:items-center gap-5 justify-end max-w-[500px] w-full'>
            <div onClick={handleOpenFilter} className='bg-[#8CFF45] max-[800px]:py-2 py-2 max-[800px]:w-full text-black w-[90px] items-center cursor-pointer flex justify-center mt-2.5 rounded-[14px]'>
              فیلتر
            </div>
          </div>
          {openFilters && (
            <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
              <CommentFilterItem handleClose={setOpenFilters} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default CommentFilter


"use client"

import React, { FC, useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import BlogSectionList from './BlogSectionList/BlogSectionList';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
import { IBlogs } from '@/core/types/Blogs/IBlogs';

interface IProps {
    BlogData: IBlogs;
}

const ITEMS_PER_PAGE = 6;


const BlogSection: FC<IProps> = ({ BlogData }) => {

    const searchParams = useSearchParams();
    const [search, setSearch] = useState<string>(searchParams.get("search") || "");
    const router = useRouter();
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const totalPages = Math.ceil(BlogData?.totalCount / ITEMS_PER_PAGE);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set('page', page.toString());
            router.push(`?${newParams.toString()}`);
        }
    };


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
        <div className='max-w-full w-full dark:bg-[#303030] bg-[#e9e9e9] rounded-[20px] md:rounded-[40px] mt-4 md:mt-6 p-4 md:p-5 lg:p-6'>
            <div className='mb-8'>
                <div className='relative max-w-md mx-auto'>
                    <input
                        type="text"
                        placeholder='جستجو در مقالات...'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            updateSearchParams("search", e.target.value);
                        }}
                        className='w-full pr-10 pl-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#404040] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                    <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
<div className='flex flex-row-reverse flex-wrap gap-6 justify-center'>
  {BlogData?.data?.length > 0 ? (
    BlogData.data.map((blog) => (
      <BlogSectionList key={blog.id} blog={blog} />
    ))
  ) : (
    <div className="text-center py-10 text-gray-500 dark:text-gray-400">
      مقاله‌ای یافت نشد
    </div>
  )}
</div>
            {totalPages > 1 && (
                <Pagination dir="ltr" className='mt-10'>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => goToPage(currentPage - 1)}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <button
                                    onClick={() => goToPage(page)}
                                    className={`px-3 py-1 cursor-pointer rounded-md w-[37px] h-[37px] text-white ${currentPage === page
                                        ? 'dark:bg-[#8CFF45] bg-[#66b436] text-white dark:!text-black'
                                        : 'dark:bg-[#393939] bg-[#5f5f5f] hover:bg-[#4a4a4a] dark:hover:bg-[#4a4a4a]'
                                        }`}
                                >
                                    {page}
                                </button>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => goToPage(currentPage + 1)}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    )
}

export default BlogSection
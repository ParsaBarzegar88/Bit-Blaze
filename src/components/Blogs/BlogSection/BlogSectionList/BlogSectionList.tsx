import { IBlogItem } from '@/core/types/Blogs/IBlogs'
import Image from 'next/image'
import React, { FC } from 'react'

interface IPorps {
    blog: IBlogItem
}

const BlogSectionList:FC<IPorps> = ({blog}) => {



    const getReadingTime = (seconds: number) => {
        const minutes = Math.ceil(seconds / 60)
        return `${minutes} دقیقه مطالعه`
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date)
    }
    return (
        <div
            key={blog.id}
            className='flex-[1_1_calc(33.333%-1rem)] min-w-[300px] max-w-[400px] bg-white dark:bg-[#404040] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:translate-y-[-4px]'
        >
            <div className='relative w-full h-48 rounded-xl overflow-hidden mb-4'>
                <Image
                    src={"/assets/BlogsImage/blog-t.jpg"}
                    alt={blog.title}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='flex flex-col'>
                <h3 className='text-lg font-bold text-gray-800 dark:text-white mb-3 line-clamp-2'>
                    {blog.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow'>
                    {blog.caption}
                </p>
                <div className='flex flex-col gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4'>
                    <div className='flex items-center gap-1'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{getReadingTime(blog.estimated_reading_time.seconds)}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDate(blog.created_at)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSectionList
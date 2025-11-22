import Image from 'next/image'
import React, { FC } from 'react'
import BlogsBreadcrumb from './BlogsBreadcrumb/HouseBreadcrumb'
import { GetAllBlogs } from '@/core/api/Blogs/Blog';
import BlogSection from './BlogSection/BlogSection';

interface IProps {
  Params: { [key: string]: string }
}

const BlogPage: FC<IProps> = async ({ Params }) => {
  const BlogData = await GetAllBlogs(
    Params?.page || '1',
    Params?.limit || '8',
    Params?.search || '',
  )

  console.log('BlogData received:', BlogData);

  return (
    <div className='max-w-[96%] w-full ml-auto mr-auto m-15'>
      <BlogsBreadcrumb />
      <div className='w-full flex rounded-3xl overflow-hidden mt-7'>
        <div className='relative w-full min-h-72'>
          <Image
            src={"/assets/BlogsImage/blog-t.jpg"}
            alt='مقالات'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
      <BlogSection BlogData={BlogData} />
    </div>
  )
}

export default BlogPage
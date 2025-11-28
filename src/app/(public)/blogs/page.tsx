import BlogPage from '@/components/Blogs/BlogPage';
import { Metadata } from 'next';
import React, { FC } from 'react'
interface IGetSearchParams {
  searchParams?: Promise<{ [key: string]: string }>
}
export const metadata: Metadata = {
  title: "مقالات ما",
};
const BlogsPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getSearchParams = await searchParams
  return (
    <BlogPage Params={getSearchParams} />
  )
}

export default BlogsPage
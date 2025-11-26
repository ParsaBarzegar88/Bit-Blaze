import { GetAllBlogs } from '@/core/api/Blogs/Blog';
import { FC } from 'react';
import BlogManagementList from './BlogManagementList/BlogManagementList';
import BlogManagementPagination from './BlogManagementPagination/BlogManagementPagination';
import BlogManagemntFilter from './BlogManagemntFilter/BlogManagemntFilter';
interface IProps {
    searchParams?: { [key: string]: string }
}
const DashboardBlogManagementPageSection: FC<IProps> = async ({ searchParams }) => {
    const sellerBlogs = await GetAllBlogs(searchParams)

    return (
        <div className='flex flex-col w-full gap-3 px-3 py-3 sm:max-h-full md:max-h-full lg:max-h-full h-full overflow-x-auto custom-scrollbar overflow-y-auto bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
            <div className='w-full mt-2 mb-2 border-t border-gray-300 dark:border-white border-dashed transition-colors duration-300'></div>
            <BlogManagemntFilter />
            <div className='flex flex-col h-full justify-between'>
                <BlogManagementList userSellerBlogInfo={sellerBlogs} searchParams={searchParams} />
                <BlogManagementPagination userSellerBlogInfo={sellerBlogs} />
            </div>
        </div>
    )
}

export default DashboardBlogManagementPageSection

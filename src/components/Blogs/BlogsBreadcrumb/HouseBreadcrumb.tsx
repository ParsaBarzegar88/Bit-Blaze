import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const BlogsBreadcrumb = () => {
    return (
        <Breadcrumb dir='rtl mb-5'>
            <BreadcrumbList>
                <BreadcrumbItem >
                    <BreadcrumbLink className='hover:text-[#8CFF45] text-[#AAAAAA]' href="/">خانه</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
                <BreadcrumbItem>
                    <BreadcrumbPage className='dark:text-[#8CFF45]  text-[#66b436]'>مقالات</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BlogsBreadcrumb
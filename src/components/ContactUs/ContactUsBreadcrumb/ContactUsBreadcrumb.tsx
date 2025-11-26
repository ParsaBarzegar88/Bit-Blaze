import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import MultiArrowSVG from '../ContactSVG/MultiArrowSVG'

const ContactUsBreadcrumb = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Breadcrumb dir='rtl mb-5'>
                <BreadcrumbList>
                    <BreadcrumbItem >
                        <BreadcrumbLink className='hover:text-[#8CFF45] text-[#AAAAAA]' href="/">خانه</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='dark:text-[#8CFF45]  text-[#66b436]'>ارتباط با ما</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='flex flex-row gap-5 items-center'>
                <h5 className='dark:text-[#8CFF45] text-[#7bdb3f] text-[16px] font-[400]'>ارتباط با ما</h5>
                <MultiArrowSVG />
            </div>
        </div>
    )
}

export default ContactUsBreadcrumb
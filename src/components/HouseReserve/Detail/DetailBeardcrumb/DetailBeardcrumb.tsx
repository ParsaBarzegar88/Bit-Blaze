import React, { FC } from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface IProps {
    title: string
}

const DetailBeardcrumb: FC<IProps> = ({title}) => {
    return (
        <Breadcrumb dir='rtl mb-5'>
            <BreadcrumbList>
                <BreadcrumbItem >
                    <BreadcrumbLink className='dark:text-[#AAAAAA] text-black' href="/">خانه</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
                <BreadcrumbItem>
                    <BreadcrumbLink className='dark:text-[#AAAAAA] text-black' href="/house-reserve" >رزرو خانه</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
                <BreadcrumbItem>
                    <BreadcrumbPage className='dark:text-[#8CFF45] text-[#66b436]'>{title}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default DetailBeardcrumb
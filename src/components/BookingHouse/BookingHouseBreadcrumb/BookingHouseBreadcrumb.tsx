import React, { FC } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
interface IProps{
  houseTitle: string
}
const BookingHouseBreadcrumb:FC<IProps> = async ({houseTitle}) => {
  return (
    <Breadcrumb dir='rtl'>
      <BreadcrumbList>
        <BreadcrumbItem >
          <BreadcrumbLink className='dark:hover:text-[#8CFF45] hover:text-[#4f9623] dark:text-[#AAAAAA] text-black' href="/">خانه</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
        <BreadcrumbItem>
          <BreadcrumbLink className='dark:hover:text-[#8CFF45] hover:text-[#4f9623] dark:text-[#AAAAAA] text-black' href="/">رهن و اجاره</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
        <BreadcrumbItem>
          <BreadcrumbPage className='dark:text-[#8CFF45] text-[#4f9623]'>{houseTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BookingHouseBreadcrumb
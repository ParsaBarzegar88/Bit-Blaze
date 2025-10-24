import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cookies } from 'next/headers'
const BookingHouseBreadcrumb = async () => {
    const cookieStore = await cookies()
    const houseData = cookieStore.get('book')?.value
    let houseTitle
    if(houseData){
        houseTitle = JSON.parse(houseData)
    }
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
          <BreadcrumbPage className='dark:text-[#8CFF45] text-[#4f9623]'>{houseTitle?.info.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BookingHouseBreadcrumb
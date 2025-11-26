import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
const MortgageRentBreadcrumb = () => {
  return (
    <Breadcrumb dir='rtl'>
      <BreadcrumbList>
        <BreadcrumbItem >
          <BreadcrumbLink className='dark:hover:text-[#8CFF45] hover:text-[#4f9623] dark:text-[#AAAAAA] text-black' href="/">خانه</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
        <BreadcrumbItem>
          <BreadcrumbPage className='dark:text-[#8CFF45] text-[#4f9623]'>رهن و اجاره</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default MortgageRentBreadcrumb
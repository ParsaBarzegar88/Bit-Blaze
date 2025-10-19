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
          <BreadcrumbLink className='hover:text-[#8CFF45] text-[#AAAAAA]' href="/">خانه</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
        <BreadcrumbItem>
          <BreadcrumbPage className='text-[#8CFF45]'>رهن و اجاره</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default MortgageRentBreadcrumb
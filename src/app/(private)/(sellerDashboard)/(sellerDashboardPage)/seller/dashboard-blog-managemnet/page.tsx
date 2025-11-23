import DashboardBlogManagementPageSection from '@/components/Dashboard/SellerDashboard/DashboardBlogManagementPageSection/DashboardBlogManagementPageSection';
import { Metadata } from 'next';
import React, { FC } from 'react'
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}

export const metadata: Metadata = {
  title: "مقالات",
};
const DashboardBlogManagemnet: FC<IGetSearchParams> = async ({ searchParams }) => {
  const getAllSearchParams = await searchParams
  return (
    <DashboardBlogManagementPageSection searchParams={getAllSearchParams} />
  )
}

export default DashboardBlogManagemnet
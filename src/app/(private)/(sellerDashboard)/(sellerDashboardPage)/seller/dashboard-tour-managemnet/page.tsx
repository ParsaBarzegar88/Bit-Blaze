import DashboardTourPageSection from '@/components/Dashboard/SellerDashboard/DashboardTourPageSection/DashboardTourPageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'



export const metadata: Metadata = {
  title: "مدیریت تور ها",
};
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}

const TourPage:FC<IGetSearchParams> = async ({searchParams}) => {
    const getSearchParams = await searchParams
  return (
   < DashboardTourPageSection searchParams={getSearchParams} />
  )
}

export default TourPage
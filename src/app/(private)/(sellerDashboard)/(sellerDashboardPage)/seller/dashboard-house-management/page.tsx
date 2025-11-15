import DashboardHouseMangementPageSection from '@/components/Dashboard/SellerDashboard/DashboardHouseMangementPageSection/DashboardHouseMangementPageSection';
import { Metadata } from 'next';
import React, { FC } from 'react'
export const metadata: Metadata = {
  title: "علاقه مندی ها",
};
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const DashboardHouseMangementPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
        <DashboardHouseMangementPageSection searchParams={getAllSearchParams}/>
    </>
  )
}

export default DashboardHouseMangementPage
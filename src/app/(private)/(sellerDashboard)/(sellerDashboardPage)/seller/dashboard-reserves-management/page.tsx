import DashboardReserveManagementPageSection from '@/components/Dashboard/SellerDashboard/DashboardReserveManagementPageSection/DashboardReserveManagementPageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: "مدیریت رزرو ها",
};
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const DashboardReservePage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
      <DashboardReserveManagementPageSection searchParams={getAllSearchParams}/>
    </>
  )
}

export default DashboardReservePage
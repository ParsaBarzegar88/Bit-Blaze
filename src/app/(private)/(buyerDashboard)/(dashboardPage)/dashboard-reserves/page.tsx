import DashboardReservePageSection from '@/components/Dashboard/BuyerDashboard/DashboardReservePageSection/DashboardReservePageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: "مدیریت رزرو ها",
};
interface IGetSearchParams {
  searchParams?: Promise<{ [key: string]: string }>
}
const DashboardReservePage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
      <DashboardReservePageSection searchParams={getAllSearchParams}/>
    </>
  )
}

export default DashboardReservePage
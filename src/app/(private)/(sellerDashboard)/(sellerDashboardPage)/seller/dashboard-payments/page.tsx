import DashboardPaymentsPageSection from '@/components/Dashboard/SellerDashboard/DashboardPaymentsPageSection/DashboardPaymentsPageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: "پرداخت ها",
};
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const DashboardPaymentsPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
        <DashboardPaymentsPageSection searchParams={getAllSearchParams}/>
    </>
  )
}

export default DashboardPaymentsPage
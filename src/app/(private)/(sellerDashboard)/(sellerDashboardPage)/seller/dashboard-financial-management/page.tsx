import DashboardPaymentsPageSection from '@/components/Dashboard/SellerDashboard/DashboardPaymentsPageSection/DashboardPaymentsPageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: "مدیریت مالی",
};
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const DashboardFinancialManagementPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
        <DashboardPaymentsPageSection searchParams={getAllSearchParams}/>
    </>
  )
}

export default DashboardFinancialManagementPage
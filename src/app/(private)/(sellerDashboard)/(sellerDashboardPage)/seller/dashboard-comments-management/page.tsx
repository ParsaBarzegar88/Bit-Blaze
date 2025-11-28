import DashboardCommentsManagementPageSection from '@/components/Dashboard/SellerDashboard/DashboardCommentsManagementPageSection/DashboardCommentsManagementPageSection';
import { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: "مدیریت کامنت ها",
};
interface IGetSearchParams {
  searchParams?: Promise<{ [key: string]: string }>
}
const DashboardCommentsManagementPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
      <DashboardCommentsManagementPageSection searchParams={getAllSearchParams}/>
    </>
  )
}

export default DashboardCommentsManagementPage
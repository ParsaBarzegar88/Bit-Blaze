import DashboardNotificationPageSection from '@/components/Dashboard/SellerDashboard/DashboardAnnouncementsPageSection/DashboardAnnouncementsPageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: "اعلان ها",
};
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const DashboardNotificationPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
    return (
        <>
            <DashboardNotificationPageSection searchParams={getAllSearchParams}  />
        </>
    )
}

export default DashboardNotificationPage
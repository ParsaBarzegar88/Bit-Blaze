import DashboardProfilePageSection from '@/components/Dashboard/SellerDashboard/DashboardProfilePageSection/DashboardProfilePageSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "اطلاعات کاربری",
};
const DashboardProfilePage = () => {
  return (
    <>
        <DashboardProfilePageSection/>
    </>
  )
}

export default DashboardProfilePage
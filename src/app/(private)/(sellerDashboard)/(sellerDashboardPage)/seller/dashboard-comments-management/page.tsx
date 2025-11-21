import DashboardCommentsManagementPageSection from '@/components/Dashboard/SellerDashboard/DashboardCommentsManagementPageSection/DashboardCommentsManagementPageSection';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "مدیریت کامنت ها",
};
const DashboardCommentsManagementPage = () => {
  return (
    <>
      <DashboardCommentsManagementPageSection/>
    </>
  )
}

export default DashboardCommentsManagementPage
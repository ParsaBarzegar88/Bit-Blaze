import DashboardPageSection from '@/components/Dashboard/BuyerDashboard/DashboardPageSection/DashboardPageSection';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "داشبورد",
};
const DashboardPage = () => {
  return (
    <>
      <DashboardPageSection />
    </>
  )
}

export default DashboardPage
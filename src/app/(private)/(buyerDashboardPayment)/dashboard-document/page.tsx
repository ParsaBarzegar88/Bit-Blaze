import DashboardDocumentPageSection from '@/components/Dashboard/BuyerDashboard/DashboardDocumentPageSection/DashboardDocumentPageSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "قولنامه",
};
const DashboardDocumentPage = () => {
  return (
    <>
        <DashboardDocumentPageSection/>
    </>
  )
}

export default DashboardDocumentPage
import DashboardChatsPageSection from '@/components/Dashboard/SellerDashboard/DashboardChatsPageSection/DashboardChatsPageSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "گفتگو ها",
};
const DashboardChatsPage = () => {
  return (
    <>
        <DashboardChatsPageSection/>
    </>
  )
}

export default DashboardChatsPage
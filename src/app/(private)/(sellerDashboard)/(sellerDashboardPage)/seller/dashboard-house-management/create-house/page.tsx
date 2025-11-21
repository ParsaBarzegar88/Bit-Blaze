import CreateHouse from '@/components/Dashboard/SellerDashboard/DashboardHouseMangementPageSection/CreateHouse/CreateHouse'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "ساخت ملک",
};
const CreateHousePage = () => {
    return (
        <CreateHouse />
    )
}

export default CreateHousePage
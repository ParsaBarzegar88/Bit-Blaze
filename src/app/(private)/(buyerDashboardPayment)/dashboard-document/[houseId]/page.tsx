import DashboardDocumentPageSection from '@/components/Dashboard/BuyerDashboard/DashboardDocumentPageSection/DashboardDocumentPageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: "قولنامه",
};
interface IProps{
  params: {
        houseId:string;
    }
}
const DashboardDocumentPage:FC<IProps> = ({params}) => {
  return (
    <>
        <DashboardDocumentPageSection houseId={params.houseId}/>
    </>
  )
}

export default DashboardDocumentPage
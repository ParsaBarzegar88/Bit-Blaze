import DashboardAddPaymentPageSection from '@/components/Dashboard/BuyerDashboard/DashboardAddPaymentPageSection/DashboardAddPaymentPageSection';
import { Metadata } from 'next';
import React, { FC } from 'react'

export const metadata: Metadata = {
  title: "پرداخت",
};
interface IProps{
  params: {
        bookingId:string;
    }
}
const DashboardPaymentPage:FC<IProps> = ({params}) => {
  return (
    <>
      <DashboardAddPaymentPageSection bookingId={params.bookingId}/>
    </>
  )
}

export default DashboardPaymentPage
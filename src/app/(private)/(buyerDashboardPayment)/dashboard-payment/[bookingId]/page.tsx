import DashboardAddPaymentPageSection from '@/components/Dashboard/BuyerDashboard/DashboardAddPaymentPageSection/DashboardAddPaymentPageSection';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "پرداخت",
};
export default async function DashboardPaymentPage({
  params,
}: {
  params: Promise<{ bookingId: string }>
}) {
  const { bookingId } = await params
  return (
    <>
      <DashboardAddPaymentPageSection bookingId={bookingId}/>
    </>
  )
}
import DashboardDocumentPageSection from '@/components/Dashboard/BuyerDashboard/DashboardDocumentPageSection/DashboardDocumentPageSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "قولنامه",
};
export default async function DashboardDocumentPage({
  params,
}: {
  params: Promise<{ houseId: string }>
}) {
  const { houseId } = await params
  return <DashboardDocumentPageSection houseId={houseId} />
}
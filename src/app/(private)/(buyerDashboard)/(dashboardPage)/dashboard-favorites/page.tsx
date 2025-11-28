import DashboardFavoritesPageSection from '@/components/Dashboard/BuyerDashboard/DashboardFavoritesPageSection/DashboardFavoritesPageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'
export const metadata: Metadata = {
  title: "علاقه مندی ها",
};
interface IGetSearchParams {
  searchParams?: Promise<{ [key: string]: string }>
}
const DashboardFavoritesPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
        <DashboardFavoritesPageSection searchParams={getAllSearchParams}/>
    </>
  )
}

export default DashboardFavoritesPage
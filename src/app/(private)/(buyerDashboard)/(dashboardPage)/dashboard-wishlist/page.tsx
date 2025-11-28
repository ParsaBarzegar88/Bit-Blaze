import DashboardWishListPageSection from '@/components/Dashboard/BuyerDashboard/DashboardWishListPageSection/DashboardWishListPageSection'
import { Metadata } from 'next';
import React, { FC } from 'react'
export const metadata: Metadata = {
  title: "علاقه مندی ها",
};
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const WishListPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const GetsearchParams = await searchParams
    return (
    <DashboardWishListPageSection searchParams={GetsearchParams} />
)
}

export default WishListPage
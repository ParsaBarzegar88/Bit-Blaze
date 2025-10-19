import HouseReserve from '@/components/HouseReserve/HouseReserve'
import { Metadata } from 'next';
import React, { FC } from 'react'
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
export const metadata: Metadata = {
  title: "رزرو خانه",
};
const HouseReservePage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <HouseReserve sortingData={getAllSearchParams} />
  )
}

export default HouseReservePage
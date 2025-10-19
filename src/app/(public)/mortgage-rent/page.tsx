import MortgageRent from '@/components/MortgageRent/MortgageRent';
import { Metadata } from 'next';
import React, { FC } from 'react'
export const metadata: Metadata = {
  title: "رهن و اجاره",
};
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const MortgageRentPage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
      <MortgageRent searchParam={getAllSearchParams}/>
    </>
  )
}

export default MortgageRentPage
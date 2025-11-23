import HouseCompare from '@/components/HouseCompare/HouseCompare'
import { Metadata } from 'next'
import React, { FC } from 'react'

export const metadata:Metadata = {
  title:"مقایسه خانه ها"
}

interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const HouseComparePage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <>
        <HouseCompare houseIds={getAllSearchParams}/>
    </>
  )
}

export default HouseComparePage
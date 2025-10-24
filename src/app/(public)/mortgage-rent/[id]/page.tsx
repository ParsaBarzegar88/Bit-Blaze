import MortgageRentDetailSection from '@/components/MortgageRent/MortgageRentDetailSection/MortgageRentDetailSection';
import { SendCommentFetch } from '@/core/api/MortgageRent/MortgageRentDetail/SendComments';
import { Metadata } from 'next';
import React, { FC } from 'react'
export const metadata: Metadata = {
  title: "رهن و اجاره",
};

interface IProps{
    params: {
        id: string;
    };
}
export interface ISendCommentsResponse {
  error?: string;
  success?: boolean
}
const page:FC<IProps> = ({params}) => {
  return (
    <>
      <MortgageRentDetailSection houseId={params.id} action={SendCommentFetch} />
    </>
  )
}

export default page
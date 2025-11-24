import HouseReserveDetail from '@/components/HouseReserve/Detail/Detail'
import React, { FC } from 'react'
import { SendCommentFetch } from '@/core/api/HouseReserve/Detail/SendComments';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "رزرو خانه",
};
interface IProps {
    params: {
        id: string
    }
}
export interface ISendCommentsResponse {
  error?: string;
  success?: boolean
}
const HouseReserveDetailPage: FC<IProps> = ({params}) => {

  return (
    <div>
       <HouseReserveDetail DetailId={params.id} action={SendCommentFetch} />
    </div>
  )
}

export default HouseReserveDetailPage
import React, { FC } from 'react'
import PaymentAddCart from './PaymentAddCart/PaymentAddCart';
import { getReserveById } from '@/core/api/Dashboard/Reserve';
import { getHousesReserveDetail } from '@/core/api/HouseReserve/Detail/Detail'

interface IProps {
  bookingId: string;
}
const DashboardAddPaymentPageSection: FC<IProps> = async ({ bookingId }) => {
  const getReserveInfo = await getReserveById(bookingId)
  const { booking } = getReserveInfo;
  const houseDetail = await getHousesReserveDetail(String(booking.houseId));
  const enrichedData = {
    ...booking,
    houseDetail,
  };
  return (
    <div className='h-full w-full'>
      <div className='h-[80px] bg-[#0076DB] w-full'></div>
      <PaymentAddCart houseInfo={enrichedData} />
    </div>
  )
}

export default DashboardAddPaymentPageSection
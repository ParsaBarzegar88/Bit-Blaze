import React, { FC } from 'react'
import HotelSection from './HotelSection/HotelSection'
import { IBookingData } from '@/core/types/bookingHouse/IBookingHouse'
import PassengerInfo from './PassengerInfo/PassengerInfo';
import SendTicket from './SendTicket/SendTicket';

interface IProps{
  houseData:IBookingData;
}
const StepOne:FC<IProps> = ({houseData}) => {
  return (
    <div className='flex flex-col gap-5'>
      <HotelSection houseData={houseData}/>
      <PassengerInfo/>
      <SendTicket/>
    </div>
  )
}

export default StepOne
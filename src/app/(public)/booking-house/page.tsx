import BookingHouse from '@/components/BookingHouse/BookingHouse'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "رزرو خانه",
};
const page = () => {
  return (
    <>
      <BookingHouse/>
    </>
  )
}

export default page
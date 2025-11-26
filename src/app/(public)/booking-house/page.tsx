import BookingHouse from '@/components/BookingHouse/BookingHouse'
import { Metadata } from 'next';
import { CookiesProvider } from 'next-client-cookies/server';
import React from 'react'

export const metadata: Metadata = {
  title: "رزرو خانه",
};
const page = () => {
  return (
    <CookiesProvider>
      <BookingHouse/>
    </CookiesProvider>
  )
}

export default page
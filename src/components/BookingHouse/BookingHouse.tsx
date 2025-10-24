import React from 'react'
import MultiSteps from './MultiSteps/MultiSteps'
import BookingHouseBreadcrumb from './BookingHouseBreadcrumb/BookingHouseBreadcrumb'

const BookingHouse = () => {
  return (
    <div className='max-w-[96%] w-full mx-auto mt-10'>
      <BookingHouseBreadcrumb />
      <MultiSteps/>
    </div>
  )
}

export default BookingHouse
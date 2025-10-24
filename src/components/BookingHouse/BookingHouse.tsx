import React from 'react'
import MultiSteps from './MultiSteps/MultiSteps'
import BookingHouseBreadcrumb from './BookingHouseBreadcrumb/BookingHouseBreadcrumb'
import { cookies } from 'next/headers'

const BookingHouse = async () => {
  const cookieStore = await cookies()
    const house = cookieStore.get('book')?.value
    let houseData
    if(house){
        houseData = JSON.parse(house)
    }
  return (
    <div className='max-w-[96%] w-full mx-auto mt-10'>
      <BookingHouseBreadcrumb houseTitle={houseData.info.title} />
      <MultiSteps houseData={houseData}/>
    </div>
  )
}

export default BookingHouse
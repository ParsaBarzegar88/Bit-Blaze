import React from 'react'
import DreamRent from './DreamRent/DreamRent'
import RentMortgage from './RentMortgage/RentMortgage'
import { getLocations } from '@/core/api/LandingPage/locations'

const RentBuildingSection = async () => {
  const locationsData = await getLocations()
  return (
    <div className='mt-10 w-full bg-[#CCCCCC] dark:bg-[#2D2D2D] rounded-br-[64px] rounded-bl-[64px]'>
      <DreamRent locations={locationsData}/>
      <RentMortgage/>
    </div>
  )
}

export default RentBuildingSection
import React from 'react'
import BuySellBuilding from './BuySellBuilding/BuySellBuilding'
import NewBuilding from './NewBuilding/NewBuilding'
import { getHousesByRate } from '@/core/api/LandingPage/houses'
import { getLocations } from '@/core/api/LandingPage/locations'

const BuySellNewBuilding = async () => {
  const getHouse = await getHousesByRate()
  const getLocation = await getLocations()
  return (
    <div className='flex flex-col -mt-8 md:-mt-16 w-full m-auto justify-center items-center gap-8 md:gap-5 relative bg-[#CCCCCC] dark:bg-[#2D2D2D] rounded-bl-[32px] md:rounded-bl-[64px] rounded-br-[32px] md:rounded-br-[64px]'>
        <BuySellBuilding house={getHouse}/>
        <NewBuilding locations={getLocation}/>
    </div>
  )
}

export default BuySellNewBuilding
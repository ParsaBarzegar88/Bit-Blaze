import { getHousesReserve } from '@/core/api/HouseReserve/House'
import { FC } from 'react'
import FilterHouse from './FilterHouse/FilterHouse'
import HouseBreadcrumb from './HouseBreadcrumb/HouseBreadcrumb'
import HouseReserveSection from './HouseReserveSection/HouseReserveSection'

interface IProps {
  sortingData?: { [key: string]: string }
}



const HouseReserve: FC<IProps> = async ({ sortingData }) => {



  const HouseData = await getHousesReserve(
    sortingData?.search,
    sortingData?.sort,
    sortingData?.maxPrice,
    sortingData?.minPrice,
    sortingData?.location,
  )


  return (
    <div className='max-w-[96%] w-full ml-auto mr-auto m-15'>
      <HouseBreadcrumb />
      <FilterHouse totalCount={HouseData} />
      <HouseReserveSection houseDetail={HouseData} />
    </div>
  )
}

export default HouseReserve
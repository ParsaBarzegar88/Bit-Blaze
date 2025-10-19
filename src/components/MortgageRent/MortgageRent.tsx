import React, { FC } from 'react'
import MortgageRentBreadcrumb from './MortgageRentBreadcrumb/MortgageRentBreadcrumb'
import MortgageRentFilterFirst from './MortgageRentFilter/MortgageRentFilterFirst'
import MortgageRentFilterSecond from './MortgageRentFilter/MortgageRentFilterSecond'
import MortgageRentSection from './MortgageRentSection/MortgageRentSection'
import { getMortgageRentHouses } from '@/core/api/MortgageRent/houses'
interface IProps {
  searchParam?: { [key: string]: string }
}
const MortgageRent:FC<IProps> = async ({searchParam = {}}) => {
    
    const getHouses = await getMortgageRentHouses(searchParam)
    return (
        <div className='flex flex-col max-w-[97%] w-full mx-auto mt-10'>
            <MortgageRentBreadcrumb />
            <MortgageRentFilterFirst totalCount={getHouses} />
            <MortgageRentFilterSecond />
            <div className='mt-8 bg-[#4E4E4E] w-full h-[2px]'></div>
            <MortgageRentSection houses={getHouses} />
        </div>
    )
}

export default MortgageRent
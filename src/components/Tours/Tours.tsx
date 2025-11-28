import React, { FC } from 'react'
import ToursBreadcrumb from './ToursBreadcrumb/ToursBreadcrumb'
import TourSection from './TourSection/TourSection'
import { GetTourList } from '@/core/api/Tours/Tours'

interface IProps {
  searchParams?: { [key: string]: string }
}

const ToursPageSection: FC<IProps> = async ({ searchParams }) => {
    const TourData = await GetTourList(searchParams)
    
    return (
        <div className='max-w-[96%] w-full ml-auto mr-auto m-15'>
            <ToursBreadcrumb />
            <TourSection TourData={TourData} />
        </div>
    )
}

export default ToursPageSection
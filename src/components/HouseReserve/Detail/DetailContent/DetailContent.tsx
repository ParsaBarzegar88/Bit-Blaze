import React, { FC } from 'react'
import ReserveHouse from './Reserve/Reserve'
import { IHousesDetail } from '@/core/types/HouseReserveDetail/IHousesDetail'

interface IProps {
    Info: IHousesDetail
}

const DetailContent: FC<IProps> = ({ Info }) => {
    return (
        <div className='max-w-[100%] w-full flex flex-col md:flex-row-reverse gap-6 justify-between mt-10'>
            <div className='w-full md:w-[40%] lg:w-[20%]'>
                <ReserveHouse info={Info} />
            </div>
            <div className='w-full md:w-[60%] lg:w-[70%]'>
                asdasdasdasdadsdadd
            </div>
        </div>
    )
}

export default DetailContent
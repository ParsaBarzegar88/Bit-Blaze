import HouseReserveDetail from '@/components/HouseReserve/Detail/Detail'
import React, { FC } from 'react'

interface IProps {
    params: {
        id: string
    }
}

const HouseReserveDetailPage: FC<IProps> = ({params}) => {

    console.log(params)

  return (
    <div>
       <HouseReserveDetail DetailId={params.id} />
    </div>
  )
}

export default HouseReserveDetailPage
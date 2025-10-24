import React, { FC } from 'react'
import DetailBeardcrumb from './DetailBeardcrumb/DetailBeardcrumb'
import TopOfDetail from './TopOfDetail/TopOfDetail';
import { getHousesForAdvertisement, getHousesReserveDetail } from '@/core/api/HouseReserve/Detail/Detail';
import DetailImage from './DetailImage/DetailImage';
import ReserveHouse from './DetailContent/Reserve/Reserve';
import DetailContent from './DetailContent/DetailContent';
import RelatedHouse from './DetailContent/RelatedHouse/RelatedHouse';

interface IProps {
    DetailId: string;
}

const HouseReserveDetail: FC<IProps> = async ({DetailId}) => {
    const Information = await getHousesReserveDetail(DetailId)
    const housesList = await getHousesForAdvertisement()
  return (
    <div className='max-w-[96%] w-full ml-auto mr-auto m-15'>
        <DetailBeardcrumb title={Information.title} />
        <TopOfDetail Info={Information} />
        <DetailImage Info={Information} />
        <DetailContent Info={Information} />
        <RelatedHouse housesList={housesList} />
    </div>
  )
}

export default HouseReserveDetail
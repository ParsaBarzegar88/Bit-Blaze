import React, { FC } from 'react'
import DetailBeardcrumb from './DetailBeardcrumb/DetailBeardcrumb'
import TopOfDetail from './TopOfDetail/TopOfDetail';
import { get3DPicture, getHousesComments, getHousesForAdvertisement, getHousesReserveDetail } from '@/core/api/HouseReserve/Detail/Detail';
import DetailImage from './DetailImage/DetailImage';
import DetailContent from './DetailContent/DetailContent';
import RelatedHouse from './DetailContent/RelatedHouse/RelatedHouse';
import { ISendCommentsResponse } from '@/app/(public)/house-reserve/[id]/page';

interface IProps {
  DetailId: string;
  action: (prevState: ISendCommentsResponse,
    formData: FormData
  ) => Promise<ISendCommentsResponse>;
}

const HouseReserveDetail: FC<IProps> = async ({ DetailId, action }) => {
  const Information = await getHousesReserveDetail(DetailId)
  const housesList = await getHousesForAdvertisement()
  const getHouseComment = await getHousesComments(Number(DetailId))
  const get3DImage = await get3DPicture(DetailId)
  return (
    <div className='max-w-[96%] w-full ml-auto mr-auto m-15'>
      <DetailBeardcrumb title={Information.title} />
      <TopOfDetail Info={Information} />
      <DetailImage Info={Information} get3DPic={get3DImage} />
      <DetailContent Info={Information} housesComments={getHouseComment}  action={action} />
      <RelatedHouse housesList={housesList} />
    </div>
  )
}

export default HouseReserveDetail
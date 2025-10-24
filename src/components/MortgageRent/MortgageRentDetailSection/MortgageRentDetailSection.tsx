import { getHousesComments, getHousesForAdvertisement, getHousesReserveDetail } from '@/core/api/MortgageRent/MortgageRentDetail/MortgageRentDetail';
import React, { FC } from 'react'
import MortgageRentDetailBreadcrumb from './MortgageRentDetailBreadcrumb/MortgageRentDetailBreadcrumb';
import MortgageRentDetail from './MortgageRentDetail/MortgageRentDetail';
import { ISendCommentsResponse } from '@/app/(public)/mortgage-rent/[id]/page';
interface IProps {
    houseId: string;
    action: (prevState: ISendCommentsResponse,
        formData: FormData
    ) => Promise<ISendCommentsResponse>;
}
const MortgageRentDetailSection: FC<IProps> = async ({ houseId , action}) => {
    const getHouseDetail = await getHousesReserveDetail(houseId)
    const getHousesList = await getHousesForAdvertisement()
    const getHouseComment = await getHousesComments(Number(houseId))
    return (
        <div className='flex flex-col max-w-[97%] w-full mx-auto mt-10'>
            <MortgageRentDetailBreadcrumb houseTitle={getHouseDetail.title} />
            <MortgageRentDetail houseData={getHouseDetail} housesList={getHousesList} housesComments={getHouseComment} action={action}/>
        </div>
    )
}

export default MortgageRentDetailSection
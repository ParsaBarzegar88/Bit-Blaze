import React, { FC } from 'react'
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail'
import { IHouses } from '@/core/types/MortgageRent/IHouses';
import MortgageRentDetailImage from './MortgageRentDetailImage/MortgageRentDetailImage';
import MortgageRentDetailTags from './MortgageRentDetailTags/MortgageRentDetailTags';
import MortgageRentDetailTotal from './MortgageRentDetailTotal/MortgageRentDetailTotal';
import MortgageRentDetailTabs from './MortgageRentDetailTabs/MortgageRentDetailTabs';
import MortgageRentDetailAdvertisement from './MortgageRentDetailAdvertisement/MortgageRentDetailAdvertisement';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IComments } from '@/core/types/MortgageRent/IComments';
import { ISendCommentsResponse } from '@/app/(public)/mortgage-rent/[id]/page';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'
interface IProps {
    houseData: IHousesDetail;
    housesList: IHouses;
    housesComments: IComments;
    action: (prevState: ISendCommentsResponse,
        formData: FormData
    ) => Promise<ISendCommentsResponse>;
}
const MortgageRentDetail: FC<IProps> = async ({ houseData, housesList, housesComments, action }) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    let userId: string | undefined;
    if (accessToken) {
        const findUserId = jwt.decode(accessToken) as {id:string};
        userId = findUserId.id;
    } else {
        console.log('No access token found');
    }
    return (
        <div className='flex flex-col mb-10 mt-8 w-full px-4 sm:px-6 lg:px-0'>
            <MortgageRentDetailImage houseData={houseData} />
            <MortgageRentDetailTags houseData={houseData} />
            <MortgageRentDetailTotal houseData={houseData} userId={userId} />
            <MortgageRentDetailTabs houseData={houseData} housesComments={housesComments} action={action} userId={userId} />
            <MortgageRentDetailAdvertisement housesList={housesList} />
        </div>
    )
}

export default MortgageRentDetail
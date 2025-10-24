import React, { FC } from 'react'
import ReserveHouse from './Reserve/Reserve'
import { IHousesDetail } from '@/core/types/HouseReserveDetail/IHousesDetail'
import HouseReserveDetailTabs from './DetailTabs/DetailTabs'
import { ISendCommentsResponse } from '@/app/(public)/house-reserve/[id]/page';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'
import { IComments } from '@/core/types/HouseReserveDetail/IComments';
interface IProps {
    Info: IHousesDetail;
    housesComments: IComments;
    action: (prevState: ISendCommentsResponse,
        formData: FormData
    ) => Promise<ISendCommentsResponse>;
}

const DetailContent: FC<IProps> = async ({ Info,housesComments , action }) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    let userId: string | undefined;
    if (accessToken) {
        const findUserId = jwt.decode(accessToken) as { id: string };
        userId = findUserId.id;
    } else {
        console.log('No access token found');
    }
    return (
        <div className='max-w-[100%] w-full flex flex-col-reverse lg:flex-row-reverse justify-between mt-10'>
            <div className='w-full lg:w-[20%]'>
                <ReserveHouse info={Info}/>
            </div>
            <div className='w-full lg:w-[75%]'>
                <HouseReserveDetailTabs houseData={Info} housesComments={housesComments} action={action} userId={userId} />
            </div>
        </div>
    )
}

export default DetailContent
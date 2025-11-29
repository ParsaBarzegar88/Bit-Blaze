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
        <div className='max-w-[100%] max-[1080px]:flex-col-reverse max-[1080px]:gap-3  w-full flex flex-row-reverse justify-between mt-10'>
            <div className='w-[20%] max-[1080px]:w-full'>
                <ReserveHouse info={Info}/>
            </div>
            <div className='w-[75%] max-[1080px]:w-full'>
                <HouseReserveDetailTabs houseData={Info} housesComments={housesComments} action={action} userId={userId} />
            </div>
        </div>
    )
}

export default DetailContent
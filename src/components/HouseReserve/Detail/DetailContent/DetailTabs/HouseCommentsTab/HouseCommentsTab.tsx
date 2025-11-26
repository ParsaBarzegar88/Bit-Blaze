import { IComments } from '@/core/types/MortgageRent/IComments'
import React, { FC } from 'react'
import FormComment from './FormComments/FormComment';
import { ISendCommentsResponse } from '@/app/(public)/mortgage-rent/[id]/page';
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';
import HouseCommentsSection from './HouseCommentsSection/HouseCommentsSection';


interface IProps {
  housesComments: IComments;
  action: (prevState: ISendCommentsResponse,
    formData: FormData
  ) => Promise<ISendCommentsResponse>;
  houseData: IHousesDetail;
  userId:string | undefined;
}

const HouseCommentsTab: FC<IProps> = ({ housesComments, action , houseData , userId}) => {

  return (
    <div className='flex flex-col gap-10'>
      <FormComment action={action} houseData={houseData} userId={userId} housesComments={housesComments}/>
      <div className='bg-gradient-to-r from-transparent via-[#565656] dark:via-[#565656] to-transparent h-0.5 w-full my-8'></div>
      <HouseCommentsSection housesCommentsList={housesComments}/>
    </div>
  )
}

export default HouseCommentsTab
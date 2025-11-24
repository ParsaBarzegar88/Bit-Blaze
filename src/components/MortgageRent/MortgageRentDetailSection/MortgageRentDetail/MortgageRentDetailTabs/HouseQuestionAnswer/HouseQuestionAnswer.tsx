import React, { FC } from 'react'
import SendQuestion from './SendQuestion/SendQuestion'
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';
import QuestionList from './QuestionList/QuestionList';

interface IProps{
    houseData: IHousesDetail;
}
const HouseQuestionAnswer:FC<IProps> = ({houseData}) => {
  return (
    <div className='flex flex-col w-full max-w-[90%] mx-auto'>
        <SendQuestion houseId={houseData.id}/>
        <QuestionList houseId={houseData.id}/>
    </div>
  )
}

export default HouseQuestionAnswer
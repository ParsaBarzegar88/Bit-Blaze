import React, { FC } from 'react'
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';
import { FaStar } from 'react-icons/fa6';
interface IProps{
    houseData:IHousesDetail
}
const MortgageRentDetailTags:FC<IProps> = ({houseData}) => {
    return (
        <div className='flex flex-row flex-wrap sm:justify-start justify-center items-center h-fit gap-3 mt-5'>
            {houseData.tags.map((tags, index) => (
                <div key={index} className=':bg-[#393939] rounded-[12px] w-fit h-[36px] pr-5 pl-5 flex justify-center items-center border dark:border-[#565656] border-[#afafaf] dark:text-[#AAAAAA] text-black'>
                    # {tags}
                </div>
            ))}
            <div className='w-0.5 h-6 sm:flex hidden bg-[#AAAAAA]'></div>
            <div className='flex flex-row text-[#FFFFFF] text-[14px] font-[500] pr-3 pl-3 items-center justify-center gap-1 rounded-[12px] bg-[#7569FF] shadow-[0px_8px_16px_rgba(115,103,255,0.2)] w-fit h-[36px]'>
                <FaStar />
                {houseData.rate !== null ? houseData.rate : "0"} ستاره
            </div>
        </div>
    )
}

export default MortgageRentDetailTags
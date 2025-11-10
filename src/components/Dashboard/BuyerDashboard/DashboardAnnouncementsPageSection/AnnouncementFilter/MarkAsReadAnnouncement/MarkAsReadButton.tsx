import React, { Dispatch, FC, SetStateAction } from 'react'

interface IProps{
    closeMarkAsRead: Dispatch<SetStateAction<boolean>>;
}
const MarkAsReadButton:FC<IProps> = ({closeMarkAsRead}) => {
    return (
        <>
            <span onClick={() => closeMarkAsRead(false)} className='text-black text-[14px] font-[400] cursor-pointer bg-[#F79000] px-4 py-2 rounded-[12px] '>موافقت</span>
        </>
    )
}

export default MarkAsReadButton
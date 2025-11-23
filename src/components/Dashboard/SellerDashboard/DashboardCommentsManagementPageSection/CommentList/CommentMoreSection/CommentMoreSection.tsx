'use client'
import { Dispatch, FC, SetStateAction } from 'react';
import { IoEyeOutline } from "react-icons/io5";

interface IProps {
    setModal:Dispatch<SetStateAction<boolean>>;
    modal:boolean
}
const CommentMoreSection: FC<IProps> = ({ setModal ,  modal}) => {
    const handleOpenModal = () => {
        setModal(!modal)
    }
    return (
        <div className='absolute -top-6 left-3 bg-white w-max dark:bg-[#363636] rounded-[12px] z-[900] min-w-full px-1 py-1 border dark:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.27)] flex flex-col'>
            <div onClick={handleOpenModal} className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors">
                <IoEyeOutline size={20} />
                <div className='dark:text-white text-black text-[14px] font-[400]'>مشاهده نظرات</div>
            </div>
        </div>

    )
}

export default CommentMoreSection
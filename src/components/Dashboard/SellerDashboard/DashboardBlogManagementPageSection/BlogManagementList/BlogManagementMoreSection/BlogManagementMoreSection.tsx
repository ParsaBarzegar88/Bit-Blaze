'use client'
import { FC, useState } from 'react';
import { LiaTimesCircle } from "react-icons/lia";
import { MdEdit } from "react-icons/md";
import LogoutSection from './LogoutSection/LogoutSection';
import UpdateBlog from './UpdateBlog/UpdateBlog';

interface IProps {
    BlogId: string;
}

const BlogManagementMoreSection: FC<IProps> = ({ BlogId }) => {
    const [isSure, setIsSure] = useState(false)
    const [modal, setModal] = useState(false)
    const handleOpenLogout = () => {
        setIsSure(!isSure)
    }
    const handleOpenModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className='bg-white w-48 dark:bg-[#363636] rounded-[12px] px-1.5 py-1.5 border dark:shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0_2px_5px_rgba(0,0,0,0.27)] flex flex-col'>
                <div
                    onClick={handleOpenModal}
                    className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors"
                >
                    <MdEdit size={20} />
                    <span className='dark:text-white text-black text-[14px] font-[400]'>ویرایش ملک</span>
                </div>
                <div
                    onClick={handleOpenLogout}
                    className="flex flex-row gap-2 items-center py-1 hover:bg-[#E0E0E0] dark:hover:bg-[#a08cff] px-2 w-full rounded-[8px] cursor-pointer transition-colors"
                >
                    <LiaTimesCircle size={20} />
                    <span className='dark:text-white text-black text-[14px] font-[400]'>حذف</span>
                </div>
            </div>
            {isSure === true ? (
                <div className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'>
                    <LogoutSection onClose={setIsSure} Id={BlogId} />
                </div>
            ) : (
                ""
            )}
            {modal === true ? (
                <div className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'>
                    <UpdateBlog onClose={() => setModal(false)} Id={BlogId} />
                </div>
            ) : (
                ""
            )}
        </>

    )
}

export default BlogManagementMoreSection
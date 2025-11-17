import { getSellerInfo } from '@/core/api/MortgageRent/MortgageRentDetail/MortgageRentDetail';
import { IUserDetail } from '@/core/types/LandingPage/IUserDetail';
import { IHousesDetail } from '@/core/types/MortgageRent/IHousesDetail';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoIosSend } from "react-icons/io";

interface IProps{
    onClose: Dispatch<SetStateAction<boolean>>;
    sellerInfo: IHousesDetail;
}
const MortgageRentChat:FC<IProps> = ({onClose , sellerInfo}) => {
    const [SellerData, setSellerData] = useState<IUserDetail>()
    const getUserData = async () => {
        const getSellerDetail = await getSellerInfo(sellerInfo.sellerId)
        setSellerData(getSellerDetail)
    }
    useEffect(() => {
        getUserData()
    }, [])
    
    return (
        <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] flex flex-col items-center 
      justify-center mx-auto dark:bg-[#363636]'>
            <div className="flex flex-row justify-between w-full items-center bg-[#2273ec] p-2">
                <div className='flex flex-row gap-1.5 items-center'>
                    {SellerData?.user.profilePicture ? (
                        <div  className='w-[50px] h-[50px] bg-[#363636] rounded-full'>
                            <Image src={SellerData?.user.profilePicture} className='object-contain w-full h-full rounded-full' width={200} height={150} alt='profile pic'/>
                        </div>
                    ):(
                        <div className='w-[80px] h-[80px] bg-[#363636]'></div>
                    )}
                    <div className='flex flex-col justify-between'>
                        <div>{SellerData?.user.firstName + " " + SellerData?.user.lastName}</div>
                        <div>{SellerData?.user.email}</div>
                    </div>
                </div>
                <div onClick={() => onClose(false)} className="flex flex-row gap-1.5 cursor-pointer items-center border border-[#ff0000] text-[#ff0000] py-1 px-2 rounded-[20px]">
                    <FaTimes />
                    <span
                        className="cursor-pointer"
                    >
                        بستن
                    </span>
                </div>
            </div>
            <div className='flex flex-col min-h-[500px] p-2 max-h-[1000px] h-full dark:bg-[#363636] bg-white overflow-y-auto custom-scrollbar w-full'>
                <div className='flex flex-col bg-[#2273ec] w-fit h-fit p-2 rounded-b-[5px] rounded-tl-[5px]'>
                        sdaasdas
                </div>
            </div>
            <div className='flex flex-row w-full gap-1.5 mt-2 mb-2 justify-center border-t border-gray-300 pt-2'>
                <input type="text" placeholder='متن خود را وارد کنید ...' className='w-[90%] outline-none border-none' />
                <IoIosSend size={25} className='bg-[#2273ec] p-2 w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center'/>
            </div>
        </div>
    )
}

export default MortgageRentChat

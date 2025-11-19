import { IAllChats } from '@/core/types/Dashboard/IChats'
import { formatToPersianDate } from '@/utils/date'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface IProps{
  userChatList:IAllChats[] | undefined;
  setRoomId: Dispatch<SetStateAction<string | number>>;
}
const ChatsList:FC<IProps> = ({userChatList , setRoomId}) => {
  return (
    <div className='w-fit flex flex-col border-l'>
      {userChatList ? userChatList.map((item , index) => (
        <div onClick={() => setRoomId(item.room)} key={index} className='flex flex-row w-fit min-w-[300px] hover:text-black hover:bg-blue-300 px-2 cursor-pointer py-3 border-b'>
          <span className='w-full max-w-[100px] truncate text-right'>{item.message}</span>
          <span className='w-full items-end text-end text-[15px]'>{formatToPersianDate(item.updatedAt)}</span>
        </div>
      )) : (
        <div className='w-full h-full px-2 py-2 flex justify-center text-center items-center'>گفتگویی وجود ندارد</div>
      )}
    </div>
  )
}

export default ChatsList
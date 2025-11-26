import { IAllChats } from '@/core/types/Dashboard/IChats'
import { formatToPersianDate } from '@/utils/date'
import React, { Dispatch, FC, SetStateAction } from 'react'

interface IProps {
  setOpenChat: Dispatch<SetStateAction<boolean>>;
  userChatList: IAllChats[] | undefined;
  setRoomId: Dispatch<SetStateAction<string | number>>;
  RoomId: string | number;
  openChat: boolean;
}
const ChatsList: FC<IProps> = ({ setOpenChat, userChatList, setRoomId, RoomId, openChat }) => {
  const handleChatOnclick = (room: string) => {
    setRoomId(room)
    setOpenChat(true)
  }
  return (
    <div className={`${openChat === true ? "max-[750px]:w-0" : "max-[750px]:w-full max-[750px]:border-none w-fit"} transition duration-300 flex flex-col border-l`}>
      {userChatList ? userChatList.map((item, index) => (
        <div onClick={() => handleChatOnclick(item.room)} key={index} className={`flex flex-row w-fit min-w-[300px] ${openChat === true ? "max-[750px]:hidden" : "flex max-[750px]:w-full"} transition duration-300 hover:text-black hover:bg-blue-300 px-2 cursor-pointer py-3 border-b ${RoomId === item.room ? "bg-[#2491cf] text-black" : ""}`}>
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
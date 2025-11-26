'use client'
import React, { useEffect, useState } from 'react'
import ChatsList from './ChatsList/ChatsList'
import ChatsSection from './ChatsSection/ChatsSection'
import { getAllChats } from '@/core/api/Dashboard/Chats'
import { IAllChats } from '@/core/types/Dashboard/IChats'

const DashboardChatsPageSection = () => {
    const [RoomId, setRoomId] = useState<string | number>('')
    const [chatsList, setChatsList] = useState<IAllChats[]>([])
    const [openChat, setOpenChat] = useState<boolean>(false)
    const fetchChats = async () => {
        const getUserChats = await getAllChats()
        setChatsList(getUserChats)
    }
    useEffect(() => {
        fetchChats()
    }, [])

    return (
        <div className='flex flex-row w-full sm:max-h-full md:max-h-full lg:max-h-full h-full overflow-x-auto custom-scrollbar overflow-y-auto bg-white dark:bg-[#363636]
            shadow-[0_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
            rounded-[12px] 
            transition-all duration-300 
            hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]'>
            <ChatsList setOpenChat={setOpenChat} userChatList={chatsList} setRoomId={setRoomId} RoomId={RoomId} openChat={openChat}/>
            <ChatsSection roomId={RoomId} setRoomId={setRoomId} setOpenChat={setOpenChat} openChat={openChat}/>
        </div>
    )
}

export default DashboardChatsPageSection
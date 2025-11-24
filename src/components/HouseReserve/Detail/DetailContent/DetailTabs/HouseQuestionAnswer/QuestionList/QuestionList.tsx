import { getQuestions } from '@/core/api/HouseReserve/Detail/Detail';
import { IQuestion } from '@/core/types/HouseReserveDetail/IQuestion'
import { formatToPersianDate } from '@/utils/date';
import React, { FC, useEffect, useState } from 'react'
import { CiUser } from "react-icons/ci";
import SendAnswer from '../SendAnswer/SendAnswer';

interface IProps {
    houseId: string
}
const QuestionList: FC<IProps> = ({ houseId }) => {
    const [QuestionList, setQuestionList] = useState<IQuestion[]>([])
    const [openAnswerId, setOpenAnswerId] = useState<number | null>(null);
    const [QuestionId, setQuestionId] = useState<number | null>(null)
    const handleAnswer = (questionId: number) => {
        setOpenAnswerId(prev => prev === questionId ? null : questionId);
    };
    const handleOpenAnswerModal = (questionId: number) => {
        setQuestionId(prev => prev === questionId ? null : questionId);
    };
    useEffect(() => {
        const fetchChats = async () => {
            const getQuestionList = await getQuestions(houseId)
            setQuestionList(getQuestionList)
        }
        fetchChats()
    }, [houseId])


    return (
        <div className='flex flex-col gap-5 w-full mx-auto max-h-[300px] overflow-y-auto custom-scrollbar p-2'>
            {QuestionList.length > 0 ? QuestionList.map((item, index) => (
                <React.Fragment key={index}>
                    <div className='flex flex-col gap-2.5 w-full border-b'>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-1.5 items-center'>
                                <CiUser size={35} className='bg-[#478ebd] rounded-full p-1' />
                                <span className='dark:text-white text-black text-[17px]'>{item.question}</span>
                            </div>
                            <div className='dark:text-white text-black'>
                                {formatToPersianDate(item.createdAt)}
                            </div>
                        </div>
                        <div className='flex flex- row gap-3 mb-2'>
                            <div onClick={() => handleOpenAnswerModal(item.id)} className='text-[#012ffd] dark:text-[#5473fa] cursor-pointer'>
                                پاسخ به پرسش
                            </div>
                            {item.answeredBy !== null && (
                                <div onClick={() => handleAnswer(item.id)} className='text-[#012ffd] dark:text-[#5473fa] cursor-pointer'>
                                    مشاهده پاسخ ها
                                </div>
                            )}
                        </div>
                    </div>
                    {openAnswerId === item.id && item.answer && (
                        <div className='flex flex-col gap-2.5 w-[96%] mr-auto border-r pr-4 pb-4'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row gap-1.5 items-center'>
                                    <CiUser size={35} className='bg-[#478ebd] rounded-full p-1' />
                                    <span className='dark:text-white text-black text-[17px]'>{item.answer}</span>
                                </div>
                                <div className='dark:text-white text-black'>
                                    {formatToPersianDate(item.updatedAt)}
                                </div>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            )) : (
                <div className='w-full text-[20px] dark:text-white text-black mx-auto justify-center'>
                    پرسشی وجود ندارد.
                </div>
            )}
            {QuestionId && (
                <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
                    <SendAnswer questionId={QuestionId} setQuestionId={setQuestionId}/>
                </div>
            )}
        </div>
    )
}

export default QuestionList
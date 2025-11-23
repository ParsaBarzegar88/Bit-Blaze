'use client'
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from 'react';
import { LiaTimesSolid } from "react-icons/lia";
interface IProps {
    handleClose: Dispatch<SetStateAction<boolean>>;
}
const CommentFilterItem: FC<IProps> = ({ handleClose }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()
    
    const reserveType = useMemo(() => [
        {
            label: "همه",
            value: null
        },
        {
            label: "1",
            value: "1"
        },
        {
            label: "2",
            value: "2"
        },
        {
            label: "3",
            value: "3"
        },
        {
            label: "4",
            value: "4"
        },
        {
            label: "5",
            value: "5"
        },
    ], [])
    const [openReserveType, setOpenReserveType] = useState<boolean>(false);
    const [selectedReserveType, setSelectedReserveType] = useState(
        reserveType.find((item) => item.value === searchParams.get('propertyType'))?.label || 'همه'
    );
    const updateSearchParams = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams)
        if (value === null || value === "همه" || value === "") {
            params.delete(key)
        } else {
            params.set(key, value)
            params.set('page','1')
        }
        router.push(`?${params.toString()}`)
    }
    const clearAllFilters = () => {
        setSelectedReserveType('همه')
        router.push(pathName)
    }
    useEffect(() => {
        const resType = searchParams.get('reserveType')
        const reserve = reserveType.find(r => r.value === resType)
        setSelectedReserveType(reserve?.label || 'همه')

    }, [searchParams,reserveType])
    return (
        <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
     data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-4xl flex flex-col gap-8 items-center 
      justify-center mx-auto dark:bg-[#363636]'>
            <div className='flex flex-row justify-between w-full items-center'>
                <h2 className='text-[24px] font-[400]'>فیلتر ها</h2>
                <div onClick={() => handleClose(false)} className='flex flex-row gap-1.5 border border-[#FF4242] cursor-pointer text-[#FF4242] rounded-[64px] pb-1.5 pr-2.5 pl-2.5 pt-1.5 items-center justify-center'>
                    <LiaTimesSolid />
                    <span>بستن</span>
                </div>
            </div>
            <div className="w-full mt-1 mb-1 border-t border-[#b3b3b3] dark:border-white border-dashed transition-colors duration-300"></div>
            <div className='flex md:flex-row flex-col gap-3 w-full '>
                <fieldset className='border border-[#AAAAAA] rounded-[12px] w-full'>
                    <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>امتیاز : </legend>
                    <Popover open={openReserveType} onOpenChange={setOpenReserveType}>
                        <PopoverTrigger asChild>
                            <div className='group'>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openReserveType}
                                    className="w-full h-[30px] justify-between text-[#5f5f5f] dark:hover:bg-transparent border-none bg-transparent dark:bg-transparent hover:bg-transparent"
                                >
                                    <div className='flex flex-row gap-2 text-[#AAAAAA] items-center'>
                                        {selectedReserveType || "وضعیت رزرو"}
                                    </div>
                                    <ChevronDown className="ml-0.5 h-10 w-10 shrink-0 text-[#AAAAAA]" />
                                </Button>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 border-none min-w-[200px] w-fit">
                            <Command className="dark:bg-[#404040] bg-white border-none rounded-[6px]">
                                <CommandList>
                                    <CommandGroup>
                                        {reserveType.map((reserve, index) => (
                                            <CommandItem
                                                key={index}
                                                value={reserve.label}
                                                onSelect={(currentValue) => {
                                                    const selected = reserveType.find(item => item.label === currentValue)
                                                    if (selected) {
                                                        setSelectedReserveType(selected.label);
                                                        updateSearchParams('rating', selected.value)
                                                    }
                                                    setOpenReserveType(false);
                                                }}
                                                className="dark:text-[#FFFFFF] text-black rounded-[3px]"
                                            >
                                                {selectedReserveType === reserve.label || (!selectedReserveType && reserve.label === 'همه') ? (
                                                    <Check className="h-4 w-4 dark:text-white text-black" />
                                                ) : null}
                                                {reserve.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </fieldset>
            </div>
            <button className='bg-[#FF4242] w-[100px] rounded-[10px] cursor-pointer py-1.5 text-white' onClick={clearAllFilters}>حذف فیلتر</button>
        </div>
    )
}

export default CommentFilterItem
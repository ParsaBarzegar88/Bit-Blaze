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
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from 'react';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { LiaTimesSolid } from "react-icons/lia";
import { LuCalendarClock } from "react-icons/lu";
const DatePicker = dynamic(() => import("react-multi-date-picker"), {
    ssr: false,
});
interface IProps {
    handleClose: Dispatch<SetStateAction<boolean>>;
}
const ReserveFilterItem: FC<IProps> = ({ handleClose }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()
    const houseType = useMemo(() => [
        {
            label: "همه",
            value: null
        },
        {
            label: "آپارتمان",
            value: "apartment"
        },
        {
            label: "ویلا",
            value: "villa"
        },
        {
            label: "روستایی",
            value: "house"
        },
    ], [])

    const reserveType = useMemo(() => [
        {
            label: "همه",
            value: null
        },
        {
            label: "تایید شده",
            value: "confirm"
        },
        {
            label: "در حال انتظار",
            value: "pending"
        },
        {
            label: "تایید نشده",
            value: "cancel"
        },
    ], [])
    const [selectedDepartureDay, setSelectedDepartureDay] = useState<DateObject | null>(null);
    const [selectedReturnDay, setSelectedReturnDay] = useState<DateObject | null>(null);
    const [openHouseType, setOpenHouseType] = useState<boolean>(false);
    const [openReserveType, setOpenReserveType] = useState<boolean>(false);
    const [selectedHouseType, setSelectedHouseType] = useState(
        houseType.find((item) => item.value === searchParams.get('propertyType'))?.label || 'همه'
    );
    const [selectedReserveType, setSelectedReserveType] = useState(
        reserveType.find((item) => item.value === searchParams.get('propertyType'))?.label || 'همه'
    );
    const updateSearchParams = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams)
        if (value === null || value === "همه" || value === "") {
            params.delete(key)
        } else {
            params.set(key, value)
        }
        router.push(`?${params.toString()}`)
    }
    const clearAllFilters = () => {
        setSelectedDepartureDay(null)
        setSelectedReturnDay(null)
        setSelectedHouseType('همه')
        setSelectedReserveType('همه')
        router.push(pathName)
    }
    useEffect(() => {
        const departure = searchParams.get('departureDay')
        if (departure) {
            const date = new DateObject(new Date(departure)).convert(persian, persian_fa)
            setSelectedDepartureDay(date)
        }
        const returnD = searchParams.get('returnDay')
        if (returnD) {
            const date = new DateObject(new Date(returnD)).convert(persian, persian_fa)
            setSelectedReturnDay(date)
        }
        const propType = searchParams.get('transactionType')
        const house = houseType.find(h => h.value === propType)
        setSelectedHouseType(house?.label || 'همه')
        const resType = searchParams.get('reserveType')
        const reserve = reserveType.find(r => r.value === resType)
        setSelectedReserveType(reserve?.label || 'همه')

    }, [searchParams, houseType, reserveType])
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
                    <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>تاریخ رفت : </legend>
                    <div className='flex h-[30px] flex-row gap-1.5 pb-1 text-[#AAAAAA] w-full items-center pr-2.5'>
                        <LuCalendarClock size={20} />
                        <DatePicker
                            key="departure"
                            value={selectedDepartureDay}
                            onChange={(date: DateObject | null) => {
                                const isoDate = date?.toDate().toISOString()
                                setSelectedDepartureDay(date);
                                updateSearchParams('departureDay', String(isoDate))
                            }}
                            calendar={persian}
                            locale={persian_fa}
                            placeholder="تاریخ رفت "
                            calendarPosition="bottom-right"
                            format="YYYY/MM/DD"
                            inputClass="w-full placeholder:text-[#AAAAAA] text-[#AAAAAA] outline-none focus:border-none text-right text-sm sm:text-base"
                        />
                    </div>
                </fieldset>
                <fieldset className='border border-[#AAAAAA] rounded-[12px] w-full'>
                    <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>تاریخ برگشت : </legend>
                    <div className='flex flex-row h-[30px] gap-1.5 pb-1 text-[#AAAAAA] w-full items-center pr-2.5'>
                        <LuCalendarClock size={20} />
                        <DatePicker
                            key="departure"
                            value={selectedReturnDay}
                            onChange={(date: DateObject | null) => {
                                const isoDate = date?.toDate().toISOString()
                                setSelectedReturnDay(date);
                                updateSearchParams('returnDay', String(isoDate))
                            }}
                            calendar={persian}
                            locale={persian_fa}
                            placeholder="تاریخ برگشت"
                            calendarPosition="bottom-right"
                            format="YYYY/MM/DD"
                            inputClass="w-full placeholder:text-[#AAAAAA] text-[#AAAAAA] outline-none focus:border-none text-right text-sm sm:text-base"
                        />
                    </div>
                </fieldset>
            </div>
            <div className='flex md:flex-row flex-col gap-3 w-full '>
                <fieldset className='border border-[#AAAAAA] rounded-[12px] w-full'>
                    <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>نوع ملک : </legend>
                    <Popover open={openHouseType} onOpenChange={setOpenHouseType}>
                        <PopoverTrigger asChild>
                            <div className='group'>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openHouseType}
                                    className="w-full h-[30px] justify-between text-[#5f5f5f] dark:hover:bg-transparent border-none bg-transparent dark:bg-transparent hover:bg-transparent"
                                >
                                    <div className='flex flex-row gap-2 text-[#AAAAAA] items-center'>
                                        {selectedHouseType || "نوع ملک"}
                                    </div>
                                    <ChevronDown className="ml-0.5 h-10 w-10 shrink-0 text-[#AAAAAA]" />
                                </Button>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 border-none min-w-[200px] w-fit">
                            <Command className="dark:bg-[#404040] bg-white border-none rounded-[6px]">
                                <CommandList>
                                    <CommandGroup>
                                        {houseType.map((houses, index) => (
                                            <CommandItem
                                                key={index}
                                                value={houses.label}
                                                onSelect={(currentValue) => {
                                                    const selected = houseType.find(item => item.label === currentValue)
                                                    if (selected) {
                                                        setSelectedHouseType(selected.label);
                                                        updateSearchParams('transactionType', selected.value)
                                                    }
                                                    setOpenHouseType(false);
                                                }}
                                                className="dark:text-[#FFFFFF] text-black rounded-[3px]"
                                            >
                                                {selectedHouseType === houses.label || (!selectedHouseType && houses.label === 'همه') ? (
                                                    <Check className="h-4 w-4 dark:text-white text-black" />
                                                ) : null}
                                                {houses.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </fieldset>
                <fieldset className='border border-[#AAAAAA] rounded-[12px] w-full'>
                    <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>وضعیت رزرو : </legend>
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
                                                        updateSearchParams('reserveType', selected.value)
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

export default ReserveFilterItem
'use client'
import React, { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
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

const PaymentsFilter = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const reserveType = useMemo(() => [
    {
      label: "همه",
      value: null
    },
    {
      label: "تایید شده",
      value: "completed"
    },
    {
      label: "در حال انتظار",
      value: "pending"
    },
    // {
    //   label: "تایید نشده",
    //   value: "canceled"
    // },
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
    }
    router.push(`?${params.toString()}`)
  }
  return (
    <div className='flex max-[800px]:flex-col flex-row w-full items-center justify-between'>
      <div className='dark:text-white text-black text-[20px] w-fit'>لیست رزرو  های ذخیره شده</div>
      <div className='flex  max-[800px]:flex-col flex-row gap-5 justify-end max-w-[270px] w-full'>
        <fieldset className='border border-[#AAAAAA] rounded-[12px] w-full'>
          <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>وضعیت پرداخت : </legend>
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
                    {selectedReserveType || "وضعیت پرداخت"}
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
    </div>
  )
}

export default PaymentsFilter
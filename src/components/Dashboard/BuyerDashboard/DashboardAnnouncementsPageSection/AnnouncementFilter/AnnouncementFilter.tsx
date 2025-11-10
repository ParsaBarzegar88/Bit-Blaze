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
import MarkAsReadAnnouncement from './MarkAsReadAnnouncement/MarkAsReadAnnouncement';

const AnnouncementFilter = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const reserveType = useMemo(() => [
    {
      label: "همه",
      value: null
    },
    {
      label: "خوانده شده",
      value: "true"
    },
    {
      label: "خوانده نشده",
      value: "false"
    },
  ], [])
  const [selectToRead, setSelectToRead] = useState<boolean>(false)
  const [openAnnouncementType, setOpenAnnouncementType] = useState<boolean>(false);
  const [selectedAnnouncementType, setSelectedAnnouncementType] = useState(
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
  const handleOpenSelectToRead = () => {
    setSelectToRead(!selectToRead)
  }
  return (
    <div className='flex flex-row w-full items-center justify-between'>
      <div className='dark:text-white text-black text-[20px] w-full'>لیست اعلان های شما</div>
      <div className='flex flex-row gap-2 w-full justify-end'>
        <div className='flex flex-row gap-5 justify-end max-w-[170px] w-full'>
          <fieldset className='border border-[#AAAAAA] rounded-[12px] w-full'>
            <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>نوع اعلان : </legend>
            <Popover open={openAnnouncementType} onOpenChange={setOpenAnnouncementType}>
              <PopoverTrigger asChild>
                <div className='group'>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openAnnouncementType}
                    className="w-full h-[30px] justify-between text-[#5f5f5f] dark:hover:bg-transparent border-none bg-transparent dark:bg-transparent hover:bg-transparent"
                  >
                    <div className='flex flex-row gap-2 text-[#AAAAAA] items-center'>
                      {selectedAnnouncementType || "نوع اعلان"}
                    </div>
                    <ChevronDown className="ml-0.5 h-10 w-10 shrink-0 text-[#AAAAAA]" />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0 border-none min-w-[170px] w-fit">
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
                              setSelectedAnnouncementType(selected.label);
                              updateSearchParams('isRead', selected.value)
                            }
                            setOpenAnnouncementType(false);
                          }}
                          className="dark:text-[#FFFFFF] text-black rounded-[3px]"
                        >
                          {selectedAnnouncementType === reserve.label || (!selectedAnnouncementType && reserve.label === 'همه') ? (
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
        <div onClick={handleOpenSelectToRead} className='bg-[#8CFF45] max-w-[240px] w-full py-2 px-2 text-black rounded-[12px] flex justify-center items-center mt-2 text-[15px] cursor-pointer'>
          علامت گذاری به عنوان خوانده شده
        </div>
      </div>
      {selectToRead && (
        <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
          <MarkAsReadAnnouncement onClose={setSelectToRead} />
        </div>
      )}
    </div>
  )
}

export default AnnouncementFilter
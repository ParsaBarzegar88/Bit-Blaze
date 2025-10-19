"use client"
import { Button } from "@/components/ui/button";
import React, { FC, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";
import { IoLocationOutline, IoFilterOutline } from "react-icons/io5";
import { IHouses } from "@/core/types/LandingPage/IHouses";

type Province = string;
type SortOption = { label: string; value: string };
interface IProps {
  totalCount: IHouses;
}

const FilterHouse:FC<IProps> = ({totalCount}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const provinces: Province[] = [
    "همه", "تهران", "مازندران", "گیلان", "اصفهان", "فارس", "خراسان رضوی",
    "آذربایجان شرقی", "آذربایجان غربی", "کرمان", "خوزستان", "قم",
    "البرز", "کرمانشاه", "سیستان و بلوچستان", "هرمزگان", "چهارمحال و بختیاری",
    "لرستان", "ایلام", "کهگیلویه و بویراحمد", "بوشهر", "زنجان",
    "سمنان", "یزد", "اردبیل", "قزوین", "گلستان", "خراسان شمالی",
    "خراسان جنوبی", "مرکزی", "همدان", "کردستان"
  ];

  const sortBy = [
    { label: 'جدید ترین ها', value: "last_updated" },
    { label: 'ارزان ترین ها', value: "price" },
    { label: 'محبوب ترین ها', value: "rate" }
  ];

  const [openProvince, setOpenProvince] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [selectedProvince, setSelectedProvince] = useState<Province>(searchParams.get("location") || "");
  const [selectedSort, setSelectedSort] = useState<SortOption | null>(
    searchParams.get("sort") ?
      sortBy.find(item => item.value === searchParams.get("sort")) || null : sortBy[0]
  );
  const [search, setSearch] = useState<string>(searchParams.get("search") || "");

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
    <div className="m-auto w-full z-[9] mt-4">
      <div className="flex flex-col max-md:flex-col md:flex-row justify-center md:justify-between w-full items-end gap-4 lg:gap-5 p-3 sm:p-4 lg:p-5 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#303030]">
        <div className="flex flex-col max-md:flex-col md:flex-row gap-3 sm:gap-4 lg:gap-5 w-full items-start">
          <div className="w-full md:w-[200px] lg:w-[220px]">
            <Popover open={openProvince} onOpenChange={setOpenProvince}>
              <PopoverTrigger asChild>
                <div className='group'>
                  <p className='group-hover:text-[#FFFFFF] text-[#AAAAAA] font-[400] text-xs sm:text-[13px] mb-1'>مقصد یا هتل شما :</p>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openProvince}
                    className="w-full h-[44px] sm:h-[50px] justify-between bg-transparent border-[#AAAAAA] rounded-xl sm:rounded-2xl group-hover:border-[#FFFFFF] group-hover:text-[#FFFFFF] text-[#AAAAAA] hover:bg-[#353535] text-sm sm:text-base"
                  >
                    <div className='flex flex-row gap-2 items-center'>
                      <IoLocationOutline className='group-hover:text-[#FFFFFF] text-sm sm:text-base' />
                      <span className="truncate max-w-[100px] sm:max-w-[120px]">
                        {selectedProvince || "استان ، شهر ، هتل ...."}
                      </span>
                    </div>
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 group-hover:text-[#FFFFFF]" />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0 border-none w-fit" align="start">
                <Command className="bg-[#404040] border-none rounded-[3px]">
                  <CommandInput placeholder="جستجوی استان..." className="h-9" />
                  <CommandList className="max-h-[200px]">
                    <CommandEmpty>استان یافت نشد</CommandEmpty>
                    <CommandGroup>
                      {provinces.map((province) => (
                        <CommandItem
                          key={province}
                          value={province}
                          onSelect={(currentValue) => {
                            const selected = currentValue === selectedProvince ? "" : currentValue;
                            if (selected) {
                              setSelectedProvince(currentValue === selectedProvince ? "" : currentValue)
                              updateSearchParams("location", selected);
                              setOpenProvince(false);
                            }
                          }}
                          className="text-[#FFFFFF] rounded-[3px]"
                        >
                          {selectedProvince === province || (!selectedProvince && province === 'همه') ? (
                            <Check className="h-4 w-4 text-white" />
                          ) : null}
                          {province}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-full md:w-[200px] lg:w-[220px]">
            <Popover open={openSort} onOpenChange={setOpenSort}>
              <PopoverTrigger asChild>
                <div className='group'>
                  <p className='group-hover:text-[#FFFFFF] text-[#AAAAAA] font-[400] text-xs sm:text-[13px] mb-1'>مرتب سازی بر اساس :</p>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openSort}
                    className="w-full h-[44px] sm:h-[50px] justify-between bg-transparent border-[#AAAAAA] rounded-xl sm:rounded-2xl group-hover:border-[#FFFFFF] group-hover:text-[#FFFFFF] text-[#AAAAAA] hover:bg-[#353535] text-sm sm:text-base"
                  >
                    <div className='flex flex-row gap-2 items-center'>
                      <IoFilterOutline className='group-hover:text-[#FFFFFF] text-sm sm:text-base' />
                      <span className="truncate max-w-[100px] sm:max-w-[120px]">
                        {selectedSort?.label || "انتخاب مرتب‌سازی ..."}
                      </span>
                    </div>
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 group-hover:text-[#FFFFFF]" />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0 border-none w-[200px] sm:w-[220px]" align="start">
                <Command className="bg-[#404040] border-none rounded-[3px]">
                  <CommandList>
                    <CommandGroup>
                      {sortBy.map((option) => (
                        <CommandItem
                          key={option.value}
                          value={option.label}
                          onSelect={(currentValue) => {
                            const selected = sortBy.find(item => item.label === currentValue) || null
                            if (selected) {
                              setSelectedSort(selected)
                              updateSearchParams("sort", selected.value);
                              setOpenSort(false);
                            }
                          }}
                          className="text-[#FFFFFF] rounded-[3px]"
                        >
                          {selectedSort?.label === option.label || (!selectedSort && option.label === 'همه') ? (
                            <Check className="h-4 w-4 text-white" />
                          ) : null}
                          {option.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-full md:w-fit lg:w-[300px] xl:w-[400px]">
            <div className="group">
              <label className="block group-hover:text-[#FFFFFF] text-[#AAAAAA] font-[400] text-xs sm:text-[13px] mb-1">جستجو :</label>
              <input
                type="text"
                className="w-full h-[44px] sm:h-[50px] px-3 bg-transparent border border-[#AAAAAA] rounded-xl sm:rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] hover:bg-[#353535] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right text-sm sm:text-base"
                placeholder="نام هتل مورد نظر ....."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  updateSearchParams("search", e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-auto mt-3 sm:mt-0 whitespace-nowrap">
          <div className="border border-[#ffffff] flex flex-row-reverse gap-2 items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl w-full justify-center md:justify-start">
            <p className="text-white text-sm sm:text-base">تعداد آگهی : {totalCount.totalCount}</p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3333 0C11.1565 0 10.987 0.0702379 10.8619 0.195262C10.7369 0.320286 10.6667 0.489856 10.6667 0.666667C10.6667 2.63267 8.94467 3.33333 7.33333 3.33333H2.66667C1.95942 3.33333 1.28115 3.61428 0.781049 4.11438C0.280952 4.61448 0 5.29276 0 6L0 7.33333C0.00145611 7.73249 0.0929745 8.12618 0.267735 8.48505C0.442496 8.84392 0.695992 9.15872 1.00933 9.406L3.39067 14.7207C3.56003 15.1014 3.83612 15.4249 4.18551 15.6519C4.53491 15.879 4.94264 15.9999 5.35933 16C5.69087 15.9998 6.0171 15.9167 6.30831 15.7582C6.59952 15.5997 6.84648 15.3709 7.0267 15.0926C7.20692 14.8144 7.31468 14.4954 7.34017 14.1649C7.36567 13.8343 7.30809 13.5026 7.17267 13.2L5.706 10H7.33333C8.94467 10 10.6667 10.7007 10.6667 12.6667C10.6667 12.8435 10.7369 13.013 10.8619 13.1381C10.987 13.2631 11.1565 13.3333 11.3333 13.3333C11.5101 13.3333 11.6797 13.2631 11.8047 13.1381C11.9298 13.013 12 12.8435 12 12.6667V0.666667C12 0.489856 11.9298 0.320286 11.8047 0.195262C11.6797 0.0702379 11.5101 0 11.3333 0ZM5.958 13.746C6.00216 13.8457 6.02073 13.9549 6.01203 14.0636C6.00333 14.1723 5.96764 14.2771 5.90818 14.3686C5.84873 14.46 5.76739 14.5352 5.67155 14.5872C5.57571 14.6393 5.4684 14.6666 5.35933 14.6667C5.20026 14.6666 5.04465 14.6203 4.91139 14.5334C4.77813 14.4465 4.67297 14.3228 4.60867 14.1773L2.73667 10H4.23933L5.958 13.746ZM10.6667 9.73333C9.7142 8.99946 8.53491 8.62209 7.33333 8.66667H2.66667C2.31305 8.66667 1.97391 8.52619 1.72386 8.27614C1.47381 8.02609 1.33333 7.68696 1.33333 7.33333V6C1.33333 5.64638 1.47381 5.30724 1.72386 5.05719C1.97391 4.80714 2.31305 4.66667 2.66667 4.66667H7.33333C8.5345 4.7122 9.71375 4.33602 10.6667 3.60333V9.73333ZM15.9333 10.3013C15.8942 10.3797 15.8401 10.4496 15.7739 10.5071C15.7078 10.5645 15.631 10.6083 15.5479 10.6361C15.4648 10.6638 15.3771 10.6749 15.2897 10.6687C15.2023 10.6625 15.117 10.6392 15.0387 10.6L13.7053 9.93333C13.5471 9.8543 13.4267 9.71564 13.3707 9.54786C13.3147 9.38007 13.3276 9.19691 13.4067 9.03867C13.4857 8.88042 13.6244 8.76005 13.7921 8.70404C13.9599 8.64803 14.1431 8.66097 14.3013 8.74L15.6347 9.40667C15.7921 9.48565 15.9119 9.62373 15.9678 9.79073C16.0238 9.95774 16.0114 10.1401 15.9333 10.298V10.3013ZM13.4067 4.30133C13.3675 4.22299 13.3441 4.13769 13.338 4.05031C13.3318 3.96293 13.3429 3.8752 13.3706 3.79211C13.3983 3.70902 13.4422 3.63221 13.4996 3.56608C13.557 3.49994 13.627 3.44577 13.7053 3.40667L15.0387 2.74C15.1969 2.66097 15.3801 2.64803 15.5479 2.70404C15.7156 2.76005 15.8543 2.88042 15.9333 3.03867C16.0124 3.19691 16.0253 3.38007 15.9693 3.54786C15.9133 3.71564 15.7929 3.8543 15.6347 3.93333L14.3013 4.6C14.223 4.63917 14.1377 4.66252 14.0503 4.66871C13.9629 4.6749 13.8752 4.6638 13.7921 4.63607C13.709 4.60833 13.6322 4.56449 13.5661 4.50706C13.4999 4.44962 13.4458 4.37971 13.4067 4.30133ZM13.3333 6.66667C13.3333 6.48986 13.4036 6.32029 13.5286 6.19526C13.6536 6.07024 13.8232 6 14 6H15.3333C15.5101 6 15.6797 6.07024 15.8047 6.19526C15.9298 6.32029 16 6.48986 16 6.66667C16 6.84348 15.9298 7.01305 15.8047 7.13807C15.6797 7.2631 15.5101 7.33333 15.3333 7.33333H14C13.8232 7.33333 13.6536 7.2631 13.5286 7.13807C13.4036 7.01305 13.3333 6.84348 13.3333 6.66667Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterHouse
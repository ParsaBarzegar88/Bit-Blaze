"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { faIR } from "date-fns/locale";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { useSearchParams , useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const HeroSectionFilter = () => {
  const [openProvince, setOpenProvince] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState("");
  const [openTab, setOpenTab] = useState("reserve");
  const [selectedTradeType, setSelectedTradeType] = useState("");
  const [openTradeType, setOpenTradeType] = useState(false);
  const [selectedHouseType, setSelectedHouseType] = useState("");
  const [openHouseType, setOpenHouseType] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const provinces = [
    "همه",
    "تهران",
    "مازندران",
    "گیلان",
    "اصفهان",
    "فارس",
    "خراسان رضوی",
    "آذربایجان شرقی",
    "آذربایجان غربی",
    "کرمان",
    "خوزستان",
    "قم",
    "البرز",
    "کرمانشاه",
    "سیستان و بلوچستان",
    "هرمزگان",
    "چهارمحال و بختیاری",
    "لرستان",
    "ایلام",
    "کهگیلویه و بویراحمد",
    "بوشهر",
    "زنجان",
    "سمنان",
    "یزد",
    "اردبیل",
    "قزوین",
    "گلستان",
    "خراسان شمالی",
    "خراسان جنوبی",
    "مرکزی",
    "همدان",
    "کردستان",
  ];

  const houseType = [
    { label: "همه", value: null },
    { label: "آپارتمان", value: "apartment" },
    { label: "ویلا", value: "villa" },
    { label: "روستایی", value: "house" },
  ];

  const tradeType = [
    { label: "همه", value: null },
    { label: "رهن", value: "mortgage" },
    { label: "اجاره", value: "rent" },
    { label: "خرید", value: "purchase" },
  ];

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (openTab === "reserve") {
      if (selectedProvince) {
        if (selectedProvince === "همه") {
          params.delete("province");
        } else {
          params.set("province", selectedProvince);
        }
      }
      if (checkInDate) params.set("checkIn", checkInDate.toISOString());
      if (checkOutDate) params.set("checkOut", checkOutDate.toISOString());
      if (guests) params.set("guests", guests);
      router.push(`/house-reserve?${params.toString()}`);
    } else {
      if (selectedProvince) {
        if (selectedProvince === "همه") {
          params.delete("location");
        } else {
          params.set("location", selectedProvince);
        }
      }
      if (selectedTradeType) {
        const trade = tradeType.find((t) => t.value === selectedTradeType || (t.value === null && selectedTradeType === "all"));
        if (trade?.label === "همه") {
          params.delete("transactionType");
        } else if (trade?.value) {
          params.set("transactionType", trade.value);
        }
      }
      if (selectedHouseType) {
        const house = houseType.find((h) => h.value === selectedHouseType || (h.value === null && selectedHouseType === "all"));
        if (house?.label === "همه") {
          params.delete("propertyType");
        } else if (house?.value) {
          params.set("propertyType", house.value);
        }
      }
      router.push(`/mortgage-rent?${params.toString()}`);
    }
  };
  return (
    <div className="m-auto max-w-[1400px] w-full z-[9]">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row gap-5 items-center">
          <div className={`${openTab === "reserve" ? 'text-[#FFFFFF] fill-[#FFFFFF]' : 'text-[#8C8C8C] fill-[#8C8C8C]'}  cursor-pointer flex flex-row gap-2 text-[16px] font-[400] items-center`} onClick={() => setOpenTab('reserve')}>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.22201 15.8042C3.06701 16.0708 2.78784 16.2208 2.49951 16.2208C2.35784 16.2208 2.21451 16.185 2.08284 16.1092C0.797845 15.3658 -0.000488281 13.9833 -0.000488281 12.5V5.83333C0.000345052 3.53583 1.86951 1.66667 4.16701 1.66667V0.833333C4.16701 0.373333 4.54034 0 5.00034 0C5.46034 0 5.83368 0.373333 5.83368 0.833333V1.66667H11.667V0.833333C11.667 0.373333 12.0395 0 12.5003 0C12.9612 0 13.3337 0.373333 13.3337 0.833333V1.66667C15.6312 1.66667 17.5003 3.53583 17.5003 5.83333V12.5C17.5003 12.96 17.1278 13.3333 16.667 13.3333C16.2062 13.3333 15.8337 12.96 15.8337 12.5V7.5H15.0003C14.5395 7.5 14.167 7.12667 14.167 6.66667C14.167 6.20667 14.5395 5.83333 15.0003 5.83333H15.8337C15.8337 4.455 14.712 3.33333 13.3337 3.33333H4.16701C2.78868 3.33333 1.66701 4.455 1.66701 5.83333H8.33368C8.79368 5.83333 9.16701 6.20667 9.16701 6.66667C9.16701 7.12667 8.79368 7.5 8.33368 7.5H1.66701V12.5C1.66701 13.39 2.14618 14.22 2.91701 14.6658C3.31534 14.8958 3.45284 15.4058 3.22201 15.8042ZM17.2987 15.4833L14.1745 14.3158V10.1117C14.1745 8.84833 13.2778 7.75 12.0887 7.55667C11.3545 7.4375 10.6153 7.64167 10.0562 8.1175C9.49618 8.59333 9.17451 9.28833 9.17451 10.0225V16.325L8.32868 15.6517C8.32284 15.6467 8.31534 15.6467 8.30951 15.6417C7.30034 14.7642 5.76868 14.8292 4.84868 15.8142C3.90701 16.8208 3.96034 18.4058 4.95701 19.3392L5.42201 19.7875C5.57701 19.9375 5.78451 20.0208 6.00034 20.0208C6.75034 20.0208 7.11868 19.1083 6.57868 18.5875L6.10534 18.1308C5.76951 17.8158 5.75201 17.2867 6.06701 16.9508C6.37951 16.6158 6.90701 16.6 7.24201 16.9108C7.25034 16.9183 9.48951 18.7033 9.48951 18.7033C9.74035 18.9033 10.0837 18.9408 10.3703 18.8025C10.6587 18.6633 10.842 18.3717 10.842 18.0517V10.02C10.842 9.775 10.9495 9.54333 11.1362 9.38417C11.3262 9.22333 11.5678 9.15667 11.8212 9.19833C12.207 9.26167 12.5087 9.66167 12.5087 10.1092V14.8917C12.5087 15.2392 12.7245 15.5508 13.0503 15.6725L16.7162 17.0425C17.6362 17.3858 18.2712 18.2408 18.3353 19.2192C18.3645 19.66 18.7312 19.9983 19.1662 19.9983C19.1845 19.9983 19.2028 19.9983 19.2212 19.9967C19.6803 19.9658 20.0287 19.5692 19.9987 19.1108C19.8912 17.4792 18.832 16.055 17.2987 15.4833Z" />
            </svg>
            رزرو ملک
          </div>
          <div className="w-0.5 bg-[#AAAAAA] h-[17px]"></div>
          <div className={`${openTab === "mortgage-rent" ? 'text-[#FFFFFF] fill-[#FFFFFF]' : 'text-[#8C8C8C] fill-[#8C8C8C]'} flex flex-row cursor-pointer gap-2 text-[16px] font-[400] text-[#8C8C8C] items-center`} onClick={() => setOpenTab('mortgage-rent')}>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_67_74)">
                <path d="M15.8333 12.5H15C14.5392 12.5 14.1667 12.1275 14.1667 11.6667C14.1667 11.2058 14.5392 10.8333 15 10.8333H15.8333C16.2942 10.8333 16.6667 11.2058 16.6667 11.6667C16.6667 12.1275 16.2942 12.5 15.8333 12.5ZM16.6667 15C16.6667 14.5392 16.2942 14.1667 15.8333 14.1667H15C14.5392 14.1667 14.1667 14.5392 14.1667 15C14.1667 15.4608 14.5392 15.8333 15 15.8333H15.8333C16.2942 15.8333 16.6667 15.4608 16.6667 15ZM13.3333 5C13.3333 4.53917 12.9608 4.16667 12.5 4.16667H11.6667C11.2058 4.16667 10.8333 4.53917 10.8333 5C10.8333 5.46083 11.2058 5.83333 11.6667 5.83333H12.5C12.9608 5.83333 13.3333 5.46083 13.3333 5ZM16.6667 5C16.6667 4.53917 16.2942 4.16667 15.8333 4.16667H15C14.5392 4.16667 14.1667 4.53917 14.1667 5C14.1667 5.46083 14.5392 5.83333 15 5.83333H15.8333C16.2942 5.83333 16.6667 5.46083 16.6667 5ZM16.6667 8.33333C16.6667 7.8725 16.2942 7.5 15.8333 7.5H15C14.5392 7.5 14.1667 7.8725 14.1667 8.33333C14.1667 8.79417 14.5392 9.16667 15 9.16667H15.8333C16.2942 9.16667 16.6667 8.79417 16.6667 8.33333ZM20 15.8333V4.16667C20 1.86917 18.1308 0 15.8333 0H11.6667C9.36917 0 7.5 1.86917 7.5 4.16667C7.5 4.6275 7.8725 5 8.33333 5C8.79417 5 9.16667 4.6275 9.16667 4.16667C9.16667 2.78833 10.2883 1.66667 11.6667 1.66667H15.8333C17.2117 1.66667 18.3333 2.78833 18.3333 4.16667V15.8333C18.3333 17.2117 17.2117 18.3333 15.8333 18.3333H15C14.5392 18.3333 14.1667 18.7058 14.1667 19.1667C14.1667 19.6275 14.5392 20 15 20H15.8333C18.1308 20 20 18.1308 20 15.8333ZM13.3333 16.25V12.79C13.3333 11.5 12.7508 10.305 11.7342 9.50833L9.23417 7.55083C7.7225 6.36917 5.61083 6.36833 4.09917 7.55083L1.59917 9.5075C0.5825 10.3033 0 11.4992 0 12.7892V16.2492C0 18.3167 1.6825 19.9992 3.75 19.9992H9.58333C11.6508 19.9992 13.3333 18.3175 13.3333 16.25ZM8.2075 8.86417L10.7075 10.8208C11.3167 11.2983 11.6667 12.0167 11.6667 12.79V16.25C11.6667 17.3992 10.7325 18.3333 9.58333 18.3333H3.75C2.60083 18.3333 1.66667 17.3992 1.66667 16.25V12.79C1.66667 12.0158 2.01667 11.2983 2.62583 10.8208L5.12583 8.865C5.57917 8.51 6.1225 8.3325 6.66667 8.3325C7.21083 8.3325 7.75417 8.51 8.2075 8.86417ZM8.33333 15V13.3333C8.33333 12.8733 7.96 12.5 7.5 12.5H5.83333C5.37333 12.5 5 12.8733 5 13.3333V15C5 15.46 5.37333 15.8333 5.83333 15.8333H7.5C7.96 15.8333 8.33333 15.46 8.33333 15Z" />
              </g>
              <defs>
                <clipPath id="clip0_67_74">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            رهن و اجاره
          </div>
        </div>

        <div className="flex flex-row items-center gap-5 p-5 w-full rounded-4xl shadow-[0_4px_16px_rgba(0,0,0,0.27)] dark:shadow-[inset_0_2px_5px_rgba(255,255,255,0.12),0_2px_12px_rgba(0,0,0,0.12)] bg-[#FFFFFF] dark:bg-[#404040]">
          {openTab === 'reserve' ? (
            <>
              <div className="min-w-[200px] w-full">
                <Popover open={openProvince} onOpenChange={setOpenProvince}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openProvince}
                      className="w-full justify-between bg-transparent dark:border-[#AAAAAA] border-[#000000] dark:text-[#AAAAAA] hover:text-black text-black hover:bg-[#cccccc] duration-300 dark:hover:bg-[#505050]"
                    >
                      {selectedProvince || "انتخاب استان ..."}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 border-none">
                    <Command className="dark:bg-[#404040] bg-[#FFFFFF]  border-none">
                      <CommandInput placeholder="جستجوی استان..." className="h-9" />
                      <CommandList>
                        <CommandEmpty>استان یافت نشد</CommandEmpty>
                        <CommandGroup>
                          {provinces.map((province) => (
                            <CommandItem
                              key={province}
                              value={province}
                              onSelect={(currentValue) => {
                                setSelectedProvince(currentValue === selectedProvince ? "" : currentValue);
                                setOpenProvince(false);
                              }}
                              className="dark:text-[#FFFFFF] text-black"
                            >
                              {province}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left  dark:text-[#AAAAAA] text-black font-normal bg-transparent hover:bg-[#cccccc] duration-300 hover:text-black dark:hover:bg-[#505050] dark:border-[#AAAAAA] border-[#000000]",
                        !checkInDate && "dark:text-[#AAAAAA] text-black"
                      )}
                    >
                      <CalendarIcon className="ml-2 h-4 w-4" />
                      {checkInDate ? (
                        format(checkInDate, "PPP", { locale: faIR })
                      ) : (
                        <span>تاریخ ورود</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      initialFocus
                      locale={faIR}
                      className="dark:!bg-[rgba(0,0,0,0)] dark:!text-[#FFFFFF] !bg-[#FFFFFF] text-black"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left text-black font-normal dark:text-[#AAAAAA] hover:bg-[#cccccc] duration-300 dark:hover:bg-[#505050] hover:text-black bg-transparent dark:border-[#AAAAAA] border-[#000000]",
                        !checkOutDate && "dark:text-[#AAAAAA] text-black"
                      )}
                    >
                      <CalendarIcon className="ml-2 h-4 w-4" />
                      {checkOutDate ? (
                        format(checkOutDate, "PPP", { locale: faIR })
                      ) : (
                        <span>تاریخ خروج</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                      locale={faIR}
                      className="dark:!bg-[rgba(0,0,0,0)] dark:!text-[#FFFFFF] !bg-[#FFFFFF] text-black"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full">
                <input
                  className="w-full outline-0 dark:text-[#AAAAAA] dark:bg-[#505050] hover:bg-[#cccccc] duration-300 text-black hover:text-black dark:placeholder:text-[#AAAAAA] placeholder:text-black mr-2 bg-transparent border dark:border-[#AAAAAA] border-[#000000] rounded-md px-3 py-1.5"
                  placeholder="تعداد نفرات ..."
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="min-w-[200px] w-full">
                <Popover open={openProvince} onOpenChange={setOpenProvince}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openProvince}
                      className="w-full justify-between bg-transparent dark:border-[#AAAAAA] border-[#000000] dark:text-[#AAAAAA] hover:text-black text-black hover:bg-[#cccccc] duration-300 dark:hover:bg-[#505050]"
                    >
                      {selectedProvince || "انتخاب استان ..."}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 border-none">
                    <Command className="dark:bg-[#404040] bg-[#FFFFFF] border-none">
                      <CommandInput placeholder="جستجوی استان..." className="h-9" />
                      <CommandList>
                        <CommandEmpty>استان یافت نشد</CommandEmpty>
                        <CommandGroup>
                          {provinces.map((province) => (
                            <CommandItem
                              key={province}
                              value={province}
                              onSelect={(currentValue) => {
                                setSelectedProvince(currentValue === selectedProvince ? "" : currentValue);
                                setOpenProvince(false);
                              }}
                              className="dark:text-[#FFFFFF] text-black"
                            >
                              {province}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="min-w-[200px] w-full">
                <Popover open={openTradeType} onOpenChange={setOpenTradeType}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openTradeType}
                      className="w-full justify-between bg-transparent dark:border-[#AAAAAA] border-[#000000] dark:text-[#AAAAAA] hover:text-black text-black hover:bg-[#cccccc] duration-300 dark:hover:bg-[#505050]"
                    >
                      {tradeType.find((t) => t.value === selectedTradeType)?.label || "نوع معامله ..."}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 border-none">
                    <Command className="dark:bg-[#404040] bg-[#FFFFFF] border-none">
                      <CommandList>
                        <CommandGroup>
                          {tradeType.map((type) => (
                            <CommandItem
                              key={type.value || "all"}
                              value={type.value || "all"}
                              onSelect={(currentValue) => {
                                setSelectedTradeType(currentValue === selectedTradeType ? "" : currentValue);
                                setOpenTradeType(false);
                              }}
                              className="dark:text-[#FFFFFF] text-black"
                            >
                              {type.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="min-w-[200px] w-full">
                <Popover open={openHouseType} onOpenChange={setOpenHouseType}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openHouseType}
                      className="w-full justify-between bg-transparent dark:border-[#AAAAAA] border-[#000000] dark:text-[#AAAAAA] hover:text-black text-black hover:bg-[#cccccc] duration-300 dark:hover:bg-[#505050]"
                    >
                      {houseType.find((h) => h.value === selectedHouseType)?.label || "نوع ملک ..."}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 border-none">
                    <Command className="dark:bg-[#404040] bg-[#FFFFFF] border-none">
                      <CommandList>
                        <CommandGroup>
                          {houseType.map((house) => (
                            <CommandItem
                              key={house.value || "all"}
                              value={house.value || "all"}
                              onSelect={(currentValue) => {
                                setSelectedHouseType(currentValue === selectedHouseType ? "" : currentValue);
                                setOpenHouseType(false);
                              }}
                              className="dark:text-[#FFFFFF] text-black"
                            >
                              {house.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </>
          )}

          <Button className="dark:bg-[#8CFF45] dark:hover:bg-[#63fa06] hover:bg-[#72b34a] bg-[#58893a] text-[#363636] w-fit h-[55px] rounded-[16px] font-[600]  cursor-pointer" onClick={handleSearch}>
            <CiSearch className="ml-2" />
            جستجو کن
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionFilter;

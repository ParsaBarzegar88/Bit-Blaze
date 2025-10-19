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
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const HeroSectionFilter = () => {
  const [openProvince, setOpenProvince] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState("");

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
    "کردستان"
  ];

  return (
    <div className="m-auto max-w-[1400px] w-full z-[9]">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row gap-2 text-[16px] font-[400] text-[#FFFFFF] items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.22201 15.8042C3.06701 16.0708 2.78784 16.2208 2.49951 16.2208C2.35784 16.2208 2.21451 16.185 2.08284 16.1092C0.797845 15.3658 -0.000488281 13.9833 -0.000488281 12.5V5.83333C0.000345052 3.53583 1.86951 1.66667 4.16701 1.66667V0.833333C4.16701 0.373333 4.54034 0 5.00034 0C5.46034 0 5.83368 0.373333 5.83368 0.833333V1.66667H11.667V0.833333C11.667 0.373333 12.0395 0 12.5003 0C12.9612 0 13.3337 0.373333 13.3337 0.833333V1.66667C15.6312 1.66667 17.5003 3.53583 17.5003 5.83333V12.5C17.5003 12.96 17.1278 13.3333 16.667 13.3333C16.2062 13.3333 15.8337 12.96 15.8337 12.5V7.5H15.0003C14.5395 7.5 14.167 7.12667 14.167 6.66667C14.167 6.20667 14.5395 5.83333 15.0003 5.83333H15.8337C15.8337 4.455 14.712 3.33333 13.3337 3.33333H4.16701C2.78868 3.33333 1.66701 4.455 1.66701 5.83333H8.33368C8.79368 5.83333 9.16701 6.20667 9.16701 6.66667C9.16701 7.12667 8.79368 7.5 8.33368 7.5H1.66701V12.5C1.66701 13.39 2.14618 14.22 2.91701 14.6658C3.31534 14.8958 3.45284 15.4058 3.22201 15.8042ZM17.2987 15.4833L14.1745 14.3158V10.1117C14.1745 8.84833 13.2778 7.75 12.0887 7.55667C11.3545 7.4375 10.6153 7.64167 10.0562 8.1175C9.49618 8.59333 9.17451 9.28833 9.17451 10.0225V16.325L8.32868 15.6517C8.32284 15.6467 8.31534 15.6467 8.30951 15.6417C7.30034 14.7642 5.76868 14.8292 4.84868 15.8142C3.90701 16.8208 3.96034 18.4058 4.95701 19.3392L5.42201 19.7875C5.57701 19.9375 5.78451 20.0208 6.00034 20.0208C6.75034 20.0208 7.11868 19.1083 6.57868 18.5875L6.10534 18.1308C5.76951 17.8158 5.75201 17.2867 6.06701 16.9508C6.37951 16.6158 6.90701 16.6 7.24201 16.9108C7.25034 16.9183 9.48951 18.7033 9.48951 18.7033C9.74035 18.9033 10.0837 18.9408 10.3703 18.8025C10.6587 18.6633 10.842 18.3717 10.842 18.0517V10.02C10.842 9.775 10.9495 9.54333 11.1362 9.38417C11.3262 9.22333 11.5678 9.15667 11.8212 9.19833C12.207 9.26167 12.5087 9.66167 12.5087 10.1092V14.8917C12.5087 15.2392 12.7245 15.5508 13.0503 15.6725L16.7162 17.0425C17.6362 17.3858 18.2712 18.2408 18.3353 19.2192C18.3645 19.66 18.7312 19.9983 19.1662 19.9983C19.1845 19.9983 19.2028 19.9983 19.2212 19.9967C19.6803 19.9658 20.0287 19.5692 19.9987 19.1108C19.8912 17.4792 18.832 16.055 17.2987 15.4833Z" fill="white" />
            </svg>
            رزرو ملک
          </div>
          <div className="w-0.5 bg-[#AAAAAA] h-[17px]"></div>
          <div className="flex flex-row gap-2 text-[16px] font-[400] text-[#8C8C8C] items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_67_74)">
                <path d="M15.8333 12.5H15C14.5392 12.5 14.1667 12.1275 14.1667 11.6667C14.1667 11.2058 14.5392 10.8333 15 10.8333H15.8333C16.2942 10.8333 16.6667 11.2058 16.6667 11.6667C16.6667 12.1275 16.2942 12.5 15.8333 12.5ZM16.6667 15C16.6667 14.5392 16.2942 14.1667 15.8333 14.1667H15C14.5392 14.1667 14.1667 14.5392 14.1667 15C14.1667 15.4608 14.5392 15.8333 15 15.8333H15.8333C16.2942 15.8333 16.6667 15.4608 16.6667 15ZM13.3333 5C13.3333 4.53917 12.9608 4.16667 12.5 4.16667H11.6667C11.2058 4.16667 10.8333 4.53917 10.8333 5C10.8333 5.46083 11.2058 5.83333 11.6667 5.83333H12.5C12.9608 5.83333 13.3333 5.46083 13.3333 5ZM16.6667 5C16.6667 4.53917 16.2942 4.16667 15.8333 4.16667H15C14.5392 4.16667 14.1667 4.53917 14.1667 5C14.1667 5.46083 14.5392 5.83333 15 5.83333H15.8333C16.2942 5.83333 16.6667 5.46083 16.6667 5ZM16.6667 8.33333C16.6667 7.8725 16.2942 7.5 15.8333 7.5H15C14.5392 7.5 14.1667 7.8725 14.1667 8.33333C14.1667 8.79417 14.5392 9.16667 15 9.16667H15.8333C16.2942 9.16667 16.6667 8.79417 16.6667 8.33333ZM20 15.8333V4.16667C20 1.86917 18.1308 0 15.8333 0H11.6667C9.36917 0 7.5 1.86917 7.5 4.16667C7.5 4.6275 7.8725 5 8.33333 5C8.79417 5 9.16667 4.6275 9.16667 4.16667C9.16667 2.78833 10.2883 1.66667 11.6667 1.66667H15.8333C17.2117 1.66667 18.3333 2.78833 18.3333 4.16667V15.8333C18.3333 17.2117 17.2117 18.3333 15.8333 18.3333H15C14.5392 18.3333 14.1667 18.7058 14.1667 19.1667C14.1667 19.6275 14.5392 20 15 20H15.8333C18.1308 20 20 18.1308 20 15.8333ZM13.3333 16.25V12.79C13.3333 11.5 12.7508 10.305 11.7342 9.50833L9.23417 7.55083C7.7225 6.36917 5.61083 6.36833 4.09917 7.55083L1.59917 9.5075C0.5825 10.3033 0 11.4992 0 12.7892V16.2492C0 18.3167 1.6825 19.9992 3.75 19.9992H9.58333C11.6508 19.9992 13.3333 18.3175 13.3333 16.25ZM8.2075 8.86417L10.7075 10.8208C11.3167 11.2983 11.6667 12.0167 11.6667 12.79V16.25C11.6667 17.3992 10.7325 18.3333 9.58333 18.3333H3.75C2.60083 18.3333 1.66667 17.3992 1.66667 16.25V12.79C1.66667 12.0158 2.01667 11.2983 2.62583 10.8208L5.12583 8.865C5.57917 8.51 6.1225 8.3325 6.66667 8.3325C7.21083 8.3325 7.75417 8.51 8.2075 8.86417ZM8.33333 15V13.3333C8.33333 12.8733 7.96 12.5 7.5 12.5H5.83333C5.37333 12.5 5 12.8733 5 13.3333V15C5 15.46 5.37333 15.8333 5.83333 15.8333H7.5C7.96 15.8333 8.33333 15.46 8.33333 15Z" fill="#8C8C8C" />
              </g>
              <defs>
                <clipPath id="clip0_67_74">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            رهن و اجاره
          </div>
          <div className="w-0.5 bg-[#8C8C8C] h-[17px]"></div>
          <div className="flex flex-row gap-2 text-[16px] font-[400] text-[#8C8C8C] items-center">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4.83268V5.66602C20 6.12602 19.6275 6.49935 19.1667 6.49935C18.7058 6.49935 18.3333 6.12602 18.3333 5.66602V4.83268C18.3333 3.45435 17.2117 2.33268 15.8333 2.33268H4.16667C2.78833 2.33268 1.66667 3.45435 1.66667 4.83268V13.166C1.66667 14.5443 2.78833 15.666 4.16667 15.666H6.66667C7.1275 15.666 7.5 16.0393 7.5 16.4993C7.5 16.9594 7.1275 17.3327 6.66667 17.3327H4.16667C1.86917 17.3327 0 15.4635 0 13.166V4.83268C0 2.53518 1.86917 0.666016 4.16667 0.666016H15.8333C18.1308 0.666016 20 2.53518 20 4.83268ZM12.5 6.49935H15.8333C16.2942 6.49935 16.6667 6.12602 16.6667 5.66602C16.6667 5.20602 16.2942 4.83268 15.8333 4.83268H12.5C12.0392 4.83268 11.6667 5.20602 11.6667 5.66602C11.6667 6.12602 12.0392 6.49935 12.5 6.49935ZM19.2675 8.89852C19.7392 9.37018 20 9.99852 20 10.666C20 11.3335 19.7392 11.9618 19.2675 12.4343L13.6783 18.0235C13.0492 18.6527 12.2117 19.0002 11.3217 19.0002H10C9.53917 19.0002 9.16667 18.6269 9.16667 18.1668V16.8452C9.16667 15.9552 9.51333 15.1177 10.1433 14.4885L15.7325 8.89935C16.7075 7.92435 18.2925 7.92435 19.2675 8.89935V8.89852ZM18.3333 10.666C18.3333 10.4435 18.2467 10.2343 18.0892 10.0768C17.7633 9.75102 17.2367 9.75185 16.9108 10.0768L11.3217 15.666C11.0117 15.9768 10.8333 16.406 10.8333 16.8443V17.3327H11.3217C11.7667 17.3327 12.185 17.1593 12.5 16.8443L18.0892 11.2552C18.2467 11.0977 18.3333 10.8885 18.3333 10.666ZM7.5 11.4993H5.61C5.31333 11.4993 5.03667 11.3393 4.8875 11.0827C4.65833 10.6835 4.14917 10.546 3.74917 10.7785C3.35083 11.0093 3.21417 11.5185 3.44583 11.9169C3.89083 12.6877 4.72083 13.166 5.61083 13.166H5.83417C5.83417 13.626 6.20667 13.9993 6.6675 13.9993C7.12833 13.9993 7.50083 13.626 7.50083 13.166C8.87917 13.166 10.0008 12.0443 10.0008 10.666C10.0008 9.53268 9.18917 8.57435 8.07167 8.38852L5.5375 7.96602C5.22667 7.91435 5.00083 7.64768 5.00083 7.33268C5.00083 6.87352 5.37417 6.49935 5.83417 6.49935H7.72417C8.02083 6.49935 8.2975 6.65935 8.44667 6.91602C8.67583 7.31435 9.18417 7.45102 9.585 7.22018C9.98333 6.98935 10.12 6.48018 9.88833 6.08185C9.44333 5.31102 8.61333 4.83185 7.72333 4.83185H7.5C7.5 4.37185 7.1275 3.99852 6.66667 3.99852C6.20583 3.99852 5.83333 4.37185 5.83333 4.83185C4.455 4.83185 3.33333 5.95352 3.33333 7.33185C3.33333 8.46518 4.145 9.42352 5.2625 9.60935L7.79667 10.0318C8.1075 10.0835 8.33333 10.3502 8.33333 10.6652C8.33333 11.1243 7.96 11.4985 7.5 11.4985V11.4993ZM11.6667 8.99935C11.6667 9.45935 12.04 9.83268 12.5 9.83268C12.96 9.83268 13.3333 9.45935 13.3333 8.99935C13.3333 8.53935 12.96 8.16602 12.5 8.16602C12.04 8.16602 11.6667 8.53935 11.6667 8.99935Z" fill="#8C8C8C" />
            </svg>
            خرید و فروش
          </div>
        </div>
        
        <div className="flex flex-row items-center gap-5 p-5 w-full rounded-4xl bg-[#404040]">
          <div className="min-w-[200px] w-full">
            <Popover open={openProvince} onOpenChange={setOpenProvince}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openProvince}
                  className="w-full justify-between bg-transparent border-[#AAAAAA] text-white hover:bg-[#505050]"
                >
                  {selectedProvince || "انتخاب استان ..."}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 border-none">
                <Command className="bg-[#404040] border-none">
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
                          className="text-[#FFFFFF]"
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
                    "w-full justify-start text-left font-normal bg-transparent border-[#AAAAAA]",
                    !checkInDate && "text-[#AAAAAA]"
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
                    "w-full justify-start text-left font-normal bg-transparent border-[#AAAAAA]",
                    !checkOutDate && "text-[#AAAAAA]"
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
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-full">
            <input 
              className="w-full outline-0 text-[#AAAAAA] mr-2 bg-transparent border border-[#AAAAAA] rounded-md px-3 py-2"
              placeholder="تعداد نفرات ..."
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          <Button className="bg-[#8CFF45] text-[#363636] w-fit h-[55px] rounded-[16px] font-[600] hover:bg-[#8CFF45]">
            <CiSearch className="ml-2" />
            جستجو کن
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionFilter;

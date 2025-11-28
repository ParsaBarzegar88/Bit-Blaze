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
import { FC, useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { LiaTimesSolid } from "react-icons/lia";

interface IProps {
    handleClose: (value: boolean) => void;
}

const ReserveFilterItem: FC<IProps> = ({ handleClose }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const HouseType = useMemo(() => [
        { label: "همه", value: null },
        { label: "اجاره ای", value: "rental" },
        { label: "رهن", value: "mortgage" },
        { label: "رزرو", value: "reservation" },
    ], []);

    const [openReserveType, setOpenReserveType] = useState<boolean>(false);
    const [selectedHouseType, setSelectedHouseType] = useState<string>(
        HouseType.find((item) => item.value === searchParams.get('transaction_type'))?.label || 'همه'
    );
    const [minPrice, setMinPrice] = useState<number>(parseInt(searchParams.get('minPrice') || '0'));
    const [maxPrice, setMaxPrice] = useState<number>(parseInt(searchParams.get('maxPrice') || '10000000'));

    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null);

    const updateURL = useCallback((newParams: URLSearchParams) => {
        const queryString = newParams.toString();
        const newUrl = queryString ? `${pathName}?${queryString}` : pathName;
        router.push(newUrl);
    }, [pathName, router]);

    const handleHouseTypeChange = useCallback((value: string | null) => {
        const params = new URLSearchParams(searchParams);
        
        if (value === null || value === "همه" || value === "") {
            params.delete('transaction_type');
        } else {
            params.set('transaction_type', value);
        }
        params.set('page', '1');
        
        updateURL(params);
    }, [searchParams, updateURL]);

    const handlePriceChange = useCallback((newMinPrice: number, newMaxPrice: number) => {
        const params = new URLSearchParams(searchParams);
        
        if (newMinPrice === 0) {
            params.delete('minPrice');
        } else {
            params.set('minPrice', newMinPrice.toString());
        }
        
        if (newMaxPrice === 10000000) {
            params.delete('maxPrice');
        } else {
            params.set('maxPrice', newMaxPrice.toString());
        }
        
        params.set('page', '1');
        updateURL(params);
    }, [searchParams, updateURL]);

    useEffect(() => {
        if (selectedHouseType === 'همه') {
            handleHouseTypeChange(null);
        } else {
            const selected = HouseType.find(item => item.label === selectedHouseType);
            if (selected?.value) {
                handleHouseTypeChange(selected.value);
            }
        }
    }, [selectedHouseType, handleHouseTypeChange, HouseType]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handlePriceChange(minPrice, maxPrice);
        }, 300); 

        return () => clearTimeout(timeoutId);
    }, [minPrice, maxPrice, handlePriceChange]);

    const clearAllFilters = () => {
        setSelectedHouseType('همه');
        setMinPrice(0);
        setMaxPrice(10000000);
        
        const params = new URLSearchParams();
        params.set('page', '1');
        updateURL(params);
        
        handleClose(false);
    };

    const handleThumbMove =useCallback((clientX: number) => {
        if (!sliderRef.current || !activeThumb) return;

        const slider = sliderRef.current;
        const rect = slider.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const newValue = Math.round(percentage * 10000000);

        if (activeThumb === 'min') {
            const newMin = Math.min(newValue, maxPrice - 100000);
            setMinPrice(Math.max(0, newMin));
        } else {
            const newMax = Math.max(newValue, minPrice + 100000);
            setMaxPrice(Math.min(10000000, newMax));
        }
    } , [maxPrice,minPrice,activeThumb]);

    const handleMouseDown = (thumb: 'min' | 'max') => (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveThumb(thumb);
        handleThumbMove(e.clientX);
    };

    const handleTouchStart = (thumb: 'min' | 'max') => (e: React.TouchEvent) => {
        setActiveThumb(thumb);
        handleThumbMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (activeThumb) {
                handleThumbMove(e.clientX);
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (activeThumb) {
                handleThumbMove(e.touches[0].clientX);
            }
        };

        const handleMouseUp = () => {
            if (activeThumb) {
                setActiveThumb(null);
            }
        };

        const handleTouchEnd = () => {
            if (activeThumb) {
                setActiveThumb(null);
            }
        };

        if (activeThumb) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [activeThumb , handleThumbMove]);

    useEffect(() => {
        const resType = searchParams.get('transaction_type');
        const reserve = HouseType.find(r => r.value === resType);
        setSelectedHouseType(reserve?.label || 'همه');

        const urlMinPrice = searchParams.get('minPrice');
        const urlMaxPrice = searchParams.get('maxPrice');
        
        if (urlMinPrice) setMinPrice(parseInt(urlMinPrice));
        if (urlMaxPrice) setMaxPrice(parseInt(urlMaxPrice));
    }, [searchParams, HouseType]);

    const minPercent = (minPrice / 10000000) * 100;
    const maxPercent = (maxPrice / 10000000) * 100;

    return (
        <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 
        data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
        data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-4xl flex flex-col gap-8 items-center 
        justify-center mx-auto dark:bg-[#363636]'>
            <div className='flex flex-row justify-between w-full items-center'>
                <h2 className='text-[24px] font-[400]'>فیلترها</h2>
                <div onClick={() => handleClose(false)} className='flex flex-row gap-1.5 border border-[#FF4242] cursor-pointer text-[#FF4242] rounded-[64px] pb-1.5 pr-2.5 pl-2.5 pt-1.5 items-center justify-center'>
                    <LiaTimesSolid />
                    <span>بستن</span>
                </div>
            </div>
            <div className="w-full mt-1 mb-1 border-t border-[#b3b3b3] dark:border-white border-dashed transition-colors duration-300"></div>
            <div className='flex md:flex-row flex-col gap-3 w-full'>
                <fieldset className='border border-[#AAAAAA] rounded-[12px] w-full h-fit'>
                    <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>وضعیت رزرو:</legend>
                    <Popover open={openReserveType} onOpenChange={setOpenReserveType}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={openReserveType}
                                className="w-full h-[30px] justify-between text-[#5f5f5f] dark:hover:bg-transparent border-none bg-transparent dark:bg-transparent hover:bg-transparent"
                            >
                                <div className='flex flex-row gap-2 text-[#AAAAAA] items-center'>
                                    {selectedHouseType || "وضعیت رزرو"}
                                </div>
                                <ChevronDown className="ml-0.5 h-10 w-10 shrink-0 text-[#AAAAAA]" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 border-none min-w-[200px] w-fit">
                            <Command className="dark:bg-[#404040] bg-white border-none rounded-[6px]">
                                <CommandList>
                                    <CommandGroup>
                                        {HouseType.map((house, index) => (
                                            <CommandItem
                                                key={index}
                                                value={house.label}
                                                onSelect={(currentValue) => {
                                                    const selected = HouseType.find(item => item.label === currentValue);
                                                    if (selected) {
                                                        setSelectedHouseType(selected.label);
                                                    }
                                                    setOpenReserveType(false);
                                                }}
                                                className="dark:text-[#FFFFFF] text-black rounded-[3px]"
                                            >
                                                {selectedHouseType === house.label ? (
                                                    <Check className="h-4 w-4 dark:text-white text-black" />
                                                ) : null}
                                                {house.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </fieldset>
                <fieldset className='border border-[#AAAAAA] rounded-[12px] w-full p-4'>
                    <legend className='pr-1.5 pl-1.5 mr-1.5 text-[13px] text-[#AAAAAA]'>محدوده قیمت:</legend>
                    <div dir="ltr" className="flex flex-col gap-4">
                        <div ref={sliderRef} className="relative h-8 flex items-center">
                            <div className="absolute w-full h-2 bg-gray-200 rounded-lg"></div>
                            <div
                                className="absolute h-2 bg-[#10B981] rounded-lg"
                                style={{
                                    left: `${minPercent}%`,
                                    width: `${maxPercent - minPercent}%`,
                                }}
                            ></div>
                            <div
                                className="absolute w-3 h-3 bg-white border-2 border-[#10B981] rounded-full cursor-pointer shadow-lg z-10 transition-transform hover:scale-110"
                                style={{ left: `calc(${minPercent}% - 6px)` }}
                                onMouseDown={handleMouseDown('min')}
                                onTouchStart={handleTouchStart('min')}
                            ></div>
                            <div
                                className="absolute w-3 h-3 bg-white border-2 border-[#10B981] rounded-full cursor-pointer shadow-lg z-10 transition-transform hover:scale-110"
                                style={{ left: `calc(${maxPercent}% - 6px)` }}
                                onMouseDown={handleMouseDown('max')}
                                onTouchStart={handleTouchStart('max')}
                            ></div>
                        </div>
                        <div className="flex justify-between text-sm text-[#AAAAAA]">
                            <span>از: {minPrice.toLocaleString()} تومان</span>
                            <span>تا: {maxPrice.toLocaleString()} تومان</span>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="flex gap-4">
                <button
                    className='bg-[#FF4242] w-[120px] rounded-[10px] cursor-pointer py-2 text-white hover:bg-[#e53939] transition-colors duration-200'
                    onClick={clearAllFilters}
                >
                    حذف فیلتر
                </button>
            </div>
        </div>
    );
};

export default ReserveFilterItem;
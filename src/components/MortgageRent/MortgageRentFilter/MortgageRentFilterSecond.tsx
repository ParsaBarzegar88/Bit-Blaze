'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const MortgageRentFilterSecond: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [minimumMortgage, setMinimumMortgage] = useState<number | undefined>(
    searchParams.get('minMortgage') ? Number(searchParams.get('minMortgage')) : undefined
  );
  const [maximumMortgage, setMaximumMortgage] = useState<number | undefined>(
    searchParams.get('maxMortgage') ? Number(searchParams.get('maxMortgage')) : undefined
  );
  const [minimumRent, setMinimumRent] = useState<number | undefined>(
    searchParams.get('minRent') ? Number(searchParams.get('minRent')) : undefined
  );
  const [maximumRent, setMaximumRent] = useState<number | undefined>(
    searchParams.get('maxRent') ? Number(searchParams.get('maxRent')) : undefined
  );
  const [minimumMeterage, setMinimumMeterage] = useState<number | undefined>(
    searchParams.get('minArea') ? Number(searchParams.get('minArea')) : undefined
  );
  const [maximumMeterage, setMaximumMeterage] = useState<number | undefined>(
    searchParams.get('maxArea') ? Number(searchParams.get('maxArea')) : undefined
  );

  const updateSearchParams = (key: string, value: number | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (value === undefined || isNaN(value)) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }
    router.push(`?${params.toString()}`);
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<number | undefined>>,
    key: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? undefined : Number(e.target.value);
    setter(value);
    updateSearchParams(key, value);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full mt-10 items-end">
      <div className="flex flex-row lg:w-fit w-full gap-5">
        <div className="flex flex-col lg:w-fit w-full gap-1 group">
          <p className="text-[#AAAAAA] group-hover:text-[#FFFFFF] text-[13px]">حداقل رهن :</p>
          <input
            value={minimumMortgage ?? ''}
            onChange={handleInputChange(setMinimumMortgage, 'minMortgage')}
            className="h-[50px] w-full border-[#AAAAAA] border rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right pr-2 remove-arrows"
            type="number"
            placeholder="0 تومان"
            min="0"
          />
        </div>
        <div className="flex flex-col lg:w-fit w-full gap-1 group">
          <p className="text-[#AAAAAA] group-hover:text-[#FFFFFF] text-[13px]">حداکثر رهن :</p>
          <input
            value={maximumMortgage ?? ''}
            onChange={handleInputChange(setMaximumMortgage, 'maxMortgage')}
            className="h-[50px] w-full border-[#AAAAAA] border rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right pr-2 remove-arrows"
            type="number"
            placeholder="0 تومان"
            min="0"
          />
        </div>
      </div>
      <div className="h-[30px] hidden lg:flex w-[2px] bg-[#AAAAAA] mb-2"></div>
      <div className="flex flex-row lg:w-fit w-full gap-5">
        <div className="flex flex-col lg:w-fit w-full gap-1 group">
          <p className="text-[#AAAAAA] group-hover:text-[#FFFFFF] text-[13px]">حداقل اجاره :</p>
          <input
            value={minimumRent ?? ''}
            onChange={handleInputChange(setMinimumRent, 'minRent')}
            className="h-[50px] w-full border-[#AAAAAA] border rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right pr-2 remove-arrows"
            type="number"
            placeholder="0 تومان"
            min="0"
          />
        </div>
        <div className="flex flex-col lg:w-fit w-full gap-1 group">
          <p className="text-[#AAAAAA] group-hover:text-[#FFFFFF] text-[13px]">حداکثر اجاره :</p>
          <input
            value={maximumRent ?? ''}
            onChange={handleInputChange(setMaximumRent, 'maxRent')}
            className="h-[50px] w-full border-[#AAAAAA] border rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right pr-2 remove-arrows"
            type="number"
            placeholder="0 تومان"
            min="0"
          />
        </div>
      </div>
      <div className="h-[30px] hidden lg:flex w-[2px] bg-[#AAAAAA] mb-2"></div>
      <div className="flex flex-row lg:w-fit w-full gap-5">
        <div className="flex flex-col lg:w-fit w-full gap-1 group">
          <p className="text-[#AAAAAA] group-hover:text-[#FFFFFF] text-[13px]">حداقل متراژ :</p>
          <input
            value={minimumMeterage ?? ''}
            onChange={handleInputChange(setMinimumMeterage, 'minArea')}
            className="h-[50px] w-full border-[#AAAAAA] border rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right pr-2 remove-arrows"
            type="number"
            placeholder="0 متر"
            min="0"
          />
        </div>
        <div className="flex flex-col lg:w-fit w-full gap-1 group">
          <p className="text-[#AAAAAA] group-hover:text-[#FFFFFF] text-[13px]">حداکثر متراژ :</p>
          <input
            value={maximumMeterage ?? ''}
            onChange={handleInputChange(setMaximumMeterage, 'maxArea')}
            className="h-[50px] w-full border-[#AAAAAA] border rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right pr-2 remove-arrows"
            type="number"
            placeholder="0 متر"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default MortgageRentFilterSecond;
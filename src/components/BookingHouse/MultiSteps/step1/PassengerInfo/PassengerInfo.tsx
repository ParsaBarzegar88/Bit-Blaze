/* eslint-disable */
'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FaUsers, FaChevronUp, FaUserPlus, FaTrash } from 'react-icons/fa6';
import { GoHistory } from "react-icons/go";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
const DatePicker = dynamic(() => import("react-multi-date-picker"), {
  ssr: false,
});
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCookies } from 'next-client-cookies';

interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  nationalCode: string;
  birthDate: Date | null;
}

const PassengerInfo: React.FC = () => {
  const cookie = useCookies();
  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: '1',
      firstName: '',
      lastName: '',
      gender: 'male',
      nationalCode: '',
      birthDate: null,
    }
  ]);
  const [addedPassengers, setAddedPassengers] = useState<{ id: string; fullName: string }[]>([]);
  useEffect(() => {
    const bookCookie = cookie.get('book');
    if (bookCookie) {
      const parsedCookie = JSON.parse(bookCookie);
      if (parsedCookie.passengerInfo) {
        setAddedPassengers(parsedCookie.passengerInfo);
      }
    }
  }, [cookie]);
  useEffect(() => {
    const bookCookie = cookie.get('book');
    const bookData = bookCookie ? JSON.parse(bookCookie) : {};
    bookData.passengerInfo = addedPassengers;
    cookie.set('book', JSON.stringify(bookData));
  }, [addedPassengers, cookie]);

  const updatePassenger = (id: string, field: keyof Passenger, value: any) => {
    setPassengers(prev => prev.map(passenger =>
      passenger.id === id ? { ...passenger, [field]: value } : passenger
    ));
  };

  const addPassengerDisplay = (id: string) => {
    const passenger = passengers.find(p => p.id === id);
    if (passenger && passenger.firstName && passenger.lastName) {
      const fullName = `${passenger.firstName} ${passenger.lastName}`;
      const newPassenger = { id: Date.now().toString(), fullName };
      setAddedPassengers(prev => [...prev, newPassenger]);
    }
  };

  const removePassengerDisplay = (id: string) => {
    setAddedPassengers(prev => {
      const updatedPassengers = prev.filter(p => p.id !== id);
      const bookCookie = cookie.get('book');
      const bookData = bookCookie ? JSON.parse(bookCookie) : {};
      bookData.passengerInfo = updatedPassengers;
      cookie.set('book', JSON.stringify(bookData));
      return updatedPassengers;
    });
  };

  return (
    <div className='p-4 sm:p-6 dark:shadow-none shadow-lg border dark:border-[#333] border-gray-200 bg-white dark:bg-[#393939] w-full rounded-[24px] text-black dark:text-white font-sans' dir="rtl">
      <div className='w-full flex flex-col sm:flex-row justify-between items-center mb-4 p-2 rounded-xl dark:shadow-none shadow-lg border dark:border-0 dark:border-[#333] border-gray-200 dark:bg-[#4D4D4D] bg-gray-100'>
        <div className='flex flex-row gap-2 items-center text-lg dark:text-white text-gray-800 mb-2 sm:mb-0'>
          <FaUsers size={20} className='text-[#4f9623] dark:text-[#8CFF45]' />
          <span>مشخصات مسافران</span>
        </div>
        <div className='flex flex-row gap-2 items-center text-base text-[#4f9623] dark:text-[#8CFF45] cursor-pointer hover:opacity-80 transition-opacity'>
          <GoHistory size={18} />
          <span>انتخاب مسافران سابق</span>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        {passengers.map((passenger, index) => (
          <div key={passenger.id}>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
              <div className='flex flex-row w-full'>
                <fieldset className='border w-full h-fit rounded-2xl border-gray-300 dark:border-[#AAAAAA] focus-within:border-[#8CFF45] dark:focus-within:border-[#8CFF45] bg-white dark:bg-[#393939] text-black dark:text-gray-200 outline-none transition-all duration-200'>
                  <legend className='mr-4 text-sm'>نام :</legend>
                  <input
                    type="text"
                    value={passenger.firstName}
                    onChange={(e) => updatePassenger(passenger.id, 'firstName', e.target.value)}
                    className='w-full h-full mb-2 text-black dark:text-gray-200 mr-2 bg-transparent outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500'
                    placeholder='نام را وارد کنید'
                  />
                </fieldset>
              </div>
              <div className='flex flex-row w-full'>
                <fieldset className='border w-full h-fit rounded-2xl border-gray-300 dark:border-[#AAAAAA] focus-within:border-[#8CFF45] dark:focus-within:border-[#8CFF45] bg-white dark:bg-[#393939] text-black dark:text-gray-200 outline-none transition-all duration-200'>
                  <legend className='mr-4 text-sm'>نام خانوادگی :</legend>
                  <input
                    type="text"
                    value={passenger.lastName}
                    onChange={(e) => updatePassenger(passenger.id, 'lastName', e.target.value)}
                    className='w-full h-full mb-2 text-black dark:text-gray-200 mr-2 bg-transparent outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500'
                    placeholder='نام خانوادگی را وارد کنید'
                  />
                </fieldset>
              </div>
              <div className='flex flex-row w-full'>
                <fieldset className='border w-full h-fit rounded-2xl border-gray-300 dark:border-[#AAAAAA] focus-within:border-[#8CFF45] dark:focus-within:border-[#8CFF45] bg-white dark:bg-[#393939] text-black dark:text-gray-200 outline-none transition-all duration-200'>
                  <legend className='mr-4 text-sm'>جنسیت :</legend>
                  <div className='mb-2 mr-2'>
                    <Select 
                      value={passenger.gender} 
                      onValueChange={(value: 'male' | 'female') => updatePassenger(passenger.id, 'gender', value)}
                    >
                      <SelectTrigger className="w-[99%] !h-[25px] !bg-transparent !outline-none !border-0 !focus:border-0 text-black dark:text-white p-0 text-sm" dir='rtl'>
                        <SelectValue placeholder="انتخاب جنسیت" />
                      </SelectTrigger>
                      <SelectContent className='bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-black dark:text-white'>
                        <SelectItem value="male" className='focus:bg-gray-200 focus:text-black dark:focus:bg-gray-600 text-sm'>مرد</SelectItem>
                        <SelectItem value="female" className='focus:bg-gray-200 focus:text-black dark:focus:bg-gray-600 text-sm'>زن</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </fieldset>
              </div>
              <div className='flex flex-row w-full'>
                <fieldset className='border w-full h-fit rounded-2xl border-gray-300 dark:border-[#AAAAAA] focus-within:border-[#8CFF45] dark:focus-within:border-[#8CFF45] bg-white dark:bg-[#393939] text-black dark:text-gray-200 outline-none transition-all duration-200'>
                  <legend className='mr-4 text-sm'>کد ملی :</legend>
                  <input
                    type="text"
                    value={passenger.nationalCode}
                    onChange={(e) => updatePassenger(passenger.id, 'nationalCode', e.target.value)}
                    className='w-full h-full mb-2 text-black dark:text-gray-200 mr-2 bg-transparent outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500'
                    placeholder='کد ملی را وارد کنید'
                    maxLength={10}
                  />
                </fieldset>
              </div>
              <div className='flex flex-row w-full'>
                <fieldset className='border w-full h-fit rounded-2xl border-gray-300 dark:border-[#AAAAAA] focus-within:border-[#8CFF45] dark:focus-within:border-[#8CFF45] bg-white dark:bg-[#393939] text-black dark:text-gray-200 outline-none transition-all duration-200'>
                  <legend className='mr-4 text-sm'>تاریخ تولد :</legend>
                  <div className='mb-2 mr-2'>
                    <DatePicker
                      value={passenger.birthDate}
                      onChange={(date: DateObject | DateObject[] | null) => {
                        if (date instanceof DateObject) {
                          updatePassenger(passenger.id, 'birthDate', date.toDate());
                        } else if (Array.isArray(date) && date.length > 0) {
                          updatePassenger(passenger.id, 'birthDate', date[0].toDate());
                        } else {
                          updatePassenger(passenger.id, 'birthDate', null);
                        }
                      }}
                      format="YYYY/MM/DD"
                      calendar={persian}
                      locale={persian_fa}
                      inputClass="w-full bg-transparent text-black dark:text-gray-200 outline-none placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="تاریخ تولد را انتخاب کنید"
                      containerClassName="w-full"
                    />
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        ))}

        <div className='my-4 border-t-2 border-dashed border-gray-300 dark:border-gray-500 opacity-70'></div>
        <div className='flex flex-col flex-wrap sm:flex-row justify-between'>
          {addedPassengers.length > 0 ? (
            <div className='flex flex-row gap-2'>
              {addedPassengers.map((p) => (
                <div key={p.id} className='flex items-center gap-2 text-white bg-[#4f9623] dark:bg-[#8CFF45] p-2 rounded-lg dark:text-black'>
                  <span>{p.fullName}</span>
                  <button
                    onClick={() => removePassengerDisplay(p.id)}
                    className='text-red-500 hover:text-red-700 transition-colors'
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          <button
            onClick={() => addPassengerDisplay(passengers[0].id)}
            className='flex mt-5 sm:mt-0 justify-center items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border-[#4f9623] text-[#4f9623] dark:text-[#8CFF45] border dark:border-[#8CFF45] hover:bg-[#8CFF45]/10 transition-colors'
            disabled={!passengers[0].firstName || !passengers[0].lastName}
          >
            <FaUserPlus size={16} />
            <span>افزودن مسافر</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerInfo;
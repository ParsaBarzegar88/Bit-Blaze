/* eslint-disable */
import React from 'react'
import { ICreateTour } from '@/core/types/Tours/ITours'
import dynamic from "next/dynamic";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

const DatePicker = dynamic(() => import("react-multi-date-picker"), {
  ssr: false,
});

type ScheduleItem = {
  title: string;
  todos: [
    { time: string; todo: string },
    { time: string; todo: string }
  ];
};

interface StepFourProps {
  formData: ICreateTour
  setFormData: React.Dispatch<React.SetStateAction<ICreateTour>>
};

const StepFour: React.FC<StepFourProps> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6">
      {formData.schedule.map((day, dayIndex) => (
        <div key={dayIndex} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
          <div className='mb-4'>
            <label htmlFor={`day-title-${dayIndex}`} className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
              عنوان روز {dayIndex + 1} *
            </label>
            <input
              type="text"
              id={`day-title-${dayIndex}`}
              value={day.title}
              onChange={(e) => {
                const newSchedule: [ScheduleItem, ScheduleItem] = [
                  ...formData.schedule
                ] as [ScheduleItem, ScheduleItem];
                newSchedule[dayIndex] = { ...newSchedule[dayIndex], title: e.target.value };
                setFormData(prev => ({ ...prev, schedule: newSchedule }));
              }}
              placeholder={`عنوان روز ${dayIndex + 1}`}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white'
              required
            />
          </div>

          <div className="space-y-3">
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
              برنامه‌های روز {dayIndex + 1}
            </label>
            {day.todos.map((todo, todoIndex) => (
              <div key={todoIndex} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className='block mb-1 text-xs text-gray-600 dark:text-gray-400'>
                    زمان
                  </label>
                  <DatePicker
                    value={todo.time ? new Date(todo.time) : null}
                    onChange={(date: any) => {
                      if (date) {
                        const dateObj = new DateObject(date);
                        const newSchedule: [ScheduleItem, ScheduleItem] = [
                          ...formData.schedule
                        ] as [ScheduleItem, ScheduleItem];
                        newSchedule[dayIndex].todos[todoIndex] = {
                          ...newSchedule[dayIndex].todos[todoIndex],
                          time: dateObj.toDate().toISOString()
                        };
                        setFormData(prev => ({ ...prev, schedule: newSchedule }));
                      }
                    }}
                    calendar={persian}
                    locale={persian_fa}
                    inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white text-sm"
                    placeholder="زمان"
                  />
                </div>
                <div>
                  <label className='block mb-1 text-xs text-gray-600 dark:text-gray-400'>
                    فعالیت
                  </label>
                  <input
                    type="text"
                    value={todo.todo}
                    onChange={(e) => {
                      const newSchedule: [ScheduleItem, ScheduleItem] = [
                        ...formData.schedule
                      ] as [ScheduleItem, ScheduleItem];
                      newSchedule[dayIndex].todos[todoIndex] = {
                        ...newSchedule[dayIndex].todos[todoIndex],
                        todo: e.target.value
                      };
                      setFormData(prev => ({ ...prev, schedule: newSchedule }));
                    }}
                    placeholder="فعالیت"
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:text-white text-sm'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StepFour
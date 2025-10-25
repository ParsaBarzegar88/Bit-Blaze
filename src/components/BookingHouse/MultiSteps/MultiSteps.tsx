'use client';

import React, { FC, useState } from 'react';
import StepOne from './step1/StepOne';
import StepTwo from './step2/StepTwo';
import StepThree from './step3/StepThree';
import StepFour from './step4/StepFour';
import StepFive from './step5/StepFive';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FaBuilding, FaUsers } from "react-icons/fa6";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { FaMoneyBillWave } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoTicketOutline } from "react-icons/io5";
import { IBookingData } from '@/core/types/bookingHouse/IBookingHouse';

interface IProps{
  houseData:IBookingData
}
const MultiSteps:FC<IProps> = ({houseData}) => {
  const [step, setStep] = useState<string>('one');
  const steps = [
    { id: 'one', label: 'انتخاب هتل', component: <StepOne houseData={houseData} />, icon: <FaBuilding /> },
    { id: 'two', label: 'مشخصات مسافران', component: <StepTwo />, icon: <FaUsers /> },
    { id: 'three', label: 'تأیید اطلاعات', component: <StepThree />, icon: <HiOutlineDocumentCheck /> },
    { id: 'four', label: 'پرداخت آنلاین', component: <StepFour />, icon: <FaMoneyBillWave /> },
    { id: 'five', label: 'صدور بلیط', component: <StepFive />, icon: <LiaFileInvoiceDollarSolid /> },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === step);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const nextStep = () => {
    if (!isLastStep) {
      setStep(steps[currentStepIndex + 1].id);
    }
  };

  const prevStep = () => {
    if (!isFirstStep) {
      setStep(steps[currentStepIndex - 1].id);
    }
  };

  return (
    <div className="flex flex-col w-full mt-6 px-4 sm:px-6 lg:px-8">
      <div className="dark:bg-[#393939] bg-white border dark:border-[#333] border-gray-200 h-auto py-6 sm:py-4 w-full flex flex-col sm:flex-row justify-between items-center rounded-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center mx-auto gap-4 sm:gap-6 w-full px-4">
          {steps.map((stepItem, index) => {
            const isActive = step === stepItem.id;
            const isCompleted = steps.findIndex(s => s.id === step) > index;
            const shouldHaveGreenBorder = index <= currentStepIndex;
            
            return (
              <React.Fragment key={stepItem.id}>
                <div
                  onClick={() => setStep(stepItem.id)}
                  className="flex flex-col sm:flex-row items-center gap-3 cursor-pointer group transition-all duration-300"
                >
                  <div className={`
                    relative flex items-center justify-center
                    w-12 h-12 rounded-full border-2 transition-all duration-300
                    ${isActive 
                      ? 'dark:border-[#8CFF45] border-[#4f9623] dark:bg-[#8CFF45] bg-[#4f9623] scale-110' 
                      : isCompleted
                      ? 'dark:border-[#8CFF45] border-[#4f9623] dark:bg-[#8CFF45]/20 bg-[#4f9623]/20'
                      : shouldHaveGreenBorder
                      ? 'dark:border-[#8CFF45] border-[#4f9623] dark:bg-[#8CFF45]/10 bg-[#4f9623]/10'
                      : 'dark:border-gray-400 border-gray-300 dark:bg-[#2a2a2a] bg-gray-50'
                    }
                    group-hover:scale-105 group-hover:shadow-md
                  `}>
                    <div className={`
                      transition-colors duration-300 flex items-center justify-center
                      ${isActive 
                        ? 'dark:text-black text-white' 
                        : isCompleted
                        ? 'dark:text-[#8CFF45] text-[#4f9623]'
                        : shouldHaveGreenBorder
                        ? 'dark:text-[#8CFF45] text-[#4f9623]'
                        : 'dark:text-gray-400 text-gray-500'
                      }
                    `}>
                      {React.cloneElement(stepItem.icon, { size: 20 })}
                    </div>
                    <span className={`
                      absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center
                      ${isActive 
                        ? 'dark:bg-white bg-gray-800 dark:text-black text-white' 
                        : 'dark:bg-[#8CFF45] bg-[#4f9623] text-black'
                      }
                    `}>
                      {index + 1}
                    </span>
                  </div>
                  <div className={`
                    text-sm font-medium transition-all duration-300 text-center sm:text-right
                    ${isActive 
                      ? 'dark:text-[#8CFF45] text-[#4f9623] font-semibold scale-105' 
                      : isCompleted
                      ? 'dark:text-[#8CFF45] text-[#4f9623]'
                      : shouldHaveGreenBorder
                      ? 'dark:text-[#8CFF45] text-[#4f9623]'
                      : 'dark:text-gray-300 text-gray-600'
                    }
                    group-hover:dark:text-[#8CFF45] group-hover:text-[#4f9623]
                  `}>
                    {stepItem.label}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    hidden sm:block flex-1 border-t-2 border-dotted rounded-full transition-all duration-300
                    ${shouldHaveGreenBorder
                      ? 'dark:border-[#8CFF45] border-[#4f9623]'
                      : 'dark:border-gray-600 border-gray-300'
                    }
                  `}></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="mt-8 w-full mx-auto">
          {steps.find((s) => s.id === step)?.component}
      </div>
      <div className="flex justify-between items-center mt-8 w-full mx-auto border-2 border-dotted rounded-[36px] h-[84px] p-1.5">
        <div className='flex flex-row gap-1 mr-5'>
          <div className='flex flex-row gap-1.5 items-center text-[17px]'>
            <IoTicketOutline size={20}/>
            قیمت بلیط :
          </div>
          <div className='dark:text-[#8CFF45] text-[#4f9623]'>{houseData.info.price}</div>
        </div>
        <div className='flex flex-row gap-2 ml-5'>
          <button
            onClick={prevStep}
            disabled={isFirstStep}
            className={`
              flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300
              ${isFirstStep
                ? 'dark:bg-gray-700 bg-gray-300 dark:text-gray-500 text-gray-400 cursor-not-allowed'
                : 'dark:bg-[#8CFF45] bg-[#4f9623] dark:text-black text-white hover:shadow-lg transform hover:-translate-x-1'
              }
            `}
          >
            <FaChevronRight size={16} />
            مرحله قبلی
          </button>
          <button
            onClick={nextStep}
            disabled={isLastStep}
            className={`
              flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition-all duration-300
              ${isLastStep
                ? 'dark:bg-gray-700 bg-gray-300 dark:text-gray-500 text-gray-400 cursor-not-allowed'
                : 'dark:bg-[#8CFF45] bg-[#4f9623] dark:text-black text-white hover:shadow-lg transform hover:translate-x-1'
              }
            `}
          >
            مرحله بعدی
            <FaChevronLeft size={16} />
          </button>
        </div>
      </div>
      <div className="mt-6 w-full mx-auto">
        <div className="dark:text-gray-300 mb-2 justify-center flex w-full text-gray-600 text-sm font-medium">
          مرحله {currentStepIndex + 1} از {steps.length}
        </div>
        <div className="dark:bg-gray-700 bg-gray-200 h-2 rounded-full overflow-hidden">
          <div 
            className="dark:bg-[#8CFF45] bg-[#4f9623] h-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MultiSteps;
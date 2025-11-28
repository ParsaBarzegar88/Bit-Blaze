"use client"
import React, { FC, useState, useMemo } from 'react'
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { CreateTour } from '@/core/api/Tours/Tours';
import { ICreateTour } from '@/core/types/Tours/ITours';
import StepOne from './stepOne/stepOne';
import StepTwo from './CreateTour/stepTwo/stepTwo';
import StepThree from './CreateTour/stepThree/stepThree';
import StepFour from './CreateTour/stepFour/stepFour';

interface IProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTourModal: FC<IProps> = ({ onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ICreateTour>({
    userId: 0,
    title: '',
    address: '',
    photos: [],
    description: '',
    tag: '',
    price: '',
    startDate: '',
    endDate: '',
    services: [''],
    facilities: [''],
    cancellationPeriodDays: 0,
    locations: [
      { name: '', lat: '', lng: '' },
      { name: '', lat: '', lng: '' }
    ],
    schedule: [
      {
        title: '',
        todos: [
          { time: '', todo: '' },
          { time: '', todo: '' }
        ]
      },
      {
        title: '',
        todos: [
          { time: '', todo: '' },
          { time: '', todo: '' }
        ]
      }
    ]
  });

  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleCreateTour = async () => {
    setIsLoading(true);

    try {
      const submitData: ICreateTour = {
        ...formData,
        photos: [],
        userId: 12345
      };
      console.log("all data", submitData)
      const response = await CreateTour(submitData);
      console.log(response)
      if (response?.ok) {
        toast.success('تور با موفقیت ایجاد شد', {
          position: "top-center",
          autoClose: 2400,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
        });
        onClose(false);
        router.refresh();
      } else {
        toast.error("مشکلی در ایجاد تور به وجود آمده است", {
          position: "top-center",
          autoClose: 2400,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
        });
      }
    } catch (error) {
      console.error('Error creating tour:', error);
      toast.error("خطا در سرور", {
        position: "top-center",
        autoClose: 2400,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        style: { fontFamily: "IRANSansXFaNum", direction: "rtl" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const steps = useMemo(
    () => [
      {
        id: "one",
        label: "اطلاعات پایه",
        component: <StepOne formData={formData} setFormData={setFormData} />,
      },
      {
        id: "two", 
        label: "تاریخ و خدمات",
        component: <StepTwo formData={formData} setFormData={setFormData} />,
      },
      {
        id: "three",
        label: "لوکیشن و آدرس",
        component: (
          <StepThree
            formData={formData} 
            setFormData={setFormData} 
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        ),
      },
      {
        id: "four",
        label: "برنامه‌ریزی",
        component: <StepFour formData={formData} setFormData={setFormData} />,
      },
    ],
    [formData, selectedLocation] 
  );

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const currentStepComponent = steps[currentStep - 1]?.component;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm'>
      <div className='max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#333333] rounded-lg shadow-lg relative'>
        <button
          onClick={() => onClose(false)}
          className='absolute left-4 top-4 z-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
        >
          <IoClose size={24} className='text-gray-600 dark:text-gray-300' />
        </button>

        <div className='p-6'>
          <h2 className='text-xl font-bold mb-6 text-gray-800 dark:text-white text-center'>ایجاد تور جدید</h2>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`text-sm ${currentStep >= index + 1 ? 'text-blue-600' : 'text-gray-400'}`}
                >
                  {step.label}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            {currentStepComponent}
            <div className='flex gap-3 mt-8'>
              {currentStep > 1 && (
                <button
                  type='button'
                  onClick={prevStep}
                  className='flex-1 py-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
                >
                  مرحله قبل
                </button>
              )}
              
              {currentStep < steps.length ? (
                <button
                  type='button'
                  onClick={nextStep}
                  className='flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
                >
                  مرحله بعد
                </button>
              ) : (
                <button
                  type='button'
                  onClick={handleCreateTour}
                  disabled={isLoading}
                  className='flex-1 py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isLoading ? 'در حال ایجاد...' : 'ایجاد تور'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTourModal;
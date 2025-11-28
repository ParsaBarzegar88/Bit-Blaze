import ToursPageSection from '@/components/Tours/Tours'
import { Metadata } from 'next';
import React, { FC } from 'react'
import { ToastContainer } from 'react-toastify';

interface IGetSearchParams {
  searchParams?: Promise<{ [key: string]: string }>
}
export const metadata: Metadata = {
  title: "تور ها",
};

const TourPage: FC<IGetSearchParams> = async ({ searchParams }) => {
  const getSearchParams = await searchParams
  return (
    <>
      <ToursPageSection searchParams={getSearchParams} />
      <ToastContainer
        position="top-right"
        autoClose={2800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default TourPage
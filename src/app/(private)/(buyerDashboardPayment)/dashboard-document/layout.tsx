"use client"
import 'react-toastify/dist/ReactToastify.css';
import React, { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
interface IProps {
  children: ReactNode;
}


const DashboardDocumentLayout: FC<IProps> = ({ children }) => {
  return (
    <>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={2500}
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

export default DashboardDocumentLayout
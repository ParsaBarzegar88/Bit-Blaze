"use client"
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/AuthContext';
import React, { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
interface IProps {
  children: ReactNode;
}


const AuthLayout: FC<IProps> = ({ children }) => {
  return (
    <AuthProvider>
      <main className='text-white'>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </main>
    </AuthProvider>
  )
}

export default AuthLayout
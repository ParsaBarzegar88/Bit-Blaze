"use client"
import 'react-toastify/dist/ReactToastify.css';
import React, { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
interface IProps {
    children: ReactNode;
}

const MortgageRentLayout: FC<IProps> = ({ children }) => {
    return (
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
    )
}

export default MortgageRentLayout
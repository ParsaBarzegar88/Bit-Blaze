"use client"
import 'react-toastify/dist/ReactToastify.css';
import React, { FC, ReactNode } from 'react'
interface IProps {
    children: ReactNode;
}

const MortgageRentLayout: FC<IProps> = ({ children }) => {
    return (
        <main className='text-white'>
            {children}
        </main>
    )
}

export default MortgageRentLayout
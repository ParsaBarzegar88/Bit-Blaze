"use clinet"
import { FC, ReactNode } from 'react';
import { HouseProvider } from '@/context/HouseContext';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <HouseProvider>
            <main>
                {children}
            </main>
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
        </HouseProvider>
    );
};

export default Layout
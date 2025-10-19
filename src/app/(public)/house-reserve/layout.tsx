"use clinet"
import { FC, ReactNode } from 'react';
import { HouseProvider } from '@/context/HouseContext';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <HouseProvider>
            <main>
                {children}
            </main>
        </HouseProvider>
    );
};

export default Layout
"use client" 
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const ToggleDarkAndLightProvider: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>
);

export default ToggleDarkAndLightProvider;
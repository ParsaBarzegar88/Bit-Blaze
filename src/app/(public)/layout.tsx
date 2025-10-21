import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import ToggleDarkAndLightProvider from './ThemeProvider';
import { FooterFetch } from '@/core/api/Footer/Footer';
export const PeydaFanum = localFont({
  src: [
    {
      path: "../../assets/Fonts/IRANSansXFaNum-Medium.ttf",
      weight: "500"
    }
  ]
})
export interface IFooterResponse{
  error?:string;
  success?: boolean
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${PeydaFanum.className} bg-[#ffffff] antialiased dark:bg-[#232323] min-h-screen overflow-x-hidden flex justify-center`}
      >
        <ToggleDarkAndLightProvider>
          <div className='max-w-[1920px] w-full flex flex-col relative overflow-x-hidden'>
            <Header />
            <div className='relative'>
              {children}
            </div>
            <Footer action={FooterFetch} />
          </div>
        </ToggleDarkAndLightProvider>
      </body>
    </html>
  );
}




import localFont from 'next/font/local'
import "./globals.css";
import TokenRefresher from '@/utils/refreshToken';
import { CookiesProvider } from 'next-client-cookies/server';
import DashboardHeader from '@/components/Dashboard/DashboardHeader/DashboardHeader';
import ToggleDarkAndLightProvider from './ThemeProvider';
import DashboardMenu from '@/components/Dashboard/SellerDashboard/DashboardMenu/DashboardMenu';
import DashboardMenuResponsive from '@/components/Dashboard/SellerDashboard/DashboardMenu/DashboardMenuResponsive/DashboardMenuResponsive';
export const PeydaFanum = localFont({
  src: [
    {
      path: "../../../assets/Fonts/IRANSansXFaNum-Medium.ttf",
      weight: "500"
    }
  ]
})
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${PeydaFanum.className} bg-[#ECECEC] antialiased dark:bg-[#232323] mx-auto max-w-[99%] min-h-screen overflow-x-hidden flex justify-center`}
      >
        <CookiesProvider>
          <ToggleDarkAndLightProvider>
            <div className='flex flex-row-reverse gap-2 w-full'>
              <div className='flex flex-col gap-3 w-full'>
                <DashboardHeader />
                {children}
                <div className='max-[800px]:mt-3'>
                  <DashboardMenuResponsive/>
                </div>
              </div>
              <DashboardMenu/>
            </div>
            <TokenRefresher />
          </ToggleDarkAndLightProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}




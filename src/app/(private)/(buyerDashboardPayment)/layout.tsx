import localFont from 'next/font/local'
import "./globals.css";
import TokenRefresher from '@/utils/refreshToken';
import { CookiesProvider } from 'next-client-cookies/server';
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
        className={`${PeydaFanum.className} bg-[#e4e4e4] antialiased min-h-screen overflow-x-hidden flex justify-center`}
      >
        <CookiesProvider>
                {children}
            <TokenRefresher />
        </CookiesProvider>
      </body>
    </html>
  );
}
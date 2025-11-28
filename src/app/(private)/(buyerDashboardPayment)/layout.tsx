import { PeydaFanum } from '@/utils/fonts';
import TokenRefresher from '@/utils/refreshToken';
import { CookiesProvider } from 'next-client-cookies/server';
import "./globals.css";

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
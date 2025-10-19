import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';

export const PeydaFanum = localFont({
  src: [
    {
      path: "../../assets/Fonts/IRANSansXFaNum-Medium.ttf",
      weight: "500"
    }
  ]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PeydaFanum.className} antialiased bg-[#232323] min-h-screen overflow-x-hidden flex justify-center`}
      >
        <div className='max-w-[1920px] w-full flex flex-col relative overflow-x-hidden'>
          <Header />
          <div className='relative'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}




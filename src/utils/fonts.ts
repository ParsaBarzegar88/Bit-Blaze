import localFont from "next/font/local";

export const PeydaFanum = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSansXFaNum-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-peydafanum",
});

'use client'
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@/components/ui/button";
import HeroSectionFilter from "./HeroSectionFilter/HeroSectionFilter";
import TheDeltaSVG from "../landingPageSVG/theDeltaSVG";
import ArrowBRotate from "../landingPageSVG/arrowBRotateSVG";
import CountUp from "react-countup";
const HeroSection = () => {
  return (
    <section className="relative w-full max-[900px]:h-fit h-[58rem] p-4 md:p-5 bg-gradient-to-t from-[#232323]/80 to-transparent inset-0">
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          src={'/assets/LandingPage/LandingPageBannerBackground.png'}
          alt="بنر صفحه اصلی"
          priority
          className="object-cover"
        />
      </div>
      <div className={`absolute max-[500px]:w-[300px] max-[500px]:bottom-0 max-[500px]:h-[370px]  w-[500px] h-[500px]  md:w-[500px] md:h-[600px] lg:w-[754px] lg:h-[678px] bottom-0 left-1 max-md:-z-0  md:left-1/2 transform -translate-x-1/4  z-[1]`}>
        <Image
          priority
          fill
          className="w-full h-full"
          src={'/assets/LandingPage/BuildingBannerImage.png'}
          alt="BuildingBannerImage"
        />
      </div>
      <div className="relative flex flex-col text-white w-full">
        <div className="flex flex-row justify-center mt-32">
          <TheDeltaSVG />
        </div>
        <div className="flex flex-col mt-0  lg:mt-32">
          <div className="flex flex-col md:mx-auto lg:flex justify-center lg:flex-row sm:flex-row md:justify-between gap-6 md:gap-3 m-auto w-full max-w-[97%] h-fit">
            <div className="relative hidden md:flex flex-col gap-4 md:gap-5 order-2 lg:order-1 z-[20]">
              <div className="flex flex-row w-[120px] h-[48px] relative">
                <Image
                  className="absolute bg-white rounded-full border-2 border-[#94979C] z-10"
                  src={'/assets/LandingPage/Person1.png'}
                  width={48}
                  height={48}
                  alt="person1"
                  style={{ right: '0px', top: '0', objectFit: 'cover' }}
                />
                <Image
                  className="absolute bg-white rounded-full border-2 border-[#94979C] z-11"
                  src={'/assets/LandingPage/Person2.png'}
                  width={48}
                  height={48}
                  alt="person2"
                  style={{ right: '25px', top: '0', objectFit: 'cover' }}
                />
                <Image
                  className="absolute bg-white rounded-full border-2 border-[#94979C] z-12"
                  src={'/assets/LandingPage/Person3.png'}
                  width={48}
                  height={48}
                  alt="person3"
                  style={{ right: '50px', top: '0', objectFit: 'cover' }}
                />
                <Image
                  className="absolute bg-white rounded-full border-2 border-[#94979C] z-13"
                  src={'/assets/LandingPage/Person4.png'}
                  width={48}
                  height={48}
                  alt="person4"
                  style={{ right: '75px', top: '0', objectFit: 'cover' }}
                />
                <Image
                  className="absolute bg-white rounded-full border-2 border-[#94979C] z-13"
                  src={'/assets/LandingPage/Person5.png'}
                  width={48}
                  height={48}
                  alt="person5"
                  style={{ right: '100px', top: '0', objectFit: 'cover' }}
                />
              </div>
              <div className=" ">
                <h2 className="text-base">بیش از 7000+</h2>
                <div className=" text-base flex flex-row gap-1 items-center">
                  رضایت مشتریانی که به دلتا اعتماد کرده اند
                  <ArrowBRotate />
                </div>
              </div>
            </div>
            <div className="flex max-[500px]:-mt-[55px] max-[500px]:mr-5 flex-col md:justify-center gap-6 md:gap-10 order-3 z-[20] w-[40%] items-center">
              <div className="text-[16px] md:text-[14px] font-[400] text-center lg:text-right">
                <p className="flex flex-row gap-2 items-center justify-center lg:justify-start">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z" fill="white" />
                  </svg>
                  رزور ، رهن ، اجاره و حتی خرید و فروش ملک مورد <br />
                   نظرتون مثل آب خوردن فقط در دلتا ___________ 
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-3 md:gap-5 justify-center lg:justify-start">
                <Button variant="outline" size="sm" className="font-[500] text-[14px] md:text-[16px] p-2 cursor-pointer text-[#363636]">
                  آسون رزرو کن<MdKeyboardArrowLeft size={"2px"} />
                </Button>
                <Button size="sm" className="font-[500] text-[14px] md:text-[16px] p-2 cursor-pointer bg-[#363636] text-[#FFFFFF]">
                  رهن و اجاره ملک<MdKeyboardArrowLeft size={"2px"} />
                </Button>
              </div>
              <div className="flex flex-row items-center gap-6 md:gap-10 justify-center lg:justify-start">
                <div className="flex flex-col gap-1 md:gap-2 text-center">
                  <p className="font-[600] max-[500px]:text-[15px] text-[20px] md:text-[24px]"><CountUp start={0} end={8500} duration={6.5} separator="," suffix="+"/></p>
                  <p className="font-[400] max-[500px]:text-[10px] text-[12px] md:text-[14px]">منطقه برای رزرو</p>
                </div>
                <div className="h-[24px] md:h-[32px] w-[1px] md:w-[2px] bg-[#FFFFFF]"></div>
                <div className="flex flex-col gap-1 max-[500px]:mt-[12px] md:gap-2 text-center">
                  <p className="font-[600] max-[500px]:text-[15px] text-[20px] md:text-[24px]"><CountUp start={0} end={5600} duration={6.5} separator="," suffix="+"/></p>
                  <p className="font-[400] max-[500px]:text-[10px] text-[12px] md:text-[14px]">ملک برای رزرو و رهن اجاره</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden z-[50] lg:block">
            <HeroSectionFilter />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#232323]/100 to-transparent z-[6]"></div>
    </section>
  )
}

export default HeroSection;
import React from 'react'
import ProductManagerIcon from '../../../../public/assets/LandingPage/3D-icon-product-manager.png'
import Medal from '../../../../public/assets/LandingPage/3D-Medal.png'
import HeadPhone from '../../../../public/assets/LandingPage/3D-HeadPhone.png'
import Heart from '../../../../public/assets/LandingPage/3D-Heart.png'
import Image from 'next/image'
import ArrowTriangleGreenRightSVG from '../landingPageSVG/arrowTriangleGreenRightSVG'
import ArrowTriangleGreenLeftSVG from '../landingPageSVG/arrowTriangleGreenLeftSVG'
import SmileStickerSVG from '../landingPageSVG/smileStickerSVG'
import SupportSVG from '../landingPageSVG/supportSVG'
import MedalSVG from '../landingPageSVG/medalSVG'
import HomeLoveSVG from '../landingPageSVG/homeLoveSVG'
const AboutDelta = () => {
  return (
    <div className='flex flex-col mt-16 max-w-[100%] z-[10] w-full m-auto justify-center items-center gap-5 relative bg-[#232323] rounded-bl-[64px] rounded-br-[64px]'>
      <div className='flex flex-row gap-3 text-[#8CFF45] items-center font-[500] text-[16px] mx-auto'>
        <ArrowTriangleGreenRightSVG/>
        درباره ما
        <ArrowTriangleGreenLeftSVG/>
      </div>
      <h2 className="text-[#FFFFFF] text-[26px] font-[500]">
        <b className='text-[30px]'>دلتا رو بیشتر بشناس !</b>
      </h2>
      <p className="text-[#FFFFFF] text-[16px] font-[400]">
        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .
      </p>
      <div className='flex flex-row flex-wrap gap-10 justify-center mt-8 w-full mb-5'>
        <div className='flex flex-col w-fit max-[450px]:w-full max-[450px]:items-center gap-10'>
          <div className='bg-[#393939] max-[450px]:w-full w-[450px] 
                before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-[150px] mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-32 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.08rem] after:right-[7.5rem] after:shadow-[5px_10px_0_0_rgba(57,57,57,1)]'>
            <div className="absolute top-[-1.5rem] right-[5px] w-[5.77rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#393939]  transition-all duration-300"></div>
            <div className='bg-[#444444] max-[450px]:w-[95%] w-[434px] mt-3 mr-2
                  before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-[129px] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#444444] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.05rem] after:right-[6.5rem] after:shadow-[6px_10px_0_0_rgba(68,68,68,1)]'>
              <div className="absolute top-[-1.5rem] right-[5px] w-[5.05rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#444444] transition-all duration-300"></div>
              <div className='relative overflow-hidden'>
                <div className='flex flex-col mr-3 text-[#FFFFFF] gap-2'>
                  <div className='bg-[#FFFFFF] w-[46px] h-[46px] shadow-[0px_6px_20px_rgba(255,255,255,0.12)] rounded-2xl flex justify-center items-center z-[5]'>
                    <HomeLoveSVG/>
                  </div>
                  <h2 className='text-[20px] font-[600] max-[450px]:text-[15px]'>+ 12000 خونه فعال</h2>
                  <p className='max-[450px]:text-[10px]'>خانه هایی که نظافت و امنیت شان تامین شده !</p>
                  <div className="absolute left-[-5px] top-[-15px]  overflow-hidden rotate-[135deg]">
                    <Image className='object-cover' src={ProductManagerIcon} width={100} height={100} alt='ProductManagerIcon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#393939] max-[450px]:w-full w-[450px] 
                before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-[150px] mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-32 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.08rem] after:right-[7.5rem] after:shadow-[5px_10px_0_0_rgba(57,57,57,1)]'>
            <div className="absolute top-[-1.5rem] right-[5px] w-[5.77rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#393939]  transition-all duration-300"></div>
            <div className='bg-[#232323] max-[450px]:w-[95%] w-[434px] mt-3 mr-2
                  before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-[129px] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#232323] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.05rem] after:right-[6.5rem] after:shadow-[6px_10px_0_0_rgba(35,35,35,1)]'>
              <div className="absolute top-[-1.5rem] right-[5px] w-[5.05rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#232323] transition-all duration-300"></div>
              <div className='relative overflow-hidden'>
                <div className='flex flex-col mr-3 text-[#FFFFFF] gap-2'>
                  <div className='bg-[#FFFFFF] w-[46px] h-[46px] shadow-[0px_6px_20px_rgba(255,255,255,0.12)] rounded-2xl flex justify-center items-center z-[5]'>
                    <MedalSVG/>
                  </div>
                  <h2 className='text-[20px] font-[600] max-[450px]:text-[15px]'>+ 10 سال سابقه درخشان</h2>
                  <p className='max-[450px]:text-[10px]'>در مهمان نوازی به شما مسافران عزیز</p>
                  <div className="absolute -left-9 top-5  overflow-hidden rotate-[77.6deg]">
                    <Image className='object-cover' src={Medal} width={100} height={100} alt='ProductManagerIcon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col max-[450px]:w-full'>
          <div className='bg-[#393939] max-[450px]:w-full w-[450px] 
                before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-fit mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-32 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.08rem] after:right-[7.5rem] after:shadow-[5px_10px_0_0_rgba(57,57,57,1)]'>
            <div className="absolute top-[-1.5rem] right-[5px] w-[5.77rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#393939]  transition-all duration-300"></div>
            <div className='bg-[#7569FF] max-[450px]:w-[95%] w-[434px] mt-3 mr-2 z-[5]
                  before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-fit mb-2 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#7569FF] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.05rem] after:right-[6.5rem] after:shadow-[6px_10px_0_0_rgba(117,105,255,1)]'>
              <div className="absolute top-[-1.5rem] right-[5px] w-[5.05rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#7569FF] transition-all duration-300"></div>
              <div className='leading-[36px] p-5 relative z-[5] text-center text-[#FFFFFF]'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو د...
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-fit max-[450px]:w-full max-[450px]:items-center gap-10'>
          <div className='bg-[#393939] max-[450px]:w-full w-[450px] 
                before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-[150px] mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-32 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.08rem] after:right-[7.5rem] after:shadow-[5px_10px_0_0_rgba(57,57,57,1)]'>
            <div className="absolute top-[-1.5rem] right-[5px] w-[5.77rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#393939]  transition-all duration-300"></div>
            <div className='bg-[#232323] max-[450px]:w-[95%] w-[434px] mt-3 mr-2
                  before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-[129px] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#232323] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.05rem] after:right-[6.5rem] after:shadow-[6px_10px_0_0_rgba(35,35,35,1)]'>
              <div className="absolute top-[-1.5rem] right-[5px] w-[5.05rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#232323] transition-all duration-300"></div>
              <div className='relative overflow-hidden'>
                <div className='flex flex-col mr-3 text-[#FFFFFF] gap-2'>
                  <div className='bg-[#FFFFFF] w-[46px] h-[46px] shadow-[0px_6px_20px_rgba(255,255,255,0.12)] rounded-2xl flex justify-center items-center z-[5]'>
                    <SupportSVG/>
                  </div>
                  <h2 className='text-[20px] font-[600] max-[450px]:text-[15px]'>7 / 24  ساعت شبانه روز</h2>
                  <p className='max-[450px]:text-[10px]'>تیم پشتیبانی در تمام طول روز همراه شما هستن</p>
                  <div className="absolute left-[-5px] top-[-15px]  overflow-hidden rotate-[-45deg]">
                    <Image className='object-cover' src={HeadPhone} width={100} height={100} alt='ProductManagerIcon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#393939] max-[450px]:w-full w-[450px] 
                before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-[150px] mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-32 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.08rem] after:right-[7.5rem] after:shadow-[5px_10px_0_0_rgba(57,57,57,1)]'>
            <div className="absolute top-[-1.5rem] right-[5px] w-[5.77rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#393939]  transition-all duration-300"></div>
            <div className='bg-[#444444] max-[450px]:w-[95%] w-[434px] mt-3 mr-2
                  before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative  h-[129px] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#444444] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-6 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-6 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(23deg)] after:top-[-1.05rem] after:right-[6.5rem] after:shadow-[6px_10px_0_0_rgba(68,68,68,1)]'>
              <div className="absolute top-[-1.5rem] right-[5px] w-[5.05rem] h-[2rem] rounded-[14px] outline-[5px] outline-[#444444] transition-all duration-300"></div>
              <div className='relative overflow-hidden'>
                <div className='flex flex-col mr-3 text-[#FFFFFF] gap-2'>
                  <div className='bg-[#FFFFFF] w-[46px] h-[46px] shadow-[0px_6px_20px_rgba(255,255,255,0.12)] rounded-2xl flex justify-center items-center z-[5]'>
                    <SmileStickerSVG/>
                  </div>
                  <h2 className='text-[20px] font-[600] max-[450px]:text-[15px]'>+ 15.000 نظرات کاربران</h2>
                  <p className='max-[450px]:text-[10px]'>رضایت مسافرانی که از پلتفرم دلتا استفاده کردن</p>
                  <div className="absolute left-[-25px] top-[-15px]  overflow-hidden rotate-[120deg]">
                    <Image className='object-cover' src={Heart} width={100} height={100} alt='ProductManagerIcon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[-109px] top-20 transform w-[218px] h-[218px] blur-[50px] bg-[#7569FF]/15  rounded-full flex items-center justify-start p-4"></div>
    </div>
  )
}

export default AboutDelta
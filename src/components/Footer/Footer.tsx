import React from 'react'
import TheDeltaRealEstatementSVG from './footerSVG/theDeltaRealEstatementSVG'
import CallSVG from './footerSVG/callSVG'
import ArrowTriangleBlackLeftSVG from './footerSVG/arrowTriangleBlackLeftSVG'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import ManPic from '../../../public/assets/LandingPage/ManPic.png'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import NationalBusinessAssociation from '../../../public/assets/LandingPage/NationalBusinessAssociation.png'
import Enamad1 from '../../../public/assets/LandingPage/Enamad1.png'
import Enamad2 from '../../../public/assets/LandingPage/Enamad2.png'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Style from './footer.module.css'
const Footer = () => {
    return (
        <div className='max-w-[98%] w-full mx-auto px-2 sm:px-4'>
            <div className='items-end w-full flex justify-end'>
                <TheDeltaRealEstatementSVG />
            </div>
            
            <div className={`${Style.beforeMargin} max-[400px]:rounded-tr-[17px] max-[400px]:before:hidden max-[400px]:after:hidden bg-[#8CFF45] mb-5 relative w-full pb-2 sm:mt-0 mt-10 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#8CFF45] before:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] 
                    before:h-16 before:rounded-tr-[17px] before:w-[330px] before:absolute before:-translate-y-16 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(20deg)] after:top-[-1.09rem] after:right-[17.6%] after:shadow-[6px_10px_0_0_rgba(140,255,69,1)]
                    before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                    transition-all duration-300`}>
                    
                <div className="absolute max-[400px]:hidden top-[-3.9rem] right-[5px] w-[280px] h-[2.1rem] rounded-[34px] 
                        outline-[5px] outline-[#8CFF45] transition-all duration-300"></div>
                
                <div className='flex flex-col max-w-[98%] max-[400px]:-mt-10 w-full justify-center mx-auto'>
                    <div className='bg-[#232323] max-[400px]:hidden rounded-2xl flex flex-row gap-2  w-[250px] h-[50px] justify-center items-center text-[#FFFFFF] -mt-12 z-[1] sm:mr-2 mr-4'>
                        09229167194 - 09154569872
                        <CallSVG />
                    </div>
                    
                    <div className='flex flex-col lg:flex-row justify-between gap-8 mt-8'>
                        <div className='flex flex-col gap-3 w-full lg:w-1/2'>
                            <div className='flex flex-row text-[#363636] gap-3 items-center font-[500] text-[16px]'>
                                همیشه کنارتیم
                                <ArrowTriangleBlackLeftSVG />
                            </div>
                            <h2 className="text-[#363636] font-[500]">
                                <b className='text-2xl md:text-[30px]'>24 ساعت روز و 7 روز هفته در اختیار شماییم !</b>
                            </h2>
                            <p className='text-[#363636] text-sm md:text-base'>تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .</p>
                            
                            <div className='flex flex-col gap-6 w-full'>
                                <div className='flex flex-col sm:flex-row gap-5'>
                                    <fieldset className="border border-[#363636] p-2 sm:p-3 rounded-2xl w-full">
                                        <legend className="text-[#363636] text-sm sm:text-[16px] font-[400] px-2">
                                            نام و نام خانوادگی :
                                        </legend>
                                        <input
                                            type="text"
                                            className="w-full outline-0 text-[#tempUserId] mr-1 sm:mr-2 bg-transparent"
                                            placeholder="وارد کنید ...."
                                        />
                                    </fieldset>
                                    <fieldset className="border border-[#363636] p-2 sm:p-3 rounded-2xl w-full">
                                        <legend className="text-[#363636] text-sm sm:text-[16px] font-[400] px-2">
                                            شماره یا ایمیل :
                                        </legend>
                                        <input
                                            type="text"
                                            className="w-full outline-0 text-[#tempUserId] mr-1 sm:mr-2 bg-transparent"
                                            placeholder="وارد کنید ...."
                                        />
                                    </fieldset>
                                </div>
                                <div>
                                    <fieldset className="border border-[#363636] p-2 sm:p-3 rounded-2xl w-full h-[150px]">
                                        <legend className="text-[#363636] text-sm sm:text-[16px] font-[400] px-2">
                                            پیام شما :
                                        </legend>
                                        <input
                                            type="text"
                                            className="w-full outline-0 text-[#tempUserId] mr-1 sm:mr-2 bg-transparent"
                                            placeholder="...."
                                        />
                                    </fieldset>
                                </div>
                                <button className='flex flex-row gap-3 justify-center items-center bg-[#363636] text-[#FFFFFF] w-full h-[50px] rounded-2xl'>
                                    ارسال پیام
                                    <MdOutlineKeyboardArrowLeft />
                                </button>
                            </div>
                        </div>
                        
                        <div className='relative w-full lg:w-1/2 justify-center lg:justify-end mt-8 lg:mt-0 hidden lg:flex'>
                            <div className='relative w-full max-w-[350px] lg:max-w-[450px]'>
                                <Image 
                                    className='grayscale-75 object-cover w-full h-auto' 
                                    src={ManPic} 
                                    alt='Man Pic' 
                                    layout="responsive"
                                    width={450}
                                    height={200}
                                />
                                <FaStar size={12} className='absolute text-[#232323] top-[15%] right-2' />
                                <FaStar size={10} className='absolute text-[#232323] top-[-5%] right-[45%]' />
                                <FaStar size={16} className='absolute text-[#232323] top-[45%] right-2' />
                                <FaStar size={16} className='absolute text-[#232323] top-[45%] left-2' />
                                <FaStar size={12} className='absolute text-[#232323] top-[15%] left-2' />
                                <FaStar size={16} className='absolute text-[#232323] top-[2%] left-[15%]' />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-6 bg-[#232323] lg:mt-0 h-fit max-w-[98%] mt-2 mx-auto my-5 w-full rounded-[24px] sm:rounded-[46px] p-4 sm:p-0'>
                    <h2 className="text-[#FFFFFF] font-[500] max-w-[97%] mx-auto w-full mt-6 sm:mt-10">
                        <b className='text-2xl md:text-[30px]'>پلتفرم دلتا</b>
                    </h2>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 sm:items-center lg:items-start lg:grid-cols-4 gap-8 max-w-[97%] mx-auto w-full'>
                        <div className='text-[#FFFFFF] leading-[36px] max-w-full w-full text-sm md:text-base'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ..
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='text-lg md:text-[18px] text-[#FFFFFF]'>نحوه رزرو اقامتگاه</span>
                            <span className='text-sm md:text-[14px] text-[#FFFFFF]'>راهنمای رزرو اقامتگاه</span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA]'>شیوه پرداخت</span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA]'>لغو رزرو اقامتگاه</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='text-lg md:text-[18px] text-[#FFFFFF]'>خدمات مشتریان</span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA]'>پرسش های متداول مهمان</span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA]'>پرسش های متداول میزبان</span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA]'>چطور اقامتگاه ثبت کنم ؟</span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA]'>حریم شخصی کاربران</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='text-lg md:text-[18px] text-[#FFFFFF]'>راه ارتباطی دلتا</span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA] flex flex-row gap-2 items-center'>
                                <BiPhoneCall size={16} />
                                09229167194 - 098541612310
                            </span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA] flex flex-row gap-2 items-center'>
                                <div>@</div>
                                Delta@gmail.com
                            </span>
                            <span className='text-sm md:text-[14px] text-[#AAAAAA] flex flex-row gap-2 items-center'>
                                <IoLocationOutline size={16} />
                                گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده
                            </span>
                        </div>
                    </div>
                    
                    <div className='flex flex-row gap-5 max-w-[97%] mx-auto w-full my-5 justify-center sm:justify-start'>
                        <div className='bg-white rounded-2xl flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14'>
                            <Image src={NationalBusinessAssociation} alt='NationalBusinessAssociation' width={50} height={50} className='w-10 h-10 sm:w-12 sm:h-12' />
                        </div>
                        <div className='border border-[#FFFFFF] rounded-2xl flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14'>
                            <Image src={Enamad1} alt='Enamad1' width={50} height={50} className='w-10 h-10 sm:w-12 sm:h-12' />
                        </div>
                        <div className='border border-[#FFFFFF] rounded-2xl flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14'>
                            <Image src={Enamad2} alt='Enamad2' width={50} height={50} className='w-10 h-10 sm:w-12 sm:h-12' />
                        </div>
                    </div>
                    
                    <div className='h-[1px] w-full bg-[#FFFFFF] max-w-[97%] mx-auto'></div>
                    
                    <div className='flex flex-col sm:flex-row justify-between max-w-[97%] w-full mx-auto items-center gap-4 py-4'>
                        <p className='text-[#FFFFFF] text-sm md:text-base text-center sm:text-right'>
                            تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است .
                        </p>
                        <div className='flex flex-row gap-4'>
                            <div className='border border-[#FFFFFF] text-white hover:bg-white hover:text-[#323232] transition duration-300 rounded-2xl flex justify-center items-center w-10 h-10'>
                                <CiLinkedin size={20}/>
                            </div>
                            <div className='border border-[#FFFFFF] text-white hover:bg-white hover:text-[#323232] transition duration-300 rounded-2xl flex justify-center items-center w-10 h-10'>
                                <FaInstagram size={18}/>
                            </div>
                            <div className='border border-[#FFFFFF] text-white hover:bg-white hover:text-[#323232] transition duration-300 rounded-2xl flex justify-center items-center w-10 h-10'>
                                <FaTelegram size={18}/>
                            </div>
                            <div className='border border-[#FFFFFF] text-white hover:bg-white hover:text-[#323232] transition duration-300 rounded-2xl flex justify-center items-center w-10 h-10'>
                                <FaWhatsapp size={18}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import Image from 'next/image'
import { GoArrowLeft } from "react-icons/go";
import StarCategorySVG from '../../landingPageSVG/starCategorySVG';
import { getCategories } from "@/core/api/LandingPage/categories";

const CategoryList = async () => {
    const categoryData = await getCategories()
    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4 mt-5 animate-fade flex-wrap">
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer w-full sm:w-[48%] lg:w-auto">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/villa.png'} width={36} height={36} alt="villa" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] duration-300 after:w-5 after:h-5 
                    after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] 
                    after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute 
                    flex w-full lg:w-[218px] h-[75px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] 
                    hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E]
                    rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] 
                    before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px]
                    before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow after:duration-300 before:duration-300
                    group">
                    <div className="absolute top-[-2.1rem] right-[5px] w-[4.6rem] h-[2rem] rounded-[14px] 
                        outline-[5px] outline-[#2E2E2E] 
                        group-hover:outline-[#8CFF45] 
                        transition-all duration-300">
                    </div>
                    <StarCategorySVG />
                    {categoryData.data[0].dataValues.name}
                    <StarCategorySVG />
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer w-full sm:w-[48%] lg:w-auto">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/cottage.png'} width={36} height={36} alt="cottage" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] duration-300 after:w-5 after:h-5 
                    after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] 
                    after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute 
                    flex w-full lg:w-[218px] h-[75px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] 
                    hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E]
                    rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] 
                    before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px]
                    before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow after:duration-300 before:duration-300
                    group">
                    <div className="absolute top-[-2.1rem] right-[5px] w-[4.6rem] h-[2rem] rounded-[14px] 
                        outline-[5px] outline-[#2E2E2E] 
                        group-hover:outline-[#8CFF45] 
                        transition-all duration-300">
                    </div>
                    <StarCategorySVG />
                    {categoryData.data[1].dataValues.name}
                    <StarCategorySVG />
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer w-full sm:w-[48%] lg:w-auto">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/wooden-house.png'} width={36} height={36} alt="wooden-house" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] duration-300 after:w-5 after:h-5 
                    after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] 
                    after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute 
                    flex w-full lg:w-[218px] h-[75px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] 
                    hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E]
                    rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] 
                    before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px]
                    before:top-[0px] before:-translate-y-[2.2rem] before:transition-colors after:transition-shadow after:duration-300 before:duration-300
                    group">
                    <div className="absolute top-[-2.1rem] right-[5px] w-[4.12rem] h-[2.2rem] rounded-tr-[6px] rounded-tl-[3px]
                        outline-[5px] outline-[#2E2E2E] 
                        group-hover:outline-[#8CFF45] 
                        transition-all duration-300">
                    </div>
                    <StarCategorySVG />
                    {categoryData.data[6].dataValues.name}
                    <StarCategorySVG />
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer w-full sm:w-[48%] lg:w-auto">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/house.png'} width={36} height={36} alt="house" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] duration-300 after:w-5 after:h-5 
                    after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] 
                    after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute 
                    flex w-full lg:w-[218px] h-[75px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] 
                    hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E]
                    rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] 
                    before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px]
                    before:top-[0px] before:-translate-y-[2.2rem] before:transition-colors after:transition-shadow after:duration-300 before:duration-300
                    group">
                    <div className="absolute top-[-2.1rem] right-[5px] w-[4.12rem] h-[2.2rem] rounded-tr-[6px] rounded-tl-[3px]
                        outline-[5px] outline-[#2E2E2E] 
                        group-hover:outline-[#8CFF45] 
                        transition-all duration-300">
                    </div>
                    <StarCategorySVG />
                    {categoryData.data[2].dataValues.name}
                    <StarCategorySVG />
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer w-full sm:w-[48%] lg:w-auto">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/apartment.png'} width={36} height={36} alt="apartment" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] duration-300 after:w-5 after:h-5 
                    after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] 
                    after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute 
                    flex w-full lg:w-[218px] h-[75px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] 
                    hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E]
                    rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] 
                    before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px]
                    before:top-[0px] before:-translate-y-[2.2rem] before:transition-colors after:transition-shadow after:duration-300 before:duration-300
                    group">
                    <div className="absolute top-[-2.1rem] right-[5px] w-[4.12rem] h-[2.2rem] rounded-tr-[6px] rounded-tl-[3px]
                        outline-[5px] outline-[#2E2E2E] 
                        group-hover:outline-[#8CFF45] 
                        transition-all duration-300">
                    </div>
                    <StarCategorySVG />
                    {categoryData.data[3].dataValues.name}
                    <StarCategorySVG />
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer w-full sm:w-[48%] lg:w-auto">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/cottage.png'} width={36} height={36} alt="cottage" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] duration-300 after:w-5 after:h-5 
                    after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] 
                    after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute 
                    flex w-full lg:w-[218px] h-[75px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] 
                    hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E]
                    rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] 
                    before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px]
                    before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow after:duration-300 before:duration-300
                    group">
                    <div className="absolute top-[-2.1rem] right-[5px] w-[4.12rem] h-[2.2rem] rounded-tr-[6px] rounded-tl-[3px]
                        outline-[5px] outline-[#2E2E2E] 
                        group-hover:outline-[#8CFF45] 
                        transition-all duration-300">
                    </div>
                    <StarCategorySVG />
                    {categoryData.data[4].dataValues.name}
                    <StarCategorySVG />
                </div>
            </div>
        </div>
    )
}

export default CategoryList
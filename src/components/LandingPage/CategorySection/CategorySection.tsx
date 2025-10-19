import React from "react";
import CategoryList from "./CategoryList/CategoryList";
import ArrowTriangleGreenRightSVG from "../landingPageSVG/arrowTriangleGreenRightSVG";
import ArrowTriangleGreenLeftSVG from "../landingPageSVG/arrowTriangleGreenLeftSVG";
const CategorySection = async () => {
    return (
        <div className="mt-20 lg:mt-32 mx-auto max-w-[95%] w-full flex flex-col justify-center items-center gap-5 relative px-4 lg:px-0">
            <div className="flex flex-row gap-3 text-[#8CFF45] items-center font-[500] text-[14px] lg:text-[16px]">
                <ArrowTriangleGreenRightSVG/>
                دسته بندی املاک دلتا
                <ArrowTriangleGreenLeftSVG/>
            </div>
            <h2 className="text-[#FFFFFF] text-[24px] lg:text-[30px] font-[500] text-center">
                هر ملکی بخوای اینجا <b className="text-[24px] lg:text-[30px]">پیدا میشه</b> !
            </h2>
            <p className="text-[#FFFFFF] text-[14px] lg:text-[16px] font-[400] text-center max-w-[90%] lg:max-w-full">
                با کلیک به روی هر دسته بندی می‌توانید تمام آگهی مربوط آن را مشاهده کنید و به ملک مورد
                علاقه خود برسید
            </p>
            <CategoryList/>
            <div className="absolute left-[-50px] top-1/4  lg:left-[-98px] lg:top-1/2 transform -translate-y-1/2 w-[120px] h-[120px] lg:w-[218px] lg:h-[218px] blur-[40px] lg:blur-[50px] bg-[#8CFF45]/15 rounded-full"></div>
        </div>
    );
};

export default CategorySection;